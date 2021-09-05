import React from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import FacilityItem from '~/components/molecules/items/FacilityItem';
import { FacilityType } from '~/contexts/Restaurant';
import List from '../../../atoms/List';

type FacilitiesListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: FacilityType[];
};

const FacilitiesList: React.FC<FacilitiesListProps> = ({
  style,
  onPress,
  data,
}) => {
  return (
    <List item={FacilityItem} data={data} style={style} onPress={onPress} />
  );
};

export default FacilitiesList;
