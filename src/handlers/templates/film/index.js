import filmsPromise from '../../../services/crawler';
import options from '../../common/options/film';
import text from '../../common/messages/film';

export default id => filmsPromise
  .then(films => {
    const film = films.get(id);
    return {
      text: text(film),
      options: options(film, 'prev', 'next')
    };
  });