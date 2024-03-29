import React, { ReactNode } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

type LoginProps = {
  logo: ReactNode;
  form: ReactNode;
  header: ReactNode;
};

const Login: React.FC<LoginProps> = ({ logo, form, header }) => {
  return (
    <>
      {header}
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        overScrollMode="never"
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.logo}>{logo}</View>
        {form}
      </ScrollView>
    </>
  );
};

export default Login;
