export default films => [
  // TODO: refactor
  ...[...films].map(([id, film]) => ({
    text: film.result.info.title,
    callback_data: id
  })).reduce((result, film, index) => {
    if (index % 2) {
      result[result.length - 1].push(film);
    } else {
      result.push([film]);
    }
    return result;
  }, [])
];