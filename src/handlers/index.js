import messageController from './controllers/message';
import callbackQueryController from './controllers/callbackQuery';

export default (bot, botan) => {
  bot.on('callback_query', callbackQueryController(bot, botan));
  bot.on('message', messageController(bot, botan));
  console.log('bot started');
};