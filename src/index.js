import env from 'node-env-file';
import express from 'express';
import botanio from 'botanio';
import bodyParser from 'body-parser';
import TelegramBot from 'node-telegram-bot-api';
import setHandlers from './handlers';

env('./.env', { raise: false });
const __PROD__ = process.env.NODE_ENV === 'production';
const __TOKEN__ = process.env.TELEGRAM_BOT_TOKEN;
const __BOTANIO_TOKEN__ = process.env.BOTANIO_TOKEN;
const __HOST__ = process.env.HOST;

console.log(process.env);

const bot = new TelegramBot(
  process.env.TELEGRAM_BOT_TOKEN,
  { polling: !__PROD__ }
);
bot.setWebHook(
  __PROD__ ?
    `${__HOST__}${__TOKEN__}` :
    ''
);

const app = express();

app.use(bodyParser.json());
app.get('/', (_, res) =>
  res.redirect('https://telegram.me/PortalCinemaBot')
);
app.post(`/${__TOKEN__}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

__PROD__ && app.listen(process.env.PORT || 8080, () =>
  console.log('express started')
);

setHandlers(bot, __PROD__ && botanio(__BOTANIO_TOKEN__));
