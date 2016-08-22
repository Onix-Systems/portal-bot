import filmsPromise from '../../services/crawler';
import options from '../common/options/filmsOptions';
import text from '../common/messages/previewMessage';

export default () => filmsPromise
  .then(films => {
    films = films.filter(film => !film.seance.length);
    return {
      text: text(films),
      options: options(films)
    };
  });