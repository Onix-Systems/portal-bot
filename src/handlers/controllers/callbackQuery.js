import filmTemplate from '../templates/filmTemplate';
import startTemplate from '../templates/startTemplate';
import errorTemplate from '../templates/errorTemplate';
import { BUTTONS_PREFIX } from '../common/constants/index';

const resolve = data => {
  console.log(data);

  const request = data.match(/(.*?)(\d+)/);
  const prefix = request && request[1];
  const filmId = request && request[2];

  switch (true) {
    case prefix === BUTTONS_PREFIX.TRAILER:
    case prefix === BUTTONS_PREFIX.SEANCES:
    case prefix === '':
      return filmTemplate(filmId, prefix);

    case data === 'menu':
      return startTemplate();

    default:
      return errorTemplate();
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
    .then(editMessageText(bot, query));