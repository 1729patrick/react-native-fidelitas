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
    setLanguage,
  );

  const setLanguage_ = (language: NormalizeTranslate) => {
    setLanguageToI18n(language);
    setStorage(language);

    setLanguage(language);
  };

  return { setLanguage: setLanguage_, language };
};
