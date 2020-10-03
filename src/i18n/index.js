
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import flagAM from '../assests/flag-am.png'
import flagRU from '../assests/flag-ru.png'
import flagEN from '../assests/flag-en.png'
import am from './am.json'
import ru from './ru.json'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            am: {
                translation: am
            },
            ru: {
                translation: ru
            }
        },
        lng: "am",
        fallbackLng: "am",
        interpolation: {
            escapeValue: false
        }
    });

export const languages = [
    {
        name: 'am',
        flag: flagAM
    },
    {
        name: 'ru',
        flag: flagRU
    },
    {
        name: 'en',
        flag: flagEN
    }
]

export default i18n