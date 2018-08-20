
export const filmDataCall = async (url) => {
const filmUrl = "https://swapi.co/api/films/"
  const response = await fetch(filmUrl)
  const rawFilmData = await response.json()
  const cleanedData = await cleanFilmData(rawFilmData.results)
  return cleanedData
  }


const cleanFilmData = (rawFilmData) => {
   return rawFilmData.map(film => ({
        title: film.title,
        crawl: film.opening_crawl,
        releaseDate: film.release_date
      })
   )
}


