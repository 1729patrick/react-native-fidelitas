import React from 'react';
import { Image, Text, View } from 'react-native';
import LinkButton from '~/components/atoms/buttons/LinkButton';
import { useAuth } from '~/contexts/Auth';
import styles from './styles';

type UserProps = {
  onPress: () => void;
};

const User: React.FC<UserProps> = ({ onPress }) => {
  const { user } = useAuth();

  const name = [user?.firstName, user?.lastName].filter(v => v).join(' ');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.userName}>{name}</Text>

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
