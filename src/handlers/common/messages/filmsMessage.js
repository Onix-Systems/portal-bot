export default films => [
  '*Сегодня в кино*',
  ...films
    .filter(film => film.time)
    .map(
      film => {
        const time = film.time && film.time.join('');
        return [
          `*${film.result.info.title}*`,
          '-',
          film.seance
            .map(seance =>
              seance === time ? `*${seance}*` : seance
            )
            .join(', ')
        ].join(' ');
      }
    )
].join("\n\n");