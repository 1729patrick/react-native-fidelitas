import React from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import ModalItem, { ModalType } from '~/components/molecules/items/ModalItem';
import List from '../../../atoms/List';

type ModalListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: ModalType[];
};

const ModalList: React.FC<ModalListProps> = ({ style, onPress, data }) => {
  return (
    <List
      item={ModalItem}
      data={data}
      style={style}
      onPress={onPress}
      keyExtractor={({ type }: any) => type}
    />
  );
};

export default ModalList;
