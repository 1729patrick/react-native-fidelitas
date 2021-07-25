import React from 'react';
import { Linking, View } from 'react-native';
import styles from './styles';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';

import Profile from '~/components/templates/Profile';
import ConfigurationList from '~/components/organisms/lists/Configuration';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import User from '~/components/molecules/User';
import StyleGuide from '~/util/StyleGuide';
import useStatusBar from '~/hooks/useStatusBar';
import Line from '~/components/atoms/Line';

export default () => {
  useStatusBar(true);
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  const items = [
    {
      title: 'Idioma',
      icon: (
        <IonIcon
          name="location-sharp"
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
        <MdIcon
          name="notifications-active"
          color={StyleGuide.palette.primary}
          size={25}
        />
      ),
      onPress: () => navigate('Notifications'),
    },
    {
      title: 'Apagar conta',
      icon: (
        <MdIcon name="delete" color={StyleGuide.palette.primary} size={25} />
      ),
      onPress: () => console.log('delete'),
    },
    {
      title: 'Termos de Privacidade',
      icon: <MdIcon name="lock" color={StyleGuide.palette.primary} size={25} />,
      onPress: () => navigate('TermsAndPrivacy'),
    },
    {
      title: 'Sair',
      icon: (
        <MdIcon name="logout" color={StyleGuide.palette.primary} size={25} />
      ),
      onPress: () => navigate('Welcome'),
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
