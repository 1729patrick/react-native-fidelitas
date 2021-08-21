import React, { useEffect, useState } from 'react';
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
  initialValue?: number;
  value?: number;
  size?: number;
};
const IncrementDecrement: React.FC<IncrementDecrementProps> = ({
  title,
  description,
  style,
  onChange,
  initialValue = 0,
  value = 0,
  size = 36,
}) => {
  const [value_, setValue_] = useState(initialValue);

  useEffect(() => {
    setValue_(value);
  }, [value]);

  const onIncrement = () => {
    setValue_(v => {
      const newValue = v + 1;

      onChange?.(newValue);
      return newValue;
    });
  };

  const onDecrement = () => {
    setValue_(v => {
      const newValue = Math.max(v - 1, 0);

      onChange?.(newValue);
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
          style={[styles.button, { width: size + 5, height: size + 5 }]}
          rippleColor={StyleGuide.palette.secondary}
          onPress={onDecrement}>
          <View style={[styles.round, { width: size, height: size }]}>
            <Icon name="minus" color={StyleGuide.palette.primary} size={20} />
          </View>
        </BorderlessButton>

        <Text style={styles.value}>{value_}</Text>
        <BorderlessButton
          hitSlop={{ top: 58, bottom: 58, left: 58, right: 58 }}
          style={[styles.button, { width: size + 5, height: size + 5 }]}
          rippleColor={StyleGuide.palette.secondary}
          onPress={onIncrement}>
          <View style={[styles.round, { width: size, height: size }]}>
            <Icon name="plus" color={StyleGuide.palette.primary} size={20} />
          </View>
        </BorderlessButton>
      </View>
    </View>
  );
};

export default IncrementDecrement;
