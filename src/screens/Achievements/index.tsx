import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CircularProgress from '../../components/atoms/CircularProgress';
import Header from '../../components/atoms/Header';
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
  return (
    <>
      <Header
        title="Conquistas"
        RightContent={
          <Text style={styles.progressGlobal}>0/{achievements.length}</Text>
        }
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {[
          ...achievements,
          ...achievements,
          ...achievements,
          ...achievements,
        ].map(({ title, description, promotion, total, completed }, index) => (
          <View style={styles.item} key={index}>
            <View style={styles.progress}>
              <CircularProgress progress={(completed / total) * 100} />
              <Text style={styles.needMore}>
                Precisa {'\n'}de mais {total - completed}
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
              <Text style={styles.promotion}>{promotion}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};
