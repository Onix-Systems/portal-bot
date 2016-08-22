import { BUTTONS } from '../../../constants';
import { MENU } from '../../common/i18n/constants';
import i18n from '../../common/i18n';

export default (films, additionalButton) => [
  ...films.map(
    film => ({
      text: film.result.info.title,
      callback_data: BUTTONS.FILM + film.result.id
    })
  ),
  { text: i18n(MENU), callback_data: BUTTONS.MENU }
].reduce((result, film, index) => {
  if (index % 2) {
    result[result.length - 1].push(film);
  } else {
    result.push([film]);
  }
  return result;
}, []);