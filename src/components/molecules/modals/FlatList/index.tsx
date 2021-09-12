import React, {
  forwardRef,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  BackHandler,
  Dimensions,
  Text,
  View,
  Modal as RNModal,
} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import WithoutFeedbackButton from '~/components/atoms/buttons/WithoutFeedbackButton';
import ModalBackground from '~/components/atoms/ModalBackground';
import ModalIndicator from '~/components/atoms/ModalIndicator';
import { useInteractivePanGestureHandler } from '~/hooks/useInteractivePanGestureHandler';

const HEADER_HEIGHT = 0;
const STATUS_BAR_HEIGHT = 0;

import { MODAL_SNAP_POINTS } from './constants';

import styles, { headerHeight } from './styles';

const { height } = Dimensions.get('window');

type ModalProps = {
  onContinue?: () => void;
  title?: string;
  children: ReactNode;
  confirm?: string;
  itemHeight: number;
  itemsSize: number;
  full?: boolean;
};

export type ModalHandler = {
  show: (snapPoint?: number) => void;
  hidden: () => void;
};

const Modal: React.ForwardRefRenderFunction<ModalHandler, ModalProps> = (
  {
    onContinue,
    title,
    children,
    confirm,
    itemHeight = 0,
    itemsSize = 0,
    full = false,
  },
  ref,
) => {
  const [visible, setVisible] = useState(false);
  const snapPointRef = useRef<number | undefined>();
  const snapPoints = useMemo(() => {
    const contentHeight = height - (itemHeight * itemsSize + headerHeight);

    const [first, second, third] = MODAL_SNAP_POINTS;

    // if (contentHeight > third) {
    //   return [first, contentHeight, third];
    // }

    if (full) {
      return [first, Math.max(contentHeight, second), third];
    }

    return [Math.max(contentHeight, second), third];
  }, [full, itemHeight, itemsSize]);

  const translateY = useSharedValue(
    snapPoints[full ? MODAL_SNAP_POINTS.length - 1 : 1],
  );

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  }, [translateY.value]);

  const styleContent = useAnimatedStyle(() => {
    return {
      paddingBottom: translateY.value + HEADER_HEIGHT + STATUS_BAR_HEIGHT,
    };
  }, [translateY.value]);

  const animateToPoint = useCallback(
    (point: number, onFinish?: { fn: (args: any) => void; args: any }) => {
      'worklet';

      translateY.value = withTiming(
        point,
        {
          duration: 350,
        },
        isFinished => {
          if (isFinished && onFinish) {
            runOnJS(onFinish?.fn)(onFinish?.args);
          }
        },
      );
    },
    [translateY],
  );

  const { panHandler } = useInteractivePanGestureHandler(
    translateY,
    snapPoints,
    animateToPoint,
  );

  const show = useCallback(
    (snapPoint?: number) => {
      setVisible(true);
      snapPointRef.current = snapPoint;
    },
    [animateToPoint, snapPoints],
  );

  const hidden = useCallback(() => {
    animateToPoint(snapPoints[snapPoints.length - 1], {
      fn: setVisible,
      args: false,
    });
  }, [animateToPoint, snapPoints]);

  useImperativeHandle(ref, () => ({
    show,
    hidden,
  }));

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      const modalOpen = translateY.value !== snapPoints[snapPoints.length - 1];
      if (modalOpen) {
        hidden();

        return true;
      }

      return false;
    });
  }, [hidden, snapPoints, translateY.value]);

  useEffect(() => {
    if (visible) {
      const initialSnapPoint = snapPoints.length - 2;
      animateToPoint(snapPoints[snapPointRef.current ?? initialSnapPoint]);
    }
  }, [visible]);

  const onComplete = () => {
    onContinue?.();
    hidden();
  };

  return (
    <RNModal
      style={styles.container}
      transparent={true}
      visible={visible}
      animationType="none"
      statusBarTranslucent>
      <ModalBackground
        translateY={translateY}
        snapPoints={[
          snapPoints[snapPoints.length - 2],
          snapPoints[snapPoints.length - 1],
        ]}
        onPress={hidden}
      />
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={panHandler} activeOffsetY={[0, 0]}>
          <Animated.View style={[styles.header, style]}>
            <ModalIndicator />

            <View style={styles.headerContent}>
              {title && <Text style={styles.title}>{title}</Text>}

              {confirm && (
                <WithoutFeedbackButton
                  title={confirm}
                  onPress={onComplete}
                  titleStyle={styles.titleButtonOK}
                  hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }}
                />
              )}
            </View>

            <Animated.View style={[styles.contentContainer, styleContent]}>
              {children}
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </RNModal>
  );
};

export default memo(forwardRef(Modal));
