import { TODAY_IN_THE_CINEMA } from '../i18n/constants';
import i18n from '../i18n';

export default films => [
  `*${i18n(TODAY_IN_THE_CINEMA)}*`,
  ...films
    .map(
      film => [
        `*${film.result.info.title}*:`,
        film.seance
          .map(seance =>
            seance === (Array.isArray(film.time) && film.time.join('')) ?
              `*${seance}*` :
              seance
          ).join(', ')
      ].join(' ')
    )
].join("\n\n");