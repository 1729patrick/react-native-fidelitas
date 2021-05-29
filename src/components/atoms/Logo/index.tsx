import React from 'react';
import { ImageStyle, StyleProp } from 'react-native';
import FastImage from 'react-native-fast-image';

type LogoProps = {
  size?: number;
  style?: StyleProp<ImageStyle>;
};

const Logo: React.FC<LogoProps> = ({ size = 1, style }) => {
  return (
    <FastImage
      style={[{ height: 45 * size }, style]}
      resizeMode={FastImage.resizeMode.contain}
      source={require('../../../assets/logo.png')}
    />
  );
};

export default Logo;
