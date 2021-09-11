import { NativeModules, Platform } from 'react-native';

import I18n from 'i18n-js';
import en from './locales/en_GB';
import pt from './locales/pt-PT';
import es from './locales/es-ES';

const normalizeTranslate = {
  en_GB: 'en_GB',
  pt_PT: 'pt_PT',
  es_ES: 'es_ES',
  en: 'en_GB',
  en_US: 'en_GB',
};

export type NormalizeTranslate = keyof typeof normalizeTranslate;

export const getLanguageByDevice = (): NormalizeTranslate =>
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

I18n.fallbacks = true;

I18n.translations = {
  en,
  en_GB: en,
  en_US: en,
  pt_PT: pt,
  es_ES: es,
};

export const setLanguageToI18n = (language: NormalizeTranslate) => {
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage =
    I18n.translations.hasOwnProperty(translateNormalize);

  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'en_GB');
};

const allKeys = { ...en, ...pt, ...es };

export type TranslationKeyType = keyof typeof allKeys;
export const translate = (
  key: TranslationKeyType,
  defaultKey?: TranslationKeyType,
): string => {
  if (!allKeys[key] && defaultKey) {
    return I18n.t(defaultKey);
  }

  return I18n.t(key);
};
