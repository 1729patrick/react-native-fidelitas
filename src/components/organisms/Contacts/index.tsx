import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import StyleGuide from '../../../util/StyleGuide';
import styles from './styles';

const contacts = [
  {
    contact: '+351 999111313',
    type: 'phone',
  },
  {
    contact: '+351 87f3281802',
    type: 'phone',
  },
  {
    contact: 'pastel@bacalhau.pt',
    type: 'mail',
  },
];
const Contacts = () => {
  return (
    <View>
      <Text style={styles.subtitle}>Contatos</Text>

      {contacts.map(({ contact, type }) => (
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{contact}</Text>
          <MaterialIcon
            name={type}
            color={StyleGuide.palette.primary}
            size={27}
          />
        </View>
      ))}
    </View>
  );
};

export default Contacts;
