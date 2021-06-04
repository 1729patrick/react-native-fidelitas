import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import Header from '../../components/atoms/Header';
import Achievements from '../../components/templates/Achievements';
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
  const { addListener, removeListener } = useNavigation();

  useEffect(() => {
    const listener = addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
    });

    return () => removeListener('focus', listener);
  });

  const achievements_ = [
    ...achievements,
    ...achievements,
    ...achievements,
    ...achievements,
  ];

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <Header
        showBack={false}
        title="Conquistas"
        elevation={1}
        RightContent={
          <Text style={styles.progressGlobal}>0/{achievements_.length}</Text>
        }
      />
      <Achievements achievements={achievements_} />
    </>
  );
};
