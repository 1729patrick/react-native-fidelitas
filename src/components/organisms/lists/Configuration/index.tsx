import React, { ReactElement } from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import ConfigurationItem, {
  ConfigurationType,
} from '~/components/molecules/items/ConfigurationItem';
import List from '../../../atoms/List';

type ConfigurationListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: ConfigurationType[];
  header?: ReactElement;
};

const ConfigurationList: React.FC<ConfigurationListProps> = ({
  style,
  data,
  header,
}) => {
  return (
    <List
      item={ConfigurationItem}
      data={data}
      style={style}
      header={header}
      keyExtractor={({ title }: ConfigurationType) => title}
    />
  );
};

export default ConfigurationList;
