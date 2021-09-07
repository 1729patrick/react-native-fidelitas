import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton as RNRectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';

import styles from './styles';
import { AddressType } from '~/api/useAddresses';

import { formatAddress, formatPhone } from '~/util/Formatters';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import RectButton from '~/components/atoms/buttons/RectButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

export type LanguageProps = AddressType & {
  onPress: (value: any) => void;
};

export const CARD_HEIGHT = 87;

const AddressItem: React.FC<LanguageProps> = ({ onPress, ...address }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  const animation = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      animation.value,
      [0, 1],
      [CARD_HEIGHT, CARD_HEIGHT + footerHeight],
    );
    return {
      height,
    };
  }, [animation, footerHeight]);

  const onCollapse = () => {
    animation.value = withSpring(+!animation.value);
  };

  const openEditAddress = () => {
    navigate('CreateAddress');
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
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
            nwn1 nw 1n
          </Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={styles.footer}
        onLayout={({ nativeEvent }) =>
          setFooterHeight(nativeEvent.layout.height)
        }>
        <RectButton
          title="Editar"
          onPress={openEditAddress}
          borderRadius={8}
          containerStyle={styles.button}
          titleStyle={{ color: StyleGuide.palette.primary }}
          backgroundColor={StyleGuide.palette.primary}
          outline
          icon={
            <Icon name="pencil" color={StyleGuide.palette.primary} size={23} />
          }
        />
        <RectButton
          title="Excluir"
          onPress={() => {}}
          borderRadius={8}
          containerStyle={styles.button}
          titleStyle={{ color: StyleGuide.palette.red }}
          backgroundColor={StyleGuide.palette.red}
          outline
          icon={
            <Icon
              name="ios-trash-outline"
              color={StyleGuide.palette.red}
              size={23}
            />
          }
        />
      </View>
    );
  };

  return (
    <Animated.View style={[styles.border, containerStyle]}>
      <RNRectButton
        style={styles.item}
        rippleColor={StyleGuide.palette.secondary}
        onPress={onCollapse}>
        {/* <View style={[styles.statusBar, { backgroundColor: status_.color }]} /> */}

        {renderHeader()}
        {renderFooter()}
      </RNRectButton>
    </Animated.View>
  );
};

export default AddressItem;
