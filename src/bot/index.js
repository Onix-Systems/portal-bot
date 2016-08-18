import filmsPromise from '../services/crawler';
import MESSAGES from './messages';
import OPTIONS from './options';

const getGreetKeyboard = films => ({
  reply_markup: {
    inline_keyboard: [
      // TODO: refactor
      ...[...films].map(([id, film]) => [{
        text: film.result.info.title,
        callback_data: id
      }])
    ]
  }
});

// TODO: move to helpers?
// TODO: refactor
const getNeighbour = (map, id, left = true) => {
  const index = [...map].findIndex(([_id]) => _id === id);
  const size = map.size;
  return [...map][
    left ?
      index > 0 ? index - 1 : size - 1:
      index < size - 1 ? index + 1 : 0
    ][1].result.id;
};

const getControlsKeyboard = (films, id) => ({
  reply_markup: {
    inline_keyboard: [
      // TODO: complete
      [
        { text: 'Сеансы', callback_data: `seances_${id}` },
        { text: 'Трейлер', callback_data: `trailer_${id}` }
      ],
      [
        { text: '<', callback_data: getNeighbour(films, id) },
        { text: 'Фильмы', callback_data: 'menu' },
        { text: '>', callback_data: getNeighbour(films, id, false) },
      ],
    ]
  }
});

const getGreetOptions = films => ({
  ...getGreetKeyboard(films),
  ...OPTIONS.GREET
});

const getGreetMessage = films => [
  MESSAGES.GREET,
  getGreetOptions(films)
];

const getFilmOptions = (films, id) => ({
  ...getControlsKeyboard(films, id),
  ...OPTIONS.FILM
});

const getFilmMessage = (films, id) => [
  MESSAGES.FILM(films.get(id)),
  getFilmOptions(films, id)
];


const messageResponse = bot => message => (
  filmsPromise.then(films => {
      bot.sendMessage(
        message.chat.id,
        ...getGreetMessage(films)
      );
    }
  )
);

const callbackQueryResponse = bot => query => (
  filmsPromise
    .then(films => {
      switch (true) {
        // TODO: complete
        case query.data.startsWith('seances_'):
          return ['Seances', getGreetKeyboard(films)];

        // TODO: complete
        case query.data.startsWith('trailer_'):
          return ['Trailer', getGreetKeyboard(films)];

        case !isNaN(+query.data):
          return getFilmMessage(films, query.data);

        case query.data === 'menu':
          return getGreetMessage(films);

        default:
          return [MESSAGES.ERROR, getGreetOptions(films)]
      }
    })
    .then(([text, options]) =>
      bot.editMessageText(text, {
        ...options,
        chat_id: query.message.chat.id,
        message_id: query.message.message_id
      }).catch(error => console.error(error)) // ¯\_(ツ)_/¯ ignore "message is not modified" error
    )
);

export default bot => {
  console.log('Bot started!');
  bot.on('callback_query', callbackQueryResponse(bot));
  bot.on('message', messageResponse(bot));
};