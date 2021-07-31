import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton as RNRectButton } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import RectButton from '~/components/atoms/buttons/RectButton';
import CircularProgress from '~/components/atoms/CircularProgress';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

export type AchievementType = {
  title: string;
  description: string;
  promotion: string;
  total: number;
  completed: number;
};

type AchievementProps = {
  onPress?: (args: Partial<AchievementType>) => void;
} & AchievementType;

const AchievementItem: React.FC<AchievementProps> = ({
  title,
  description,
  promotion,
  total,
  completed,
  onPress,
}) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const animation = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      animation.value,
      [0, 1],
      [143, 143 + footerHeight],
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
        <View style={styles.progress}>
          <CircularProgress progress={(completed / total) * 100} />
          <Text style={styles.needMore}>
            Precisa {'\n'}de mais {total - completed}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.promotion}>{promotion}</Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <>
        <View
          style={styles.footer}
          onLayout={({ nativeEvent }) =>
            setFooterHeight(nativeEvent.layout.height)
          }>
          <RectButton
            title="Pegar o prêmio"
            onPress={() => {}}
            borderRadius={8}
            containerStyle={styles.getAchievement}
            titleStyle={{ color: StyleGuide.palette.green }}
            backgroundColor={StyleGuide.palette.green}
            outline
          />
        </View>
      </>
    );
  };

  return (
    <Animated.View style={[styles.border, containerStyle]}>
      <RNRectButton
        style={styles.item}
        rippleColor={StyleGuide.palette.secondary}
        onPress={onCollapse}>
        {renderHeader()}
        {renderFooter()}
      </RNRectButton>
    </Animated.View>
  );
};

export default AchievementItem;
