import React, { useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

type IncrementDecrementProps = {
  title: string;
  description: string;
  style?: ViewStyle;
};
const IncrementDecrement: React.FC<IncrementDecrementProps> = ({
  title,
  description,
  style,
}) => {
  const [value, setValue] = useState(0);

  const onIncrement = () => {
    setValue(v => v + 1);
  };

  const onDecrement = () => {
    setValue(v => Math.max(v - 1, 0));
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.buttons}>
        <RectButton
          style={styles.button}
          rippleColor={StyleGuide.palette.secondary}
          onPress={onDecrement}>
          <View style={[styles.round]}>
            <Icon name="minus" color={StyleGuide.palette.secondary} size={20} />
          </View>
        </RectButton>

        <Text style={styles.value}>{value}</Text>
        <RectButton
          style={styles.button}
          rippleColor={StyleGuide.palette.secondary}
          onPress={onIncrement}>
          <View style={[styles.round]}>
            <Icon name="plus" color={StyleGuide.palette.secondary} size={20} />
          </View>
        </RectButton>
      </View>
    </View>
  );
};

export default IncrementDecrement;
