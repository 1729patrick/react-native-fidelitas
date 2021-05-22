import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import Button from '../../atoms/Button';
import styles from './styles';

type RegisterProps = {
  form: ReactNode;
  title: string;
  description: string;
  confirmTitle: string;
  onNext: () => void;
};

const Register: React.FC<RegisterProps> = ({
  form,
  title,
  description,
  confirmTitle,
  onNext,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.content}>
        {form}

        <Button
          onPress={onNext}
          title={confirmTitle}
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default Register;
