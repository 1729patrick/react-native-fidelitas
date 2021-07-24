import React from 'react';
import { Linking, View } from 'react-native';
import Line from '../../components/atoms/Line';
import useStatusBar from '../../hooks/useStatusBar';
import styles from './styles';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';
import StyleGuide from '../../util/StyleGuide';
import User from '~/components/atoms/User';

import Profile from '~/components/templates/Profile';
import ConfigurationList from '~/components/organisms/lists/Configuration';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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
    // {
    //   title: 'Envie-nos um feedback',
    //   icon: (
    //     <MdIcon name="feedback" color={StyleGuide.palette.primary} size={25} />
    //   ),
    // },
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

  return (
    <View style={styles.container}>
      <Profile
        list={
          <ConfigurationList
            data={items}
            style={styles.contentContainer}
            header={
              <>
                <User />
                <Line />
              </>
            }
          />
        }
      />
    </View>
  );
};
