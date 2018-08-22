export const getFilmData = async (url) => {
  const filmUrl = "https://swapi.co/api/films/";
  const response = await fetch(filmUrl);
  const rawFilmData = await response.json();
  const cleanedData = await cleanFilmData(rawFilmData.results);
  return cleanedData;
};

const cleanFilmData = (rawFilmData) => {
  return rawFilmData.map(film => ({
    title: film.title,
    crawl: film.opening_crawl,
    releaseDate: film.release_date
  }));
};

export const getPeopleData = async (url) =>{
  const peopleUrl = "https://swapi.co/api/people/"
  const response = await fetch(peopleUrl);
  const rawPeopleData = await response.json();
  return await cleanPeopleData(rawPeopleData.results);
}

const cleanPeopleData = async (rawPeopleData) => {
  const unresolvedPromiseArray = rawPeopleData.map(async person => {
    const name = person.name
    const worldUrl = person.homeworld;
    const speciesUrl = person.species[0];
    const receivedWorldData = await getWorldData(worldUrl);
    const receivedSpeciesData = await getSpeciesData(speciesUrl);
    const peopleObj = {name,...receivedWorldData,...receivedSpeciesData};
    return peopleObj;
  })
  return await Promise.all(unresolvedPromiseArray)
}

const getWorldData = async (worldUrl) => {
  const response = await fetch(worldUrl);
  const worldData = await response.json();
  return {
    planet: worldData.name,
    population: worldData.population
  }
}

const getSpeciesData = async (speciesUrl) => {
  const response = await fetch(speciesUrl);
  const speciesData = await response.json();
  return {
    species: speciesData.name
  }
}
