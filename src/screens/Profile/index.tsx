import React from 'react';
import { View } from 'react-native';
import Line from '../../components/atoms/Line';
import useStatusBar from '../../hooks/useStatusBar';
import styles from './styles';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';
import StyleGuide from '../../util/StyleGuide';
import User from '~/components/atoms/User';

import Profile from '~/components/templates/Profile';
import ConfigurationList from '~/components/organisms/lists/Configuration';

const items = [
  {
    title: 'Linguagem e Região',
    icon: (
      <IonIcon
        name="location-sharp"
        color={StyleGuide.palette.primary}
        size={25}
      />
    ),
  },
  {
    title: 'Envie-nos um feedback',
    icon: (
      <MdIcon name="feedback" color={StyleGuide.palette.primary} size={25} />
    ),
  },
  {
    title: 'Termos de privacidade',
    icon: <MdIcon name="lock" color={StyleGuide.palette.primary} size={25} />,
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
  },
  {
    title: 'Sair',
    icon: <MdIcon name="logout" color={StyleGuide.palette.primary} size={25} />,
  },
];

export default () => {
  useStatusBar(true);

  return (
    <View style={styles.container}>
      <Profile
        list={
          <ConfigurationList
            data={items}
            onPress={x => console.log(x)}
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
