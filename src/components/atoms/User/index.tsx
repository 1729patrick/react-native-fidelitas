import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const User = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.userName}>Francisco Ferdinando</Text>
        <Text style={styles.link}>Ver Perfil</Text>
      </View>
    </View>
  );
};

export default User;
