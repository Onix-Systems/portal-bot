export default (films, additionalButton) => [
  ...films.map(
    film => ({
      text: film.result.info.title,
      callback_data: film.result.id
    })
  ),
  additionalButton
].reduce((result, film, index) => {
  if (index % 2) {
    result[result.length - 1].push(film);
  } else {
    result.push([film]);
  }
  return result;
}, []);