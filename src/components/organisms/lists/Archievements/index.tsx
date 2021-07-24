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
