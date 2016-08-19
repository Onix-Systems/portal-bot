export default (film, prev, next, prefix = '') => [
  [
    { text: 'Сеансы', callback_data: `seances_${film.result.id}` },
    { text: 'Трейлер', callback_data: `trailer_${film.result.id}` }
  ],
  [
    { text: '<', callback_data: `${prefix}_${film.result.id}` },
    { text: 'Фильмы', callback_data: 'menu' },
    { text: '>', callback_data: `${prefix}_${film.result.id}` },
  ],
];