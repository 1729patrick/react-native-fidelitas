import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import StyleGuide from '~/util/StyleGuide';

export const icons = {
  wifi: (
    <MaterialIcon name="wifi" color={StyleGuide.palette.primary} size={27} />
  ),
  smokingFriendly: (
    <MaterialIcon
      name="smoking-rooms"
      color={StyleGuide.palette.primary}
      size={27}
    />
  ),
  alcoholicBeverage: (
    <EntypoIcon name="drink" color={StyleGuide.palette.primary} size={23} />
  ),
  goodForDinner: (
    <MaterialIcon
      name="local-dining"
      color={StyleGuide.palette.primary}
      size={27}
    />
  ),
  goodForLunch: (
    <MaterialIcon
      name="brunch-dining"
      color={StyleGuide.palette.primary}
      size={27}
    />
  ),
  paymentWithCard: (
    <MaterialIcon
      name="credit-card"
      color={StyleGuide.palette.primary}
      size={27}
    />
  ),
  paymentWithMoney: (
    <MaterialIcon
      name="attach-money"
      color={StyleGuide.palette.primary}
      size={27}
    />
  ),
};
