import React, { useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

type IncrementDecrementProps = {
  title?: string;
  description?: string;
  style?: ViewStyle;
  onChange: (value: number) => void;
};
const IncrementDecrement: React.FC<IncrementDecrementProps> = ({
  title,
  description,
  style,
  onChange,
}) => {
  const [value, setValue] = useState(0);

  const onIncrement = () => {
    setValue(v => {
      const newValue = v + 1;

      onChange(newValue);
      return newValue;
    });
  };

  const onDecrement = () => {
    setValue(v => {
      const newValue = Math.max(v - 1, 0);

      onChange(newValue);
      return newValue;
    });
  };

  return (
    <View style={[styles.container, style]}>
      {title && description && (
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}

      <View style={styles.buttons}>
        <BorderlessButton
          hitSlop={{ top: 58, bottom: 58, left: 58, right: 58 }}
          style={styles.button}
          rippleColor={StyleGuide.palette.secondary}
          onPress={onDecrement}>
          <View style={[styles.round]}>
            <Icon name="minus" color={StyleGuide.palette.primary} size={20} />
          </View>
        </BorderlessButton>

        <Text style={styles.value}>{value}</Text>
        <BorderlessButton
          hitSlop={{ top: 58, bottom: 58, left: 58, right: 58 }}
          style={styles.button}
          rippleColor={StyleGuide.palette.secondary}
          onPress={onIncrement}>
          <View style={[styles.round]}>
            <Icon name="plus" color={StyleGuide.palette.primary} size={20} />
          </View>
        </BorderlessButton>
      </View>
    </View>
  );
};

export default IncrementDecrement;
