import React from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import AchievementItem, {
  AchievementType,
} from '~/components/molecules/items/AchievementItem';
import List from '../../../atoms/List';

type AchievementListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: AchievementType[];
};

const AchievementList: React.FC<AchievementListProps> = ({
  style,
  onPress,
  data,
}) => {
  return (
    <List item={AchievementItem} data={data} style={style} onPress={onPress} />
  );
};

export default AchievementList;
