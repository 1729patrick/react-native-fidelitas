import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StackNavigationProp } from '@react-navigation/stack';
import useStatusBar from '~/hooks/useStatusBar';
import Register, { RegisterHandler } from '~/components/templates/Register';
import Header from '~/components/atoms/Header';
import { Step2, Step3 } from '~/components/organisms/forms/Reservation';
import RegisterStep from '~/components/organisms/RegisterStep';
import useHideTabBar from '~/hooks/useHideTabBar';
import Calendar from '~/components/atoms/Calendar';
import styles from './styles';
import { useBackHandler } from '~/hooks/useBackHandler';

export default () => {
  useStatusBar(true);
  useHideTabBar();

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentIndexRef = useRef(0);
  const registerRef = useRef<RegisterHandler>(null);
  const { pop } = useNavigation<StackNavigationProp<any>>();

  const onComplete = () => {
    pop();
  };

  const onScrollTo = (index: number) => {
    setCurrentIndex(index);
    registerRef.current?.scrollToIndex(index);
  };

  const onBack = () => {
    if (currentIndex - 1 < 0) {
      pop();
      return;
    }

    onScrollTo(currentIndex - 1);
  };

  useBackHandler(() => {
    if (currentIndex - 1 >= 0) {
      onScrollTo(currentIndex - 1);
      return true;
    }

    return false;
  });

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header
        backgroundColor={'transparent'}
        onBack={onBack}
        close={!currentIndex}
      />
      <Register
        ref={registerRef}
        steps={[
          <RegisterStep
            title="Escolha a data"
            confirmTitle={'Prosseguir'}
            confirmIcon={<Icon name="arrowright" size={23} color="#fff" />}
            form={<Calendar />}
            onNext={() => onScrollTo(1)}
            buttonStyle={styles.nextButton}
            titleStyle={styles.stepTitle}
          />,
          <RegisterStep
            title="Escolha o horário"
            confirmTitle={'Prosseguir'}
            confirmIcon={<Icon name="arrowright" size={23} color="#fff" />}
            form={<Step2 />}
            onNext={() => onScrollTo(2)}
            contentStyle={styles.stepContainer}
            titleStyle={styles.stepTitle}
          />,
          <RegisterStep
            title="Número de pessoas"
            confirmTitle={'Finalizar'}
            confirmIcon={<Icon name="check" size={23} color="#fff" />}
            form={<Step3 />}
            onNext={onComplete}
            contentStyle={styles.stepContainer}
            titleStyle={styles.stepTitle}
          />,
        ]}
      />
    </View>
  );
};
