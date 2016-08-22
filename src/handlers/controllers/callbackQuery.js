import filmTemplate from '../templates/filmTemplate';
import filmsTemplate from '../templates/filmsTemplate';
import previewTemplate from '../templates/previewTemplate';
import startTemplate from '../templates/startTemplate';
import errorTemplate from '../templates/errorTemplate';
import { BUTTONS } from '../../constants';

const resolve = data => {
  console.log(data);

  const request = data.match(/(.*?)(\d+)/);
  const prefix = request && request[1];
  const filmId = request && request[2];

  switch (true) {
    case prefix === BUTTONS.TRAILER:
    case prefix === BUTTONS.SEANCES:
    case prefix === BUTTONS.POSTER:
    case prefix === '':
      return filmTemplate(filmId, prefix);

    case data === BUTTONS.PREVIEWS:
      return previewTemplate();

    case data === BUTTONS.FILMS:
      return filmsTemplate();

    case data === BUTTONS.MENU:
      return startTemplate;
  }
};

const editMessageText = (bot, query) => ({
  text,
  options
}) => (
  bot.editMessageText(text, {
    ...options,
    chat_id: query.message.chat.id,
    message_id: query.message.message_id
  }).catch(error => console.error(error)) // ¯\_(ツ)_/¯ "message is not modified" error
);

export default bot => query =>
  resolve(query.data)
    .catch(error => {
      console.error(error);
      return errorTemplate;
    })
    .then(editMessageText(bot, query));