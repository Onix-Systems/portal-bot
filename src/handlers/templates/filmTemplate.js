import filmsPromise from '../../services/crawler';
import options from '../common/options/filmOptions';
import text from '../common/messages/filmMessage';

// TODO: refactor
const getNeighbour = (films, film, left = true) => {
  films = films.filter(_film =>
    !!_film.seance.length === !!film.seance.length
  );

  const index = films.findIndex(_film =>
    _film.result.info.id === film.result.info.id
  );
  const size = films.length;

  return films[
    left ?
      (index > 0 ? index - 1 : size - 1) :
      (index < size - 1 ? index + 1 : 0)
    ].result.id;
};

export default (filmId, prefix) => filmsPromise()
  .then(films => {
    const film = films.find(film => film.result.info.id === filmId);
    return {
      text: text(film, prefix),
      options: options(
        film,
        getNeighbour(films, film),
        getNeighbour(films, film, false),
        prefix
      )
    };
  });
