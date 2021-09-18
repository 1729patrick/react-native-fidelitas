import React, {
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');

type RegisterProps = {
  logo?: ReactNode;
  steps: ReactNode[];
  style?: StyleProp<ViewStyle>;
  scrollable?: boolean;
};

export type RegisterHandler = {
  scrollToIndex: (index: number) => void;
};

const Register: React.ForwardRefRenderFunction<RegisterHandler, RegisterProps> =
  ({ logo, steps, style, scrollable = true }, ref) => {
    const scrollRef = useRef<ScrollView>(null);

    const scrollToIndex = (index: number) => {
      scrollRef.current?.scrollTo({ x: index * width });
    };

    useImperativeHandle(
      ref,
      () => ({
        scrollToIndex,
      }),
      [],
    );

    const ScrollableItem = useMemo(() => {
      return steps.map((step, index) => (
        <View key={index} style={[styles.step]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.logo}>{logo}</View>
            {step}
          </ScrollView>
        </View>
      ));
    }, [steps]);

    const ViewItem = useMemo(() => {
      return steps.map((step, index) => (
        <View key={index} style={[styles.step, style]}>
          {step}
        </View>
      ));
    }, [steps]);

    return (
      <>
        <ScrollView
          ref={scrollRef}
          horizontal
          overScrollMode="never"
          keyboardShouldPersistTaps="always"
          snapToInterval={width}
          disableIntervalMomentum
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          scrollEnabled={false}>
          {scrollable ? ScrollableItem : ViewItem}
        </ScrollView>
      </>
    );
  };

export default forwardRef(Register);
