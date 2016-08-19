import { BUTTONS } from '../constants/index';

export default (film, prev, next, prefix = '') => [
  [
    { text: 'Информация', callback_data: film.result.id },
    film.seance.length &&
    { text: 'Сеансы', callback_data: BUTTONS.SEANCES + film.result.id },
    { text: 'Трейлер', callback_data: BUTTONS.TRAILER + film.result.id }
  ].filter(Boolean),
  [
    { text: '<', callback_data: prefix + prev },
    { text: 'Фильмы', callback_data: BUTTONS.FILMS },
    { text: 'Анонсы', callback_data: BUTTONS.PREVIEWS },
    { text: '>', callback_data: prefix + next },
  ],
];