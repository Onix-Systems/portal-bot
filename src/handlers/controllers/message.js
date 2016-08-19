import startTemplate from '../templates/start'

const resolve = text => {
  switch (true) {
    default:
      return startTemplate();
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