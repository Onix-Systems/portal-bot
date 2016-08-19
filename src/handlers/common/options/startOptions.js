import { PARSE_MODE } from '../constants';
import startKeyboard from '../keyboards/startKeyboard';

export default (...args) => ({
  parse_mode: PARSE_MODE.MARKDOWN,
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: startKeyboard(...args)
  }
});