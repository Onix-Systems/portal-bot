import filmsPromise from '../../services/crawler';
import options from '../common/options/filmsOptions';
import text from '../common/messages/filmsMessage';
import { BUTTONS } from '../common/constants';

export default () => filmsPromise
  .then(films => {
    films = films.filter(film => film.seance.length);
    return {
      text: text(films),
      options: options(
        films,
        { text: 'Анонсы', callback_data: BUTTONS.PREVIEWS }
      )
    };
  });