import React from 'react';
import { StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import useStatusBar from '~/hooks/useStatusBar';
import Header from '~/components/atoms/Header';
import RegisterStep from '~/components/organisms/RegisterStep';
import useHideTabBar from '~/hooks/useHideTabBar';
import Calendar from '~/components/atoms/Calendar';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';

export default () => {
  const { pop } = useNavigation<StackNavigationProp<any>>();
  useStatusBar(true);
  useHideTabBar();

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header backgroundColor={'transparent'} title="Escolha a data" />
      <RegisterStep
        title=""
        confirmTitle={'Confirmar'}
        confirmIcon={<Icon name="check" size={23} color="#fff" />}
        form={<Calendar />}
        onNext={() => pop()}
        buttonStyle={styles.nextButton}
        titleStyle={styles.stepTitle}
        nextEnabled={true}
      />
    </View>
  );
};
