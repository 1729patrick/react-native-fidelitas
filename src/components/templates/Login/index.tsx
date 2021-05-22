import React, { ReactNode } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

type LoginProps = {
  logo: ReactNode;
  form: ReactNode;
};

const Login: React.FC<LoginProps> = ({ logo, form }) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.logo}>{logo}</View>
      {form}
    </ScrollView>
  );
};

export default Login;
