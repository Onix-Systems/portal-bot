import { BUTTONS } from '../../../constants';
import { FILMS, PREVIEWS } from '../i18n/constants';
import i18n from '../../common/i18n';

export default [
  [
    { text: i18n(FILMS), callback_data: BUTTONS.FILMS },
    { text: i18n(PREVIEWS), callback_data: BUTTONS.PREVIEWS }
  ]
];