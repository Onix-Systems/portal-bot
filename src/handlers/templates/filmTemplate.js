import filmsPromise from '../../services/crawler';
import options from '../common/options/filmOptions';
import text from '../common/messages/filmMessage';

// TODO: refactor
const getNeighbour = (map, id, left = true) => {
  const index = [...map].findIndex(([_id]) => _id === id);
  const size = map.size;
  return [...map][
    left ?
      index > 0 ? index - 1 : size - 1 :
      index < size - 1 ? index + 1 : 0
    ][1].result.id;
};

export default (filmId, prefix) => filmsPromise
  .then(films => {
    const film = films.get(filmId);
    return {
      text: text(film, prefix),
      options: options(
        film,
        getNeighbour(films, filmId),
        getNeighbour(films, filmId, true),
        prefix
      )
    };
  });