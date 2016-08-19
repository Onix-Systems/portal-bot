import { BUTTONS } from '../constants';

export default films => [
  ...films.map(
    film => ({
      text: film.result.info.title,
      callback_data: film.result.id
    })
  ),
  { text: 'Анонсы', callback_data: BUTTONS.PREVIEWS }
].reduce((result, film, index) => {
  if (index % 2) {
    result[result.length - 1].push(film);
  } else {
    result.push([film]);
  }
  return result;
}, []);