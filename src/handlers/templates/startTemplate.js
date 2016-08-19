import filmsPromise from '../../services/crawler';
import options from '../common/options/startOptions';
import text from '../common/messages/startMessage';

export default () => filmsPromise
  .then(films => ({
    text,
    options: options(films)
  }));