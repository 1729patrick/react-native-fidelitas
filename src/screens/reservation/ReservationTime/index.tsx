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
import { Step2 } from '~/components/organisms/forms/Reservation';

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
      <Header backgroundColor={'transparent'} title="Escolha o horário" />
      <RegisterStep
        title=""
        confirmTitle={'Confirmar'}
        confirmIcon={<Icon name="check" size={23} color="#fff" />}
        form={<Step2 />}
        onNext={() => pop(2)}
        contentStyle={styles.stepContainer}
        titleStyle={styles.stepTitle}
        nextEnabled={false}
      />
    </View>
  );
};
