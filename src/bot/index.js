import { getAllFilms } from '../services/crawler';

const filmsPromise = (() => {
  let filmsPromise = null;
  let areFilmsFetched = false;
  let films = [];

  const getFilms = () => (
    filmsPromise = areFilmsFetched ?
      Promise.resolve(films) :
      (filmsPromise || getAllFilms().then(films => {
        areFilmsFetched = true;
        return films;
      }))
  );

  getFilms();
  setInterval(() => {
    if (areFilmsFetched) {
      filmsPromise = null;
      areFilmsFetched = false;
      getFilms();
    }
  }, 9e5); // 15 minutes

  return filmsPromise;
})();

const getKeyboard = films => [
  [{ text: 'Меню', callback_data: 'menu' }],
  ...[...films].map(([id, film]) => [{
    text: film.result.info.title,
    callback_data: id
  }])
];

const getDefaultResponse = films => ({
  text: 'Список фильмов:',
  options: {
    parse_mode: 'markdown',
    reply_markup: {
      inline_keyboard: getKeyboard(films)
    }
  }
});

export default bot => {

  bot.on('callback_query', query => {

    filmsPromise.then(films => {

      const isMenu = query.data === 'menu';
      const film = isMenu ? null : films.get(query.data);
      const response = getDefaultResponse(films);
      response.text = isMenu ?
        response.text :
        !film ?
          'Фильм не найден' :
          [
            `*${film.result.info.title}*`,
            '',
            `*Даты показа*: ${film.date_anonce.join('')} - ${film.date_close.join('')}`,
            `*Формат*: ${film.result.format}`,
            `*Жанры*: ${film.result.zhanr.join(', ')}`,
            `*Год*: ${film.result.god}`,
            `*Страна*: ${film.result.strana}`,
            `*Длительность*: ${film.result.dlitelnost_min}`,
            `*Режиссер*: ${film.result.rezhisser}`,
            `*Актеры*: ${film.result.aktery}`,
            `[·](http://portalcinema.com.ua/uploads/products/main/${film.main_photo})`
          ].join("\n");

      if (response.text !== query.message.text) {
        bot.editMessageText(response.text, {
          ...response.options,
          chat_id: query.message.chat.id,
          message_id: query.message.message_id
        });
      }

    });

  });

  bot.on('message', message => {

    filmsPromise.then(films => {
        const response = getDefaultResponse(films);
        bot.sendMessage(
          message.chat.id,
          response.text,
          response.options
        );
      }
    );

  });

  console.log('Bot started!');
};