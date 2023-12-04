import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lang from "./index";

i18n.use(initReactI18next).init({
  resources: lang,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
