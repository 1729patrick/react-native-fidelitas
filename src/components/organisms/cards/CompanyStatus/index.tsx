import React from 'react';
import { Text, View } from 'react-native';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

const areas = ['Portuguesa', '•', 'Tradicional', '•', 'Marinha'];

const CompanyStatus = () => {
  return (
    <View>
      <View style={styles.areas}>
        {areas.map((type, index) => (
          <Text style={styles.area} key={index}>
            {type}
          </Text>
        ))}
      </View>

      <Text style={[StyleGuide.typography.caption]}>
        <Text style={[StyleGuide.typography.caption, styles.status]}>
          Aberto
        </Text>{' '}
        • Fecha hoje às 18:00
      </Text>
    </View>
  );
};

export default CompanyStatus;
