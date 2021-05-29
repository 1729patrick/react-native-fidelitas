import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StatusBar, View } from 'react-native';
import RectButton from '../../components/atoms/buttons/Rect';
import {
  Screen1,
  Screen2,
  Screen3,
  Screen4,
} from '../../components/molecules/slides/Welcome';
import Welcome from '../../components/templates/Welcome';
import StyleGuide from '../../util/StyleGuide';
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
      <RectButton
        title="Iniciar sessão"
        containerStyle={styles.button}
        onPress={onLogin}
        borderRadius={8}
      />
      <RectButton
        title="Registe-se"
        containerStyle={[styles.button]}
        backgroundColor={StyleGuide.palette.secondary}
        onPress={onRegister}
        borderRadius={8}
      />
    </View>
  );

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="light-content"
      />
      <Welcome
        items={[
          {
            component: <Screen1 />,
            description:
              'O verdadeiro sabor da comida portuguesa na sua refeição',
          },
          {
            component: <Screen2 />,
            description:
              'Temos um pastel de bacalhau tão bom, que da dó de vender',
          },
          {
            component: <Screen3 />,
            description:
              'A vida é boa demais para não comer um pastel de bacalhau de vez em quando',
          },
          {
            component: <Screen4 />,
            description: 'Experimente o melhor pastel de bacalhau',
          },
        ]}
        buttons={buttons}
      />
    </>
  );
};
