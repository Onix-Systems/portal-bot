import { PREVIEWS } from '../i18n/constants';
import i18n from '../../common/i18n';

export default films => [
  `*${i18n(PREVIEWS)}*`,
  ...films.map(
    film => [
      `*${film.result.info.title}*:`,
      film.date_anonce.join(''),
      '-',
      film.date_close.join('')
    ].join(' ')
  )
].join("\n\n");