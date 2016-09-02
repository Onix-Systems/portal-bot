import startTemplate from '../templates/startTemplate'
import helpTemplate from '../templates/helpTemplate';
import errorTemplate from '../templates/errorTemplate';

const resolve = (message, botan) => {
  const { text } = message;

  botan && botan.track(message);

  switch (true) {
    case text === '/help':
      return helpTemplate;

    default:
      return startTemplate;
  }
};

const sendMessage = (bot, message) => ({
  text,
  options
}) => (
  bot.sendMessage(
    message.chat.id,
    text,
    options
  ).catch(error => console.error(error))
);

export default (bot, botan) => message =>
  resolve(message, botan)
    .catch(error => {
      console.error(error);
      return errorTemplate;
    })
    .then(sendMessage(bot, message));