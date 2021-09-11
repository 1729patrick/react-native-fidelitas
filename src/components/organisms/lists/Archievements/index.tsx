import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { AchievementType } from '~/api/useAchievements';
import AchievementItem from '~/components/molecules/items/AchievementItem';
import List from '../../../atoms/List';

type AchievementListProps = {
  style?: StyleProp<ViewStyle>;
  onPress: (args: AchievementType) => void;
  data: AchievementType[];
  onScrollUp: () => void;
  onScrollDown: () => void;
};

const AchievementList: React.FC<AchievementListProps> = ({
  style,
  onPress,
  data,
  onScrollUp,
  onScrollDown,
}) => {
  return (
    <List
      item={AchievementItem}
      data={data}
      style={style}
      onPress={onPress}
      onScrollUp={onScrollUp}
      onScrollDown={onScrollDown}
    />
  );
};

export default AchievementList;
