import React from 'react';
import { View, Text, Linking } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import StyleGuide from '../../../util/StyleGuide';
import RoundButton from '../../atoms/buttons/RoundButton';
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
  const types = {
    mail: 'mailto:',
    phone: 'tel:',
  };

  const openContact = ({
    type,
    contact,
  }: {
    type: 'phone' | 'mail';
    contact: string;
  }) => {
    Linking.openURL(`${types[type]}${contact}`);
  };

  return (
    <View>
      <Text style={styles.subtitle}>Contatos</Text>

      {contacts.map(({ contact, type }) => (
        <View style={styles.item} key={contact}>
          <Text style={styles.itemTitle}>{contact}</Text>

          <RoundButton
            Icon={MaterialIcon}
            name={type}
            size={27}
            color={StyleGuide.palette.primary}
            onPress={() => openContact({ type, contact })}
          />
        </View>
      ))}
    </View>
  );
};

export default Contacts;
