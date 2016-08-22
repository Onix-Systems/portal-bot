import { BUTTONS } from '../../../constants/index';
import {
  INFORMATION,
  SEANCES,
  TRAILER,
  POSTER,
  FILMS,
  PREVIEWS
} from '../i18n/constants';
import i18n from '../i18n';

export default (film, prev, next, prefix = '') => [
  [
    prefix !== '' &&
    { text: i18n(INFORMATION), callback_data: film.result.id },
    film.seance.length && prefix !== BUTTONS.SEANCES &&
    { text: i18n(SEANCES), callback_data: BUTTONS.SEANCES + film.result.id },
    prefix !== BUTTONS.TRAILER &&
    { text: i18n(TRAILER), callback_data: BUTTONS.TRAILER + film.result.id },
    prefix !== BUTTONS.POSTER &&
    { text: i18n(POSTER), callback_data: BUTTONS.POSTER + film.result.id }

  ].filter(Boolean),
  [
    { text: '<', callback_data: prefix + prev },
    { text: i18n(FILMS), callback_data: BUTTONS.FILMS },
    { text: i18n(PREVIEWS), callback_data: BUTTONS.PREVIEWS },
    { text: '>', callback_data: prefix + next },
  ],
];