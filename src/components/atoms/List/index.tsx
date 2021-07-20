import React, { ElementType } from 'react';
import { FlatList, StyleProp, ViewStyle } from 'react-native';

type ListProps = {
  data: { [key: string]: any }[];
  item: ElementType;
  keyExtractor?: any;
  style?: StyleProp<ViewStyle>;
  onPress?: (args: any) => void;
};

const List: React.FC<ListProps> = ({
  item: Item,
  data,
  keyExtractor = ({ id }: { id: number | string }) => id,
  style,
  onPress,
}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Item {...item} onPress={onPress} />}
      data={data}
      keyExtractor={keyExtractor}
      contentContainerStyle={style}
      overScrollMode="never"
    />
  );
};

export default List;