import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import Button from '../../components/atoms/Button';
import {
  Screen1,
  Screen2,
  Screen3,
} from '../../components/molecules/slides/Welcome';
import Welcome from '../../components/templates/Welcome';
import styles from './styles';

export default () => {
  const { navigate } = useNavigation();

  const onLogin = () => {
    navigate('Login');
  };

  const onRegister = () => {
    navigate('Register');
  };

  const buttons = (
    <View style={styles.buttons}>
      <Button
        title="Iniciar sessão"
        containerStyle={styles.button}
        onPress={onLogin}
      />
      <Button
        title="Registe-se"
        containerStyle={styles.button}
        onPress={onRegister}
      />
    </View>
  );

  return (
    <Welcome
      items={[<Screen1 />, <Screen2 />, <Screen3 />]}
      buttons={buttons}
    />
  );
};
