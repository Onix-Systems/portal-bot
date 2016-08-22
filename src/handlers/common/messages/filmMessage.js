import { getPoster } from '../../../services/crawler';
import { BUTTONS } from '../../../constants';
import {
  SHOW_DATES,
  FORMAT,
  GENRES,
  YEAR,
  COUNTRY,
  DURATION,
  PRODUCER,
  ACTORS,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
} from '../i18n/constants';
import i18n from '../i18n';

const DAYS = [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY];

// TODO: refactor http://goo.gl/WRAomg
const getSchedule = schedule => Object.keys(schedule)
  .map(dayNumber => schedule[dayNumber]
    .reduce((result, { price, time }) => {
      result[price] = result[price] || [];
      result[price].push(time);
      return result;
    }, {})
  ).map((seance, day) => `*${i18n(DAYS[day])}*\n${
    Object.keys(seance)
      .map(price => `${
        seance[price]
          .map(time => `\`${time}\``)
          .join(', ')
        } - ${price.replace('.', '')}`
      ).join("\n")
    }`
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

    case BUTTONS.POSTER:
      const poster = getPoster(film.main_photo);
      return [
        `*${film.result.info.title}*`,
        '',
        `[${poster}](${poster})`
      ].join("\n");

    default:
      return [
        `*${film.result.info.title}*`,
        '',
        `*${i18n(SHOW_DATES)}*: ${film.date_anonce.join('')} - ${film.date_close.join('')}`,
        `*${i18n(FORMAT)}*: ${film.result.format}`,
        `*${i18n(GENRES)}*: ${film.result.zhanr.join(' ')}`,
        `*${i18n(YEAR)}*: ${film.result.god}`,
        `*${i18n(COUNTRY)}*: ${film.result.strana}`,
        `*${i18n(DURATION)}*: ${film.result.dlitelnost_min}`,
        `*${i18n(PRODUCER)}*: ${film.result.rezhisser}`,
        `*${i18n(ACTORS)}*: ${film.result.aktery}`
      ].join("\n");
  }
};