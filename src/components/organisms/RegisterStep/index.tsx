import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import RectButton from '../../atoms/buttons/RectButton';
import styles from './styles';

type RegisterProps = {
  form: ReactNode;
  title: string;
  description: string;
  confirmTitle: string;
  onNext: () => void;
  confirmIcon?: ReactNode;
};

const Register: React.FC<RegisterProps> = ({
  form,
  title,
  description,
  confirmTitle,
  confirmIcon,
  onNext,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.content}>
        {form}

        <RectButton
          onPress={onNext}
          title={confirmTitle}
          containerStyle={styles.button}
          icon={confirmIcon}
        />
      </View>
    </View>
  );
};

export default Register;
