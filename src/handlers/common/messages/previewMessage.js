export default films => (
  [
    '*Анонсы*',
    ...films.map(
      film => [
        `*${film.result.info.title}*`,
        film.date_anonce.join(''),
        '-',
        film.date_close.join('')
      ].join(' ')
    )
  ].join("\n\n")
);