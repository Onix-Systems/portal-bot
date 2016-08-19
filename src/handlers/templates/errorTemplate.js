import filmsPromise from '../../../services/crawler';
import options from '../../common/options/startOptions';
import text from '../../common/messages/errorMessage';

export default () => filmsPromise
  .then(films => ({
    text,
    options: options(films)
  }));