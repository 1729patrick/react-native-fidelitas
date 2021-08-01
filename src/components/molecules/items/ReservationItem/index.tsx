import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton as RNRectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { CARD_HEIGHT, STATUS } from './constants';
import { Status } from '~/screens/reservation/Reservation';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import RectButton from '~/components/atoms/buttons/RectButton';
import FieldInformation from '~/components/atoms/FieldInformation';

export type ReservationType = {
  type: string;
  size: number;
  date: string;
  status: Status;
  message?: string;
};

type ReservationProps = {
  onPress?: (args: Partial<ReservationType>) => void;
} & ReservationType;

const ReservationItem: React.FC<ReservationProps> = ({
  type,
  size,
  date,
  status,
  message,
  onPress,
}) => {
  const [footerHeight, setFooterHeight] = useState(0);

  const animation = useSharedValue(0);
  const status_ = STATUS[status];

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

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.title} numberOfLines={1}>
              {type}
            </Text>
            <Text
              style={[
                styles.description,
                styles.status,
                { color: status_.color },
              ]}>
              {status_.title}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.description} numberOfLines={1}>
              {date}
            </Text>

            <View style={[styles.row, styles.size]}>
              <Icon
                name="people-outline"
                size={17}
                color={StyleGuide.palette.light}
                style={styles.icon}
              />
              <Text style={styles.description}>{size}</Text>
            </View>
          </View>
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
        <FieldInformation
          title={'Sua mensagem'}
          description={message}
          titleStyle={styles.messageTitle}
          descriptionStyle={styles.messageDescription}
        />

        {status !== Status.Canceled && (
          <RectButton
            title="Cancelar"
            onPress={() => {}}
            borderRadius={8}
            containerStyle={styles.cancel}
            titleStyle={{ color: StyleGuide.palette.primary }}
            backgroundColor={StyleGuide.palette.primary}
            outline
          />
        )}
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

export default ReservationItem;
