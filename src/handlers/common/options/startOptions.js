import { PARSE_MODE } from '../../../constants';
import inline_keyboard from '../keyboards/startKeyboard';

export default {
  parse_mode: PARSE_MODE.MARKDOWN,
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard
  }
};