import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const resources = {
//   en: {
//     translation: {
//       "Welcome to React": "Welcome to React and react-i18next"
//     }
//   },
//   fr: {
//     translation: {
//       "Welcome to React": "Bienvenue à React et react-i18next"
//     }
//   }
// };

i18n
  .use(initReactI18next)
  .use(ChainedBackend)
  .init({
    // resources,
    lng: 'hi_IN', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: true,
    },
    saveMissing: true,
    backend: {
        backends: [
          LocalStorageBackend,
          HttpBackend
        ],
        backendOptions: [{
          expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
        }, {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        }]
      }
  });

  export default i18n;