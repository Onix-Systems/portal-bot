export default {
  GREET: `
Привет! Это бот для кинотеатра [Портал](http://portalcinema.com.ua/)

*Адрес*:
г. Кропивницкий (Кировоград)
ул. 50 Лет Октября 1-А

*Контакты*:
+38 095 25-75-233
+38 0522 33-26-03

Разработан в [Onix-Systems](http://onix-systems.com/)
`,

  FILM: film => (`
*${film.result.info.title}*

*Даты показа*: ${film.date_anonce.join('')} - ${film.date_close.join('')}
*Формат*: ${film.result.format}
*Жанры*: ${film.result.zhanr.join(' ')}
*Год*: ${film.result.god}
*Страна*: ${film.result.strana}
*Длительность*: ${film.result.dlitelnost_min}
*Режиссер*: ${film.result.rezhisser}
*Актеры*: ${film.result.aktery}
`),

  ERROR: '😔 Произошла ошибка'
}