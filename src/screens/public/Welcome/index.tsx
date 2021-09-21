import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { StackNavigationProp } from '@react-navigation/stack';
import useStatusBar from '~/hooks/useStatusBar';
import RectButton from '~/components/atoms/buttons/RectButton';
import Welcome from '~/components/templates/Welcome';
import {
  Screen1,
  Screen2,
  Screen3,
  Screen4,
} from '~/components/molecules/slides/Welcome';
import { useAuth } from '~/contexts/Auth';
import { Alert } from '~/util/Alert';

type RootStackParamList = {
  Register?: {
    referralCode: string;
  };
};

type RouteProps = RouteProp<RootStackParamList, 'Register'>;

export default () => {
  const { params } = useRoute<RouteProps>();
  const { setReferralCode } = useAuth();

  useStatusBar(false);
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  const onLogin = () => {
    navigate('Login');
  };

  const onRegister = () => {
    navigate('Register');
  };

  useEffect(() => {
    if (params?.referralCode) {
      const { referralCode } = params;

      setReferralCode(referralCode);
      Alert.success(
        `Você está usado o código de referência ${referralCode}`,
        undefined,
        'light',
      );
    }
  }, []);

  const buttons = (
    <View style={styles.buttons}>
      <RectButton
        title="Iniciar sessão"
        onPress={onLogin}
        borderRadius={8}
        icon={<Icon name="arrowright" size={23} color="#fff" />}
      />
      <RectButton
        title="Registe-se"
        onPress={onRegister}
        backgroundColor={'#fff'}
        borderRadius={8}
        icon={<Icon name="arrowright" size={23} color={'#fff'} />}
        containerStyle={styles.button}
        outline
      />
    </View>
  );

  return (
    <>
      <StatusBar
        translucent={true}
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
