import React from 'react';
import QRCode from '~/components/molecules/QRCode';

import useHideTabBar from '~/hooks/useHideTabBar';

export default () => {
  useHideTabBar();

  return <QRCode />;
};
