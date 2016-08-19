import startTemplate from '../templates/start';
import filmTemplate from '../templates/film';
import errorTemplate from '../templates/error';

const resolve = data => {
  switch (true) {
    case !isNaN(+data):
      return filmTemplate(data);

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