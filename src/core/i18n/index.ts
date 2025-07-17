import { Locales } from "./locales";

import en from "./en.json";
import fr from "./fr.json";

export const messages = {
    [Locales.EN]: en,
    [Locales.FR]: fr
};

export const defaultLocale = process.env.VUE_APP_I18N_LOCALE || Locales.FR;
