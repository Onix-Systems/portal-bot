import env from 'node-env-file';
import express from 'express';
import bodyParser from 'body-parser';
import TelegramBot from 'node-telegram-bot-api';
import PortalBot from './bot';

env('./.env', { raise: false });
const __PROD__ = process.env.NODE_ENV === 'production';

const telegramBot = new TelegramBot(
  process.env.TELEGRAM_BOT_TOKEN,
  { polling: !__PROD__ }
);
telegramBot.setWebHook(
  __PROD__ ?
    `https://portal-cinema-bot.herokuapp.com/${process.env.TELEGRAM_BOT_TOKEN}` :
    ''
);

if (__PROD__) {
  console.log('START EXPRESS');
  const app = express();
  app.use(bodyParser.json());
  app.get('/', (_, res) => res.redirect('https://telegram.me/testmemroynodebot'));
  app.get(`/${process.env.TELEGRAM_BOT_TOKEN}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
  app.listen(process.env.PORT || 8080);
}

PortalBot(telegramBot);