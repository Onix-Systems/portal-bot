import filmsPromise from '../../services/crawler';
import options from '../common/options/filmsOptions';
import text from '../common/messages/previewMessage';
import { BUTTONS } from '../common/constants';

export default () => filmsPromise
  .then(films => {
    return {
      text,
      options: options(
        films.filter(film => !film.seance.length),
        { text: 'Фильмы', callback_data: BUTTONS.FILMS }
      )
    };
  });