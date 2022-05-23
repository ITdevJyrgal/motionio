import {LOCALES} from "./locales";
import {Header} from "./messages/header";
import {Projects} from "./messages/proejcts";
import {Contact} from "./messages/contact";
import {Hero} from "./messages/hero";
import {Others} from "./messages/others";


export const MESSAGES = {
    [LOCALES.ENGLISH]: {
        ...Header[LOCALES.ENGLISH],
        ...Projects[LOCALES.ENGLISH],
        ...Contact[LOCALES.ENGLISH],
        ...Hero[LOCALES.ENGLISH],
        ...Others[LOCALES.ENGLISH],
    },
    [LOCALES.RUSSIAN]: {
        ...Header[LOCALES.RUSSIAN],
        ...Projects[LOCALES.RUSSIAN],
        ...Contact[LOCALES.RUSSIAN],
        ...Hero[LOCALES.RUSSIAN],
        ...Others[LOCALES.RUSSIAN],
    }
}
