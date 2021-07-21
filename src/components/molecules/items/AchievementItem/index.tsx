import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
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
  return (
    <View style={styles.border}>
      <RectButton
        style={styles.item}
        rippleColor={StyleGuide.palette.secondary}
        onPress={() => onPress?.({ title })}>
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
      </RectButton>
    </View>
  );
};

export default AchievementItem;
