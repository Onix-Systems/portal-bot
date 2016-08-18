import requestPromise from 'request-promise';

const makeRequest = (method = 'get', url = '', options = {}) => (
  requestPromise[method](`http://portalcinema.com.ua/${url}`, {
    timeout: 5000,
    ...options
  })
);

const getFilmsId = html => {
  const re = /load_film_info\((\d+)\)/g;
  const filmIds = new Set();
  let matches = [];

  do {
    matches = re.exec(html);
    if (matches && matches.length > 1) {
      filmIds.add(matches[1]);
    }
  } while (matches);

  return filmIds;
};

const getFilmsInfo = filmsId => (
  Promise.all(
    [...filmsId].map(film =>
      makeRequest(
        'post',
        'products/index/getInfo',
        { form: { film } }
      ).then(JSON.parse)
    )
  ).then(films =>
    new Map(films.map(film => [
      film.result.id, film
    ]))
  )
);

export const getAllFilms = () => {
  console.log('fetch'); // TODO: remove
  return makeRequest()
    .then(getFilmsId)
    .then(getFilmsInfo)
    .catch(error => {
      console.error(error);
      return getAllFilms();
    })
};