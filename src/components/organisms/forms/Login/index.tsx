import React from 'react';
import { View } from 'react-native';
import RectButton from '../../../atoms/buttons/RectButton';
import Input from '../../../atoms/Input';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

type LoginProps = {
  onLogin: () => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <View style={styles.container}>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" />
      <RectButton
        onPress={onLogin}
        title="Acessar"
        containerStyle={styles.button}
        icon={<Icon name="arrowright" size={23} color="#fff" />}
      />
    </View>
  );
};

export default Login;
