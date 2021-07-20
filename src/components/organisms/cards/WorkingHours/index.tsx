import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const hours = [
  { day: 'Domingo', start: '11:20', end: '23:30' },
  { day: 'Segunda-Feira', start: '11:20', end: '23:30' },
  { day: 'Terça-Feira', start: '11:20', end: '23:30' },
  { day: 'Quarta-Feira', start: '11:20', end: '23:30' },
  { day: 'Quinda-Feira', start: '11:20', end: '23:30' },
  { day: 'Sexta-Feira', start: '11:20', end: '23:30' },
  { day: 'Sábado', start: '11:20', end: '23:30' },
];

const WorkingHours = () => {
  return (
    <View>
      <Text style={styles.subtitle}>Horário de Trabalho</Text>

      {hours.map(({ day, start, end }) => (
        <View style={styles.item} key={day}>
          <Text style={styles.itemTitle}>{day}</Text>
          <Text style={styles.itemTitle}>
            {start} às {end}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default WorkingHours;
