import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

type LogoProps = {
  size?: number;
  style?: StyleProp<ImageStyle>;
};

const Logo: React.FC<LogoProps> = ({ size = 1, style = {} }) => {
  return (
    <Image
      style={[{ height: 45 * size }, style]}
      resizeMode="contain"
      source={require('../../../assets/logo.png')}
    />
  );
};

export default Logo;
