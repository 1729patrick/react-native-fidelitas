import React from 'react';
import LottieView from 'lottie-react-native';
import { ScrollView, Share, Text, View } from 'react-native';
import RectButton from '~/components/atoms/buttons/RectButton';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import Clipboard from '@react-native-clipboard/clipboard';
import { Alert } from '~/util/Alert';
import { translate } from '~/i18n';
import useHideTabBar from '~/hooks/useHideTabBar';
import Header from '~/components/atoms/Header';

const code = 'patrick113';
const shareMessage = `Hey! Sign un for Fidelitas with my referral code and get 15€ free on your first purchase. Use ${code}`;

export default () => {
  useHideTabBar();

  const onCopy = () => {
    Clipboard.setString(shareMessage);
    Alert.success(translate('codeCopied'));
  };

  const onShare = async () => {
    try {
      const result = await Share.share(
        {
          message: shareMessage,
        },
        {
          dialogTitle: 'Invite your friends',
        },
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header close />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        overScrollMode="never">
        <LottieView
          source={require('~/assets/share.json')}
          autoPlay
          loop={false}
          autoSize
          style={{ width: '80%' }}
        />

        <Text style={styles.title}>Wanna get 15€?</Text>

        <Text style={styles.description}>
          Invite 3 new users and after they make purchases in our app, you will
          get a 15€ coupon for each friend!
        </Text>

        <View style={styles.steps}>
          <View style={styles.step}>
            <Text style={styles.bubble}>1</Text>
            <Text style={styles.stepTitle}>Share your referral code</Text>
          </View>

          <View style={styles.step}>
            <Text style={styles.bubble}>2</Text>
            <Text style={styles.stepTitle}>
              Friends get 15€ on they first purchase
            </Text>
          </View>

          <View style={styles.step}>
            <Text style={styles.bubble}>3</Text>
            <Text style={styles.stepTitle}>
              You get a 15€ coupon for each friend
            </Text>
          </View>
        </View>

        <View style={styles.referralCode}>
          <Text style={styles.referralTitle}>Your referral code</Text>
          <View style={styles.code}>
            <Text style={styles.referral}>{code}</Text>
            <RoundButton
              onPress={onCopy}
              name={'copy-outline'}
              size={23}
              Icon={Icon}
              style={styles.copy}
              color={StyleGuide.palette.app}
            />
          </View>
        </View>

        <RectButton
          title="Compartilhar"
          onPress={onShare}
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
      </ScrollView>
    </>
  );
};
