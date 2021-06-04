import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
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
  const { addListener, removeListener } = useNavigation();

  useEffect(() => {
    const listener = addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
    });

    return () => removeListener('focus', listener);
  });

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      overScrollMode="never">
      {achievements.map(
        ({ title, description, promotion, total, completed }, index) => (
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
        ),
      )}
    </ScrollView>
  );
};

export default Achievements;
