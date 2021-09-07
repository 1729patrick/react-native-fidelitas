import { useState } from 'react';
import {
  getLanguageByDevice,
  NormalizeTranslate,
  setLanguageToI18n,
} from '~/i18n';
import useStorage from './useStorage';

export const useLanguage = () => {
  const [language, setLanguage] = useState<NormalizeTranslate>(
    getLanguageByDevice(),
  );
  const { setStorage } = useStorage<NormalizeTranslate>(
    '@fidelitas:language',
    restore,
  );

  const setLanguage_ = (language: NormalizeTranslate) => {
    setLanguageToI18n(language);
    setStorage(language);

    setLanguage(language);
  };

  function restore(language: NormalizeTranslate) {
    setLanguage(language);
    setLanguageToI18n(language);
  }

  return { setLanguage: setLanguage_, language };
};
