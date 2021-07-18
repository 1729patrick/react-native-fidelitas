import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Line from '../../components/atoms/Line';
import useStatusBar from '../../hooks/useStatusBar';
import styles from './styles';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';
import StyleGuide from '../../util/StyleGuide';
import { RectButton } from 'react-native-gesture-handler';

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
      <View style={styles.profile}>
        <FastImage
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.image}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>Francisco Ferdinando</Text>
          <Text style={styles.link}>Ver Perfil</Text>
        </View>
      </View>
      <Line />

      <View style={styles.items}>
        {items.map(item => (
          <View style={styles.border} key={item.title}>
            <RectButton
              key={item.title}
              style={styles.item}
              rippleColor={StyleGuide.palette.primary}>
              {item.icon}
              <Text style={styles.itemTitle}>{item.title}</Text>
            </RectButton>
          </View>
        ))}
      </View>
    </View>
  );
};
