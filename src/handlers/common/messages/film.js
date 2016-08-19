export default film => `
*${film.result.info.title}*

*Даты показа*: ${film.date_anonce.join('')} - ${film.date_close.join('')}
*Формат*: ${film.result.format}
*Жанры*: ${film.result.zhanr.join(' ')}
*Год*: ${film.result.god}
*Страна*: ${film.result.strana}
*Длительность*: ${film.result.dlitelnost_min}
*Режиссер*: ${film.result.rezhisser}
*Актеры*: ${film.result.aktery}
`;