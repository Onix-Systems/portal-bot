export default films => [
  // TODO: refactor
  ...[...films].map(([id, film]) => [{
    text: film.result.info.title,
    callback_data: id
  }])
];