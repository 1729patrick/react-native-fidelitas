import React from 'react';
import QRCode from '~/components/atoms/QRCode';

import useHideTabBar from '~/hooks/useHideTabBar';

export default () => {
  useHideTabBar();

  return <QRCode />;
};
