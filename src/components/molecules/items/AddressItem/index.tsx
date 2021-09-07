import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import IonIcon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Checkbox from '~/components/atoms/Checkbox';
import { AddressType } from '~/api/useAddresses';

import { mask } from 'react-native-mask-text';
import { formatAddress, formatPhone } from '~/util/Formatters';

export type LanguageProps = AddressType & {
  onPress: (value: any) => void;
};

const AddressItem: React.FC<LanguageProps> = ({
  onPress,

  ...address
}) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(previousState => {
      const newState = !previousState;

      onPress?.(newState);
      return newState;
    });
  };

  return (
    <View style={styles.border}>
      <RectButton
        style={styles.container}
        key={address.id}
        rippleColor={StyleGuide.palette.secondary}
        onPress={toggleCheck}>
        <View style={styles.content}>
          <View style={styles.line}>
            <IonIcon
              name="ios-location-sharp"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>{formatAddress(address)}</Text>
          </View>

          <View style={[styles.line, styles.marginTop]}>
            <IonIcon
              name="ios-person-sharp"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>{address.responsible}</Text>
          </View>

          <View style={[styles.line, styles.marginTop]}>
            <IonIcon
              name="call"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>{formatPhone(address.phone)}</Text>
          </View>
        </View>

        <Checkbox
          toggleCheck={toggleCheck}
          checked={address.primary}
          style={styles.checkbox}
        />
      </RectButton>
    </View>
  );
};

export default AddressItem;
