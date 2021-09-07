import React from 'react';
import Header from '~/components/atoms/Header';
import { LanguageType } from '~/components/molecules/items/LanguageItem';
import LanguagesList from '~/components/organisms/lists/Languages';
import Notifications from '~/components/templates/Notifications';
import useHideTabBar from '~/hooks/useHideTabBar';
import { useLanguage } from '~/hooks/useLanguage';
import { translate } from '~/i18n';

import styles from './styles';

export default () => {
  const { setLanguage, language } = useLanguage();
  useHideTabBar();

  const items: LanguageType[] = [
    {
      id: 'pt_PT',
      title: translate('portuguese'),
    },
    {
      id: 'en_GB',
      title: translate('english'),
    },
    {
      id: 'es_ES',
      title: translate('spanish'),
    },
  ];

  return (
    <Notifications
      header={<Header title="Idioma" close />}
      list={
        <LanguagesList
          data={items}
          style={styles.contentContainer}
          language={language}
          onPress={setLanguage}
        />
      }
    />
  );
};
