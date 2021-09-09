import React, {
  forwardRef,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
import { BackHandler, Dimensions, Text, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
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
  onContinue: () => void;
  title: string;
  children: ReactNode;
  confirm: string;
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

  const translateY = useSharedValue(snapPoints[MODAL_SNAP_POINTS.length - 1]);

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
    (point: number) => {
      'worklet';

      translateY.value = withTiming(point, {
        duration: 350,
      });
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
      const initialSnapPoint = snapPoints.length - 2;
      animateToPoint(snapPoints[snapPoint ?? initialSnapPoint]);
    },
    [animateToPoint, snapPoints],
  );

  const hidden = useCallback(() => {
    animateToPoint(snapPoints[snapPoints.length - 1]);
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

  const onComplete = () => {
    onContinue();
    hidden();
  };

  return (
    <View style={styles.container}>
      <ModalBackground
        translateY={translateY}
        snapPoints={[
          snapPoints[snapPoints.length - 2],
          snapPoints[snapPoints.length - 1],
        ]}
        onPress={hidden}
      />

      <PanGestureHandler onGestureEvent={panHandler}>
        <Animated.View style={[styles.header, style]}>
          <ModalIndicator />

          <View style={styles.headerContent}>
            <Text style={styles.title}>{title}</Text>

            <WithoutFeedbackButton
              title={confirm}
              onPress={onComplete}
              titleStyle={styles.titleButtonOK}
              hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }}
            />
          </View>

          <Animated.View style={[styles.contentContainer, styleContent]}>
            {children}
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default memo(forwardRef(Modal));
