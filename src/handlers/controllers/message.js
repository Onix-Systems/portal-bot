import startTemplate from '../templates/startTemplate'
import helpTemplate from '../templates/helpTemplate';

const resolve = text => {
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

export default bot => message =>
  resolve(message.text)
    .then(sendMessage(bot, message));