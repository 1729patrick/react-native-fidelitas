import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
  return (
    <Image
      style={styles.container}
      resizeMode="contain"
      source={require('../../../assets/logo.png')}
    />
  );
};

export default Logo;
