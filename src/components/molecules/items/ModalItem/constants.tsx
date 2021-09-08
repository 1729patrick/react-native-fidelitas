import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatIcon from 'react-native-vector-icons/Feather';

import StyleGuide from '~/util/StyleGuide';

export const icons = {
  delete: (
    <IonIcon
      name="ios-trash-outline"
      color={StyleGuide.palette.primary}
      size={23}
    />
  ),
  edit: <FeatIcon name="edit-2" color={StyleGuide.palette.primary} size={23} />,
};
