import React from 'react';
import LottieView from 'lottie-react-native';
import StyleGuide from '~/util/StyleGuide';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

type LoaderProps = {
  size?: 'large' | 'small';
  color?: string;
  style: StyleProp<ViewStyle>;
};

const Loader = ({
  size = 'large',
  color = StyleGuide.palette.app,
  style,
}: LoaderProps) => {
  return <ActivityIndicator color={color} size={size} style={style} />;
  return (
    <LottieView
      source={require('~/assets/loading.json')}
      autoPlay
      loop
      colorFilters={[
        { keypath: 'circle 2', color: StyleGuide.palette.app },
        { keypath: 'circle', color: StyleGuide.palette.app },
      ]}
    />
  );
};

export default Loader;
