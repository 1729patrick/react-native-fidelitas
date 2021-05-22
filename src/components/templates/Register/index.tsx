import React, { ReactNode } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

type RegisterProps = {
  logo: ReactNode;
  form: ReactNode;
};

const Register: React.FC<RegisterProps> = ({ logo, form }) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.logo}>{logo}</View>
      {form}
    </ScrollView>
  );
};

export default Register;
