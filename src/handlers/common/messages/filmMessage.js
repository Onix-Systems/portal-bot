import { DAYS, BUTTONS } from '../constants';

// TODO: refactor http://goo.gl/WRAomg
const getSchedule = schedule => Object.keys(schedule)
  .map(dayNumber => schedule[dayNumber]
    .reduce((result, { price, time }) => {
      result[price] = result[price] || [];
      result[price].push(time);
      return result;
    }, {})
  ).map((seance, day) => Object.keys(seance)
    .map(price => [
        `*${DAYS[day]}*`,
        `${
          seance[price]
            .map(time => `\`${time}\``)
            .join(', ')
          } - ${price.replace('.', '')}`,
        ''
      ].join("\n")
    ).join("\n")
  ).join("\n");

export default (film, prefix) => {
  switch (prefix) {
    case BUTTONS.TRAILER:
      const url = film.result.trejlery.match(/src="(.*?)"/)[1];
      return [
        `*${film.result.info.title}*`,
        '',
        `[${url}](${url})`
      ].join("\n");

    case BUTTONS.SEANCES:
      return [
        `*${film.result.info.title}*`,
        '',
        getSchedule(film.schedule)
      ].join("\n");

    default:
      return [
        `*${film.result.info.title}*`,
        '',
        `*Даты показа*: ${film.date_anonce.join('')} - ${film.date_close.join('')}`,
        `*Формат*: ${film.result.format}`,
        `*Жанры*: ${film.result.zhanr.join(' ')}`,
        `*Год*: ${film.result.god}`,
        `*Страна*: ${film.result.strana}`,
        `*Длительность*: ${film.result.dlitelnost_min}`,
        `*Режиссер*: ${film.result.rezhisser}`,
        `*Актеры*: ${film.result.aktery}`
      ].join("\n");
  }
};