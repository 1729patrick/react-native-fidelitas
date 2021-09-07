import React, { ElementType, ReactElement, useRef } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

type ListProps = {
  data: { [key: string]: any }[];
  item: ElementType;
  keyExtractor?: any;
  style?: StyleProp<ViewStyle>;
  onPress?: (args: any) => void;
  horizontal?: boolean;
  header?: ReactElement;
  onScrollUp?: () => void;
  onScrollDown?: () => void;
  extraData?: any;
};

const List: React.FC<ListProps> = ({
  item: Item,
  data,
  keyExtractor = ({ id }: { id: number | string }) => id,
  style,
  onPress,
  horizontal,
  header,
  onScrollUp,
  onScrollDown,
  extraData,
}) => {
  const lastOffsetRef = useRef(0);
  const maxOffsetRef = useRef(0);

  const onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { y } = nativeEvent.contentOffset;

    if (y > lastOffsetRef.current && y > 0) {
      maxOffsetRef.current = y - 50;

      onScrollDown?.();
    } else if (y <= Math.max(maxOffsetRef.current, 0)) {
      maxOffsetRef.current = y;

      onScrollUp?.();
    }

    lastOffsetRef.current = y;
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Item {...item} {...extraData} onPress={item.onPress || onPress} />
      )}
      data={data}
      onScroll={onScrollUp && onScrollDown ? onScroll : undefined}
      keyExtractor={keyExtractor}
      contentContainerStyle={style}
      overScrollMode="never"
      scrollEventThrottle={16}
      horizontal={horizontal}
      ListHeaderComponent={header}
    />
  );
};

export default List;
