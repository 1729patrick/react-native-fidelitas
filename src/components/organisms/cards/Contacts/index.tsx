import React from 'react';
import { View, Text, Linking } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import RoundButton from '~/components/atoms/buttons/RoundButton';
import { useRestaurant } from '~/contexts/Restaurant';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

const Contacts = () => {
  const { restaurant } = useRestaurant();

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

      {restaurant?.contacts.map(({ contact, type }) => (
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
