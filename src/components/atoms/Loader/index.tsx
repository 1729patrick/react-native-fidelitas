import React from 'react';
import LottieView from 'lottie-react-native';
import StyleGuide from '~/util/StyleGuide';
import { ActivityIndicator } from 'react-native';

const Loader = () => {
  return <ActivityIndicator color={StyleGuide.palette.app} size="large" />;
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
