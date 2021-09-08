import React from 'react';
import { View, Text } from 'react-native';
import { RectButton as RNRectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';
import { AddressType } from '~/api/useAddresses';

import { formatAddress, formatPhone } from '~/util/Formatters';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

export type LanguageProps = AddressType & {
  onPress: (value: any) => void;
};

const AddressItem: React.FC<LanguageProps> = ({ onPress, ...address }) => {
  return (
    <Animated.View style={[styles.border]}>
      <RNRectButton
        style={styles.item}
        rippleColor={StyleGuide.palette.secondary}
        onPress={onPress}>
        <Icon
          name="ios-location-outline"
          size={25}
          color={
            address.primary
              ? StyleGuide.palette.app
              : StyleGuide.palette.secondary
          }
          style={styles.icon}
        />
        <View style={styles.content}>
          <View style={styles.line}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {address.responsible}
              </Text>
            </View>
            <Text style={[styles.description]} numberOfLines={1}>
              {formatPhone(address.phone)}
            </Text>
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {formatAddress(address)}
          </Text>
        </View>
      </RNRectButton>
    </Animated.View>
  );
};

export default AddressItem;
