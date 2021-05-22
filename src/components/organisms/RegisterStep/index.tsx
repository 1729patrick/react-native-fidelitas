import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import Button from '../../atoms/Button';
import styles from './styles';

type RegisterProps = {
  form: ReactNode;
  title: string;
  description: string;
};

const Register: React.FC<RegisterProps> = ({ form, title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.content}>
        {form}

        <Button
          onPress={() => {}}
          title="Seguinte"
          containerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default Register;
