import React, { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LanguageItem, {
  LanguageType,
} from '~/components/molecules/items/LanguageItem';
import { NormalizeTranslate } from '~/i18n';

import List from '../../../atoms/List';

type LanguagesListProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: (language: NormalizeTranslate) => void;
  data: LanguageType[];
  header?: ReactElement;
  language: NormalizeTranslate;
};

const LanguagesList: React.FC<LanguagesListProps> = ({
  style,
  data,
  header,
  language,
  onPress,
}) => {
  return (
    <List
      item={LanguageItem}
      extraData={{ language }}
      data={data}
      style={style}
      header={header}
      onPress={onPress}
    />
  );
};

export default LanguagesList;
