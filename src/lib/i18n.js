import es from '../i18n/es.json';
import en from '../i18n/en.json';

const LANGUAGES = {
  es,
  en,
};

export const useTranslations = (lang) => {
  const langCode = lang === 'en' ? 'en' : 'es';

  return function t(key) {
    return LANGUAGES[langCode][key] || key;
  }
}