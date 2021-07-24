import React, { ElementType, ReactElement } from 'react';
import { FlatList, StyleProp, ViewStyle } from 'react-native';

type ListProps = {
  data: { [key: string]: any }[];
  item: ElementType;
  keyExtractor?: any;
  style?: StyleProp<ViewStyle>;
  onPress?: (args: any) => void;
  horizontal?: boolean;
  header?: ReactElement;
};

const List: React.FC<ListProps> = ({
  item: Item,
  data,
  keyExtractor = ({ id }: { id: number | string }) => id,
  style,
  onPress,
  horizontal,
  header,
}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Item {...item} onPress={item.onPress || onPress} />
      )}
      data={data}
      keyExtractor={keyExtractor}
      contentContainerStyle={style}
      overScrollMode="never"
      horizontal={horizontal}
      ListHeaderComponent={header}
    />
  );
};

export default List;
