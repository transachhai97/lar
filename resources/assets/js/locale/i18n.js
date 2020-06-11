import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import isDevelopment from "@/env";

import translationEN from "@/locale/en/translation";
import translationVI from "@/locale/vi/translation";

const resources = {
    en: {
        translation: translationEN,
    },
    vi: {
        translation: translationVI,
    },
};

i18n.use(initReactI18next).init({
    resources: resources,
    lng: "vi",
    fallbackLng: "vi",
    debug: isDevelopment,

    keySeparator: false,

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
