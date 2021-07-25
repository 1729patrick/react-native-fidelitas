import React from 'react';
import { Image, Text, View } from 'react-native';
import LinkButton from '~/components/atoms/buttons/LinkButton';
import styles from './styles';

type UserProps = {
  onPress: () => void;
};

const User: React.FC<UserProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.userName}>Francisco Ferdinando</Text>

        <LinkButton
          title="Ver Perfil"
          onPress={onPress}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default User;
