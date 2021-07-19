import React from 'react';
import { StatusBar, Text } from 'react-native';
import AchievementList from '~/components/organisms/lists/Archievements';
import Header from '../../components/atoms/Header';
import Achievements from '../../components/templates/Achievements';
import useStatusBar from '../../hooks/useStatusBar';
import styles from './styles';

const achievements = [
  {
    title: 'Crítico de Bacalhau',
    description:
      'Nos conte o que achou sobre o pedido feito através da aplicação.',
    promotion: 'Ganhe um Pastel de Frago',
    total: 20,
    completed: 17,
  },
  {
    title: 'Influenciador digital',
    description:
      'Indique a aplicação para 10 amigos que não possuem a aplicação instalada.',
    promotion: 'Ganhe um Café do Mês',
    total: 10,
    completed: 2,
  },
];

export default () => {
  useStatusBar(true);

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
          data={achievements}
          style={styles.contentContainer}
          onPress={e => console.log(e)}
        />
      }
    />
  );
};
