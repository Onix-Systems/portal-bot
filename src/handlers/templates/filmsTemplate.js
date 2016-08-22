import filmsPromise from '../../services/crawler';
import options from '../common/options/filmsOptions';
import text from '../common/messages/filmsMessage';
import { BUTTONS } from '../../constants';
import { PREVIEWS } from '../common/i18n/constants';
import i18n from '../common/i18n';

export default () => filmsPromise
  .then(films => {
    films = films.filter(film => film.seance.length);
    return {
      text: text(films),
      options: options(
        films,
        { text: i18n(PREVIEWS), callback_data: BUTTONS.PREVIEWS }
      )
    };
  });