import React, { useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import RectButton from '../../../atoms/buttons/RectButton';
import Input from '../../../atoms/Input';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Password from '~/components/molecules/Password';

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

  const enabled = !!values.password && !!values.email;

  return (
    <View style={styles.container}>
      <Input
        placeholder="E-mail"
        onChangeText={value => onChange('email', value)}
        autoCapitalize={'none'}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <Password
        onChangeText={value => onChange('password', value)}
        returnKeyType="send"
        onSubmitEditing={() => enabled && onLogin(values)}
        ref={passwordRef}
      />
      <RectButton
        enabled={enabled}
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
