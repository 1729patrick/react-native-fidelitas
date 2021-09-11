import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton as RNRectButton } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { AchievementType } from '~/api/useAchievements';
import RectButton from '~/components/atoms/buttons/RectButton';
import CircularProgress from '~/components/atoms/CircularProgress';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

type AchievementProps = AchievementType & {
  onPress: (args: AchievementType) => void;
};

const AchievementItem: React.FC<AchievementProps> = ({
  onPress,
  ...achievement
}) => {
  return (
    <Animated.View style={[styles.border]}>
      <RNRectButton
        style={styles.item}
        rippleColor={StyleGuide.palette.secondary}
        onPress={() => onPress(achievement)}>
        <View style={styles.progress}>
          <CircularProgress progress={(0 / achievement.cost) * 100} />
          <Text style={styles.needMore}>
            Precisa {'\n'}de mais {achievement.cost - 0}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>{achievement.title}</Text>
          <Text style={styles.description}>{achievement.description}</Text>
          <Text style={styles.promotion}>{achievement.reward}</Text>
        </View>
      </RNRectButton>
    </Animated.View>
  );
};

export default AchievementItem;
