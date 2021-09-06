import React, { forwardRef, Ref, useRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import Input from '~/components/atoms/Input';
import { translate } from '~/i18n';
import StyleGuide from '~/util/StyleGuide';

type PasswordProps = TextInputProps & {
  onChangeText: (value: string) => void;
  label?: 'newPassword' | 'currentPassword' | 'password';
  required?: boolean;
};

const Password: React.ForwardRefRenderFunction<TextInput, PasswordProps> = (
  { onChangeText, label = 'password', required = true, ...props },
  ref,
) => {
  const valueRef = useRef('');
  const focusedRef = useRef(false);

  const passwordRef = useRef<TextInput>(null);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(secureTextEntry => !secureTextEntry);
    passwordRef.current?.setNativeProps({
      text: valueRef.current,
      style: { fontFamily: 'Montserrat-Medium' },
    });

    console.log(focusedRef.current);
    if (focusedRef.current) {
      setTimeout(() => passwordRef.current?.focus(), 1);
    }
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

  const setFocused = (value: boolean) => {
    console.log('aaa');
    focusedRef.current = value;
  };

  return (
    <Input
      placeholder={translate(label)}
      onChangeText={onChange}
      autoCapitalize={'none'}
      returnKeyType="send"
      secureTextEntry={secureTextEntry}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      ref={setRefs}
      required={required}
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
