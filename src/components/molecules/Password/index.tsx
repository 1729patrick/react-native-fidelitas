import React, { forwardRef, Ref, useRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import Input from '~/components/atoms/Input';
import StyleGuide from '~/util/StyleGuide';

type PasswordProps = TextInputProps & {
  onChangeText: (value: string) => void;
};

const Password: React.ForwardRefRenderFunction<TextInput, PasswordProps> = (
  { onChangeText, ...props },
  ref,
) => {
  const valueRef = useRef('');
  const passwordRef = useRef<TextInput>(null);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(secureTextEntry => !secureTextEntry);
    passwordRef.current?.setNativeProps({
      text: valueRef.current,
      style: { fontFamily: 'Montserrat-Medium' },
    });
  };

  const onChange = (value: string) => {
    onChangeText(value);
    valueRef.current = value;
  };

  const setRefs = (ref_?: Ref<TextInput>) => {
    //@ts-ignore
    passwordRef.current = ref_;

    if (ref) {
      //@ts-ignore
      ref.current = ref_;
    }
  };

  return (
    <Input
      placeholder="Palavra-passe"
      onChangeText={onChange}
      autoCapitalize={'none'}
      returnKeyType="send"
      secureTextEntry={secureTextEntry}
      ref={setRefs}
      {...props}
      rightContent={
        <RoundButton
          Icon={Icon}
          name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
          size={25}
          color={StyleGuide.palette.secondary}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
};

export default forwardRef(Password);
