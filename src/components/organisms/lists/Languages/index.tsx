import React, { ReactElement } from 'react';
import { AlertType, StyleProp, ViewStyle } from 'react-native';
import LanguageItem, {
  LanguageType,
} from '~/components/molecules/items/LanguageItem';

import List from '../../../atoms/List';

type LanguagesListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (args: AlertType) => void;
  data: LanguageType[];
  header?: ReactElement;
};

const LanguagesList: React.FC<LanguagesListProps> = ({
  style,
  data,
  header,
}) => {
  return <List item={LanguageItem} data={data} style={style} header={header} />;
};

export default LanguagesList;
