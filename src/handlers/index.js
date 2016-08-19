import messageController from './controllers/message';
import callbackQueryController from './controllers/callbackQuery';

export default bot => {
  bot.on('callback_query', callbackQueryController(bot));
  bot.on('message', messageController(bot));
  console.log('bot started');
};