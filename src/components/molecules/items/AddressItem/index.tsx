import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import IonIcon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Checkbox from '~/components/atoms/Checkbox';

export type LanguageProps = {
  title: string;
  onPress: (value: boolean) => void;
};

const AddressItem: React.FC<LanguageProps> = ({ title, onPress }) => {
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
        key={title}
        rippleColor={StyleGuide.palette.secondary}
        onPress={toggleCheck}>
        <View>
          <View style={styles.line}>
            <IonIcon
              name="ios-location-sharp"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>
              Avenida Roque Ribeiro, 2910-278
            </Text>
          </View>

          <View style={[styles.line, styles.marginTop]}>
            <IonIcon
              name="ios-person-sharp"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>Cristiano Rolando</Text>
          </View>

          <View style={[styles.line, styles.marginTop]}>
            <IonIcon
              name="call"
              size={18}
              color={StyleGuide.palette.secondary}
              style={styles.icon}
            />
            <Text style={styles.description}>+351 92140176243</Text>
          </View>
        </View>

        <Checkbox
          toggleCheck={toggleCheck}
          checked={checked}
          style={styles.checkbox}
        />
      </RectButton>
    </View>
  );
};

export default AddressItem;
