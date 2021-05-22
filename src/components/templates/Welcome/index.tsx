import React, { ReactNode, useRef } from 'react';
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');

type SlidesProps = {
  items: ReactNode[];
  buttons: ReactNode;
};

const Welcome: React.FC<SlidesProps> = ({ items, buttons }) => {
  const scrollRef = useRef<ScrollView>(null);

  const onRightPress = (index: number = 1) => {
    scrollRef.current?.scrollTo({
      x: (index + 1) * width,
      animated: false,
    });
  };

  const onLeftPress = (index: number = 1) => {
    scrollRef.current?.scrollTo({
      x: (index - 1) * width,
      animated: false,
    });
  };

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}>
      {items.map((Item, index) => (
        <View style={{ width }} key={index}>
          <View style={styles.overlay} pointerEvents={'box-none'}>
            <View style={styles.navigation} pointerEvents={'box-none'}>
              <TouchableOpacity
                style={styles.leftAction}
                onPress={() => onLeftPress(index)}
                activeOpacity={1}
              />
              <TouchableOpacity
                style={styles.rightAction}
                onPress={() => onRightPress(index)}
                activeOpacity={1}
              />
            </View>
            {buttons}
          </View>

          {Item}
        </View>
      ))}
    </ScrollView>
  );
};

export default Welcome;
