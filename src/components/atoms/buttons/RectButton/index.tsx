/* eslint-disable */

import React, { ReactNode } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { RectButton as RNRectButton } from 'react-native-gesture-handler';
import StyleGuide from '../../../../util/StyleGuide';
import Loader from '../../Loader';
import styles from './styles';

type ButtonProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  borderRadius?: number;
  onPress: () => void;
  backgroundColor?: string;
  icon?: ReactNode;
  outline?: boolean;
  loading?: boolean;
  enabled?: boolean;
  iconStart?: boolean;
};

const RectButton: React.FC<ButtonProps> = ({
  title,
  containerStyle,
  titleStyle,
  onPress,
  borderRadius = 4,
  backgroundColor = StyleGuide.palette.app,
  icon,
  outline = false,
  loading = false,
  enabled = true,
  iconStart = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        { borderRadius },
        outline ? { borderColor: backgroundColor, borderWidth: 1.5 } : {},
        enabled ? {} : { opacity: 0.6 },
      ]}>
      <RNRectButton
        enabled={enabled && !loading}
        rippleColor={outline ? backgroundColor : undefined}
        style={[
          styles.button,
          {
            backgroundColor: outline ? 'transparent' : backgroundColor,
          },
          icon && !iconStart ? { justifyContent: 'space-between' } : {},
        ]}
        onPress={onPress}>
        {loading ? (
          <Loader
            color={StyleGuide.palette.background}
            size={'large'}
            style={styles.loader}
          />
        ) : (
          <>
            {iconStart && icon}
            <Text
              style={[
                styles.title,
                titleStyle,
                icon ? { paddingRight: 12 } : {},
              ]}>
              {title}
            </Text>
            {!iconStart && icon}
          </>
        )}
      </RNRectButton>
    </View>
  );
};

export default RectButton;
