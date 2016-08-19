import filmsPromise from '../../../services/crawler';
import options from '../../common/options/start';
import text from '../../common/messages/start';

export default () => filmsPromise
  .then(films => ({
    text,
    options: options(films)
  }));