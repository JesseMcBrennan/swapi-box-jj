export const getFilmData = async (url) => {
  const response = await fetch(url);
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
  const response = await fetch(url);
  const rawPeopleData = await response.json();
  return await cleanPeopleData(rawPeopleData.results);
};

const cleanPeopleData = async (rawPeopleData) => {
  const unresolvedPromiseArray = rawPeopleData.map(async person => {
    const name = person.name;
    const worldUrl = person.homeworld;
    const speciesUrl = person.species[0];
    const receivedWorldData = await getWorldData(worldUrl);
    const receivedSpeciesData = await getSpeciesData(speciesUrl);
    const peopleObj = {name, ...receivedWorldData, ...receivedSpeciesData};
    return peopleObj;
  });
  return await Promise.all(unresolvedPromiseArray);
};

const getWorldData = async (worldUrl) => {
  const response = await fetch(worldUrl);
  const worldData = await response.json();
  const planet = worldData.name;
  const population = worldData.population;
  return {planet, population};
};

const getSpeciesData = async (speciesUrl) => {
  const response = await fetch(speciesUrl);
  const speciesData = await response.json();
  const species = speciesData.name;
  return {species};
};

export const getPlanetData = async (url) => {
  const response = await fetch(url);
  const rawPlanetData = await response.json();
  return cleanPlanetData(rawPlanetData);
};

const cleanPlanetData = async (rawPlanetData) => {
  const planetData = rawPlanetData.results.map(async planet => {
    const name = planet.name;
    const climate = planet.climate;
    const population = planet.population;
    const terrain = planet.terrain;
    const residentsArray = planet.residents.map(async residentUrl => {
      return await getResident(residentUrl);
    });
    const residents = await Promise.all(residentsArray);
    return {name, terrain, climate, population, residents};
  });
  return await Promise.all(planetData);
};

const getResident = async (residentUrl) => {
  const response = await fetch(residentUrl);
  const rawData = await response.json();
  const residentName = rawData.name;
  return residentName;
};

export const getVehicleData = async (url) => {
  const response = await fetch(url);
  const rawVehicleData = await response.json();
  return await cleanVehicleData(rawVehicleData);
};
  
const cleanVehicleData = (rawVehicleData) => {
  return rawVehicleData.results.map(vehicle => {
    const name = vehicle.name;
    const model = vehicle.model;
    const passengers = vehicle.passengers;
    const vehicleClass = vehicle.vehicle_class;
    return { name, model, passengers, vehicleClass };
  });
};

