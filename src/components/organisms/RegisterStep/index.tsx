import React, { ReactNode } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import RectButton from '../../atoms/buttons/RectButton';
import styles from './styles';

type RegisterProps = {
  form: ReactNode;
  title: string;
  description?: string;
  confirmTitle: string;
  onNext: () => void;
  confirmIcon?: ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
};

const RegisterStep: React.FC<RegisterProps> = ({
  form,
  title,
  description,
  confirmTitle,
  confirmIcon,
  onNext,
  contentStyle,
  buttonStyle,
  titleStyle,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={[styles.content, contentStyle]}>
        {form}

        <RectButton
          onPress={onNext}
          title={confirmTitle}
          containerStyle={{ ...styles.button, ...buttonStyle }}
          icon={confirmIcon}
        />
      </View>
    </View>
  );
};

export default RegisterStep;
