import { BUTTONS_PREFIX } from '../constants/index';

export default (film, prev, next, prefix = '') => [
  [
    { text: 'Информация', callback_data: film.result.id },
    { text: 'Сеансы', callback_data: BUTTONS_PREFIX.SEANCES + film.result.id },
    { text: 'Трейлер', callback_data: BUTTONS_PREFIX.TRAILER + film.result.id }
  ],
  [
    { text: '<', callback_data: prefix + prev },
    { text: 'Фильмы', callback_data: BUTTONS_PREFIX.MENU },
    { text: '>', callback_data: prefix + next },
  ],
];