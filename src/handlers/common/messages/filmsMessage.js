export default films => [
  '*Сегодня в кино*',
  ...films
    .map(
      film => [
        `*${film.result.info.title}*`,
        '-',
        film.seance
          .map(seance =>
            seance === (Array.isArray(film.time) && film.time.join('')) ?
              `*${seance}*` :
              seance
          ).join(', ')
      ].join(' ')
    )
].join("\n\n");