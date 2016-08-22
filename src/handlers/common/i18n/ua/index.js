import * as KEYS from '../../i18n/constants';
import {
  PORTAL_URL,
  PORTAL_PHONE1,
  PORTAL_PHONE2,
  ONIX_URL
} from '../../../../constants/index';

const COMMON = {
  [KEYS.ADDRESS]: 'Адреса',
  [KEYS.CONTACTS]: 'Контакти',
  [KEYS.CINEMA_NAME]: 'Портал',
  [KEYS.COMPANY_NAME]: 'Onix-systems'
};

export default {
  // COMMON
  [KEYS.INFORMATION]: 'Інформація',
  [KEYS.TRAILER]: 'Трейлер',
  [KEYS.POSTER]: 'Постер',
  [KEYS.FILMS]: 'Фільми',
  [KEYS.PREVIEWS]: 'Анонси',
  [KEYS.SEANCES]: 'Сеанси',
  [KEYS.TODAY_IN_THE_CINEMA]: 'Сьогодні в кіно',
  [KEYS.ADDRESS]: COMMON[KEYS.ADDRESS],
  [KEYS.CONTACTS]: COMMON[KEYS.CONTACTS],
  [KEYS.CINEMA_NAME]: COMMON[KEYS.CINEMA_NAME],
  [KEYS.COMPANY_NAME]: COMMON[KEYS.COMPANY_NAME],
  [KEYS.MENU]: 'Меню',

  // DAYS
  [KEYS.MONDAY]: 'Понеділок',
  [KEYS.TUESDAY]: 'Вівторок',
  [KEYS.WEDNESDAY]: 'Середа',
  [KEYS.THURSDAY]: 'Четвер',
  [KEYS.FRIDAY]: "П'ятниця",
  [KEYS.SATURDAY]: 'Субота',
  [KEYS.SUNDAY]: 'Неділя',

  // FILM
  [KEYS.SHOW_DATES]: 'Дати показу',
  [KEYS.FORMAT]: 'Формат',
  [KEYS.GENRES]: 'Жанри',
  [KEYS.YEAR]: 'Рік',
  [KEYS.COUNTRY]: 'Країна',
  [KEYS.DURATION]: 'Тривалість',
  [KEYS.PRODUCER]: 'Режисер',
  [KEYS.ACTORS]: 'Актори',

  // MESSAGES
  [KEYS.ERROR_MESSAGE]: '😔 Виникла помилка',
  [KEYS.START_MESSAGE]: [
    `Привіт! Це бот для кінотеатру [${COMMON[KEYS.CINEMA_NAME]}](${PORTAL_URL})`,
    '',
    `*${COMMON[KEYS.ADDRESS]}*:`,
    'г. Кропивницький (Кіровоград)',
    'ул. 50 років Жовтня 1-А',
    '',
    `*${COMMON[KEYS.CONTACTS]}*:`,
    PORTAL_PHONE1,
    PORTAL_PHONE2,
    '',
    `Розроблено в [${COMMON[KEYS.COMPANY_NAME]}](${ONIX_URL})`
  ].join("\n")
};