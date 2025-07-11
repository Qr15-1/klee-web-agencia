import es from '../i18n/es.json';
import en from '../i18n/en.json';

const LANGUAGES = {
  es,
  en,
};

export const useTranslations = (lang) => {
  // Si el idioma es 'en', devuelve el traductor para inglés.
  // Si no, por defecto, devuelve el traductor para español.
  const langCode = lang === 'en' ? 'en' : 'es';

  return function t(key) {
    // Busca la clave en el archivo de idioma correspondiente.
    // Si no la encuentra, devuelve la clave misma para que sepas qué falta por traducir.
    return LANGUAGES[langCode][key] || key;
  }
}