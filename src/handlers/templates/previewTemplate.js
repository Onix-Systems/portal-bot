import filmsPromise from '../../services/crawler';
import options from '../common/options/filmsOptions';
import text from '../common/messages/previewMessage';
import { BUTTONS } from '../../constants';
import { FILMS } from '../common/i18n/constants';
import i18n from '../common/i18n';

export default () => filmsPromise
  .then(films => {
    films = films.filter(film => !film.seance.length);
    return {
      text: text(films),
      options: options(
        films,
        { text: i18n(FILMS), callback_data: BUTTONS.FILMS }
      )
    };
  });