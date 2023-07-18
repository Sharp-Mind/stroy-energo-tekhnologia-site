import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            ru: {
                translation: {
                    "Home": "Главная",
                    "About us": "О компании",
                    "Our works": "Наши работы",
                    "Contacts": "Контакты",
                    "Present_text_row_1": "Представляем вам нашу компанию",
                    "Present_text_row_2": '"СтройЭнергоТехнология"',
                    "Present_text_row_3": "по работе с инженерными системами:",
                    "heating": "отопления",
                    "ventilation": "вентиляции",
                    "conditioning": "кондиционирования",
                    "water supply": "водноснабжения",
                    "sewerage": "канализации",
                    "About us 2": "О нас",
                    "Download_file_name": '"Референт-лист СЭТ"',
                    "Download presentation PDF": "Скачать презентацию",
                    "About us text": "Наша компания занимается инженерными системами такими как: Отопление,вентиляция,кондиционирование, водоснабжение,канализация. У нас работают ответственные, грамотные и обученные сотрудники, знающие каждый свою работу в системах инженерии. Каждый наш сотрудник снабжён качественными строительными ресурсами для выполнения точной и быстрой работы. Именно поэтому в истории нашей компании имеются объекты, которые служат для нас предметом гордости.",
                    "About us text 2": "Мы всегда рады к сотрудничеству с новыми клиентами и будем рады делать для вас качественную работу!",
                    "Phone_num": "Телефон",
                    "Address": "Адрес",
                    "Address_data": " 127254, г. Москва, Огородный проезд, дом 5, строение 4, этаж 2, помещение 202",
                    "Address_data_bank_creds": "ИНН 7715831341/ КПП 771501001",
                    "Developed by": "Разработка сайта: ",
                    "Developer_name": "Павел Плетнёв",
                    "Page_Title": "СтройЭнергоТехнология - проектирование инженерных систем"
                   
                }
            },

            en: {
                translation: {
                    "Home": "Home",
                    "About us": "About us",
                    "Our works": "Our works",
                    "Contacts": "Contacts",
                    "Present_text_row_1": "We present our company",
                    "Present_text_row_2": '"StroyEnergoTekhnologiya"',
                    "Present_text_row_3": " for work with engineering systems of:",
                    "heating": "heating",
                    "ventilation": "ventilation",
                    "conditioning": "conditioning",
                    "water supply": "water supply",
                    "sewerage": "sewerage",
                    "About us 2": "",
                    "Download_file_name": '"Reference-list SET"',
                    "Download presentation PDF": "Download PDF-presentation",
                    "About us text": "Our company is engaged in engineering systems such as: Heating, ventilation, air conditioning, water supply, sewerage. We employ responsible, competent and trained employees who each know their work in engineering systems. Each of our employees is equipped with high-quality construction resources to perform accurate and fast work. That is why in the history of our company there are objects that serve as a source of pride for us",
                    "About us text 2": "We are always glad to cooperate with new clients and will be glad to do quality work for you!",
                    "Phone_num": "Phone",
                    "Address": "Address",
                    "Address_data": "  Moscow, Ogorodny passage, building 5, housing 4, floor 2, room 202, 127254, Russia.",
                    "Address_data_bank_creds": "ITN: 7715831341/ Tax Registration Reason Code (KPP): 771501001",
                    "Developed by": "Website developed by: ",
                    "Developer_name": "Pavel Pletnev",
                    "Page_Title": "StroyEnergoTechnology - work with engineering systems"
                   
                }
            }
        },
        lng: "ru", // if you're using a language detector, do not define the lng option
        fallbackLng: "eng",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });