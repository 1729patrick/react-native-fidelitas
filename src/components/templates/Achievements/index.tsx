import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '../../../util/StyleGuide';
import CircularProgress from '../../atoms/CircularProgress';
import styles from './styles';

type AchievementsProps = {
  achievements: {
    title: string;
    description: string;
    promotion: string;
    total: number;
    completed: number;
  }[];
};
const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      overScrollMode="never">
      {achievements.map(
        ({ title, description, promotion, total, completed }, index) => (
          <View style={styles.border}>
            <RectButton
              style={styles.item}
              key={index}
              rippleColor={StyleGuide.palette.secondary}>
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
        ),
      )}
    </ScrollView>
  );
};

export default Achievements;
