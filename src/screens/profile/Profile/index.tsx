import React from 'react';
import { Linking, View } from 'react-native';
import styles from './styles';

import IonIcon from 'react-native-vector-icons/Ionicons';

import Profile from '~/components/templates/Profile';
import ConfigurationList from '~/components/organisms/lists/Configuration';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import User from '~/components/molecules/User';
import StyleGuide from '~/util/StyleGuide';
import useStatusBar from '~/hooks/useStatusBar';
import Line from '~/components/atoms/Line';
import { useAuth } from '~/contexts/Auth';

export default () => {
  useStatusBar(true);
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  const { logout } = useAuth();

  const items = [
    {
      title: 'Idioma',
      icon: (
        <IonIcon
          name="ios-language-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => navigate('Languages'),
    },
    {
      title: 'Whatsapp',
      icon: (
        <IonIcon
          name="logo-whatsapp"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () =>
        Linking.openURL('https://api.whatsapp.com/send?phone=5549991118313'),
    },
    {
      title: 'Notificações',
      icon: (
        <IonIcon
          name="ios-notifications-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => navigate('Notifications'),
    },
    {
      title: 'Moradas',
      icon: (
        <IonIcon
          name="location-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => navigate('Addresses'),
    },
    {
      title: 'Cartões',
      icon: (
        <IonIcon
          name="card-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => navigate('Payments'),
    },
    {
      title: 'Histórico de Pedidos',
      icon: (
        <IonIcon
          name="time-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => navigate('PurchaseHistory'),
    },
    {
      title: 'Termos de Privacidade',
      icon: (
        <IonIcon
          name="ios-lock-closed-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => navigate('TermsAndPrivacy'),
    },
    //  {
    //   title: 'Apagar Conta',
    //   icon: (
    //     <MdIcon name="delete" color={StyleGuide.palette.primary} size={25} />
    //   ),
    //   onPress: () => console.log('delete'),
    // },
    {
      title: 'Sair',
      icon: (
        <IonIcon
          name="ios-exit-outline"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: logout,
    },
  ];

  const openPersonalInformation = () => {
    navigate('PersonalInformation');
  };

  return (
    <View style={styles.container}>
      <Profile
        list={
          <ConfigurationList
            data={items}
            style={styles.contentContainer}
            header={
              <>
                <User onPress={openPersonalInformation} />
                <Line />
              </>
            }
          />
        }
      />
    </View>
  );
};
