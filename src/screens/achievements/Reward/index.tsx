import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import RectButton from '~/components/atoms/buttons/RectButton';
import Header from '~/components/atoms/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleGuide from '~/util/StyleGuide';
import useHideTabBar from '~/hooks/useHideTabBar';

export default () => {
  useHideTabBar();

  return (
    <View style={styles.container}>
      <Header close />

      <View pointerEvents={'none'} style={styles.confetti}>
        <LottieView
          source={require('~/assets/confetti.json')}
          autoPlay
          autoSize
          style={styles.confetti}
        />
      </View>

      <View style={styles.rewardContainer}>
        <LottieView
          source={require('~/assets/reward.json')}
          autoPlay
          autoSize
          loop={false}
          style={styles.reward}
        />
      </View>

      <Text style={styles.title}>Parabéns</Text>
      <Text style={styles.description}>
        Você ganhou 50% de desconto na próxima compra
      </Text>

      <RectButton
        title="Compartilhar"
        onPress={() => {}}
        containerStyle={styles.button}
        iconStart
        icon={
          <Icon
            name="ios-share-outline"
            size={23}
            color={StyleGuide.palette.background}
            style={styles.icon}
          />
        }
      />
    </View>
  );
};
