import React from 'react';
import { Image } from 'react-native';

type LogoProps = {
  size?: number;
};

const Logo: React.FC<LogoProps> = ({ size = 1 }) => {
  return (
    <Image
      style={{ width: '100%', height: 45 * size }}
      resizeMode="contain"
      source={require('../../../assets/logo.png')}
    />
  );
};

export default Logo;
