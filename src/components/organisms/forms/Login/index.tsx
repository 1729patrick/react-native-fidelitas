import React, { useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import RectButton from '../../../atoms/buttons/RectButton';
import Input from '../../../atoms/Input';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export type FormType = {
  email: string;
  password: string;
};

type LoginProps = {
  onLogin: (credentials: FormType) => void;
  loading: boolean;
};

const LoginForm: React.FC<LoginProps> = ({ onLogin, loading }) => {
  const passwordRef = useRef<TextInput>(null);

  const [values, setValues] = useState<FormType>({
    email: '',
    password: '',
  });

  const onChange = (key: string, value: string) => {
    setValues(values => ({ ...values, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="E-mail"
        onChangeText={value => onChange('email', value)}
        autoCapitalize={'none'}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <Input
        placeholder="Palava-passe"
        onChangeText={value => onChange('password', value)}
        autoCapitalize={'none'}
        secureTextEntry
        returnKeyType="send"
        onSubmitEditing={() => onLogin(values)}
        ref={passwordRef}
      />
      <RectButton
        enabled={!!values.password && !!values.email}
        loading={loading}
        onPress={() => onLogin(values)}
        title="Acessar"
        containerStyle={styles.button}
        icon={<Icon name="arrowright" size={23} color="#fff" />}
      />
    </View>
  );
};

export default LoginForm;
