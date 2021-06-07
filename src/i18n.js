import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import XHR from 'i18next-xhr-backend'
// import Backend from 'i18next-http-backend';

import languageEN from './assets/translations/en.json';
import languageES from './assets/translations/es.json';

i18n
// .use(XHR)use either XHR and Bakend
// .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: languageEN,
      es: languageES,
    },
    /* default language when load the website in browser */
    lng: 'en',
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: 'en',
    /* debugger For Development environment */
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
      useSuspense: false,
    },
  });

export default i18n;
