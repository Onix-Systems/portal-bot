import filmsPromise from '../../../services/crawler';
import options from '../../common/options/filmOptions';
import text from '../../common/messages/filmMessage';

export default id => filmsPromise
  .then(films => {
    const film = films.get(id);
    return {
      text: text(film),
      options: options(film, 'prev', 'next')
    };
  });