import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { StatusBar, Text } from 'react-native';
import FloatingButton, {
  FloatingButtonHandler,
} from '~/components/atoms/buttons/FloatingButton';
import Header from '~/components/atoms/Header';
import AchievementList from '~/components/organisms/lists/Archievements';
import Achievements from '~/components/templates/Achievements';
import useStatusBar from '~/hooks/useStatusBar';

import styles from './styles';

const achievements = [
  {
    id: 'Crítico de Bacalhau',
    title: 'Crítico de Bacalhau',
    description:
      'Nos conte o que achou sobre o pedido feito através da aplicação.',
    promotion: 'Ganhe um Pastel de Frago',
    total: 20,
    completed: 17,
  },
  {
    id: 'Influenciador digital',
    title: 'Influenciador digital',
    description:
      'Indique a aplicação para 10 amigos que não possuem a aplicação instalada.',
    promotion: 'Ganhe um Café do Mês',
    total: 10,
    completed: 2,
  },
];

export default () => {
  const floatingButtonRef = useRef<FloatingButtonHandler>(null);
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  useStatusBar(true);

  const openQRCode = () => {
    navigate('QRCode');
  };

  return (
    <Achievements
      statusBar={
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
      }
      header={
        <Header
          showBack={false}
          title="Conquistas"
          elevation={1}
          RightContent={
            <Text style={styles.progressGlobal}>0/{achievements.length}</Text>
          }
        />
      }
      list={
        <AchievementList
          data={[...achievements, ...achievements, ...achievements]}
          style={styles.contentContainer}
          onPress={e => console.log(e)}
          onScrollUp={() => floatingButtonRef.current?.show()}
          onScrollDown={() => floatingButtonRef.current?.hide()}
        />
      }
      action={<FloatingButton ref={floatingButtonRef} onPress={openQRCode} />}
    />
  );
};
