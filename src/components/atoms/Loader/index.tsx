import React from 'react';
import LottieView from 'lottie-react-native';
import StyleGuide from '~/util/StyleGuide';

const Loader = () => {
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
