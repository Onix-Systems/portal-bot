import env from 'node-env-file';
import express from 'express';
import bodyParser from 'body-parser';
import TelegramBot from 'node-telegram-bot-api';
import PortalBot from './bot';

env('./.env');
const __PROD__ = process.env.NODE_ENV === 'production';

const telegramBot = new TelegramBot(
  process.env.TELEGRAM_BOT_TOKEN,
  { polling: !__PROD__ }
);
telegramBot.setWebHook(
  __PROD__ ?
    `some production url` :
    ''
);

if (__PROD__) {
  const app = express();
  app.use(bodyParser.json());
  app.get(`/${process.env.TELEGRAM_BOT_TOKEN}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
  app.listen(80);
}

PortalBot(telegramBot);