import React from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import AddressItem from '~/components/molecules/items/AddressItem';
import List from '../../../atoms/List';

type AddressesListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: any[];
};

const AddressesList: React.FC<AddressesListProps> = ({
  style,
  onPress,
  data,
}) => {
  return (
    <List item={AddressItem} data={data} style={style} onPress={onPress} />
  );
};

export default AddressesList;
