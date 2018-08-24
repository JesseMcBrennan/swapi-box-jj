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

//--------------------------PEOPLE

export const getPeopleData = async (url) =>{
  const response = await fetch(url);
  const rawPeopleData = await response.json();
  return await cleanPeopleData(rawPeopleData.results);
};

const cleanPeopleData = async (rawPeopleData) => {
  const unfinishedPeople = rawPeopleData.map(async person => {
    const name = person.name;
    const species = person.species[0];
    const planet = person.homeworld;
    return {name, planet, species};
  });
  const peopleWithNames = await Promise.all(unfinishedPeople);
  
  const peopleWithHomeworld = await peopleWithNames.map(async person => {
    const worldUrl = person.planet
    const receivedWorldData = await getWorldData(worldUrl);
    return {...person, ...receivedWorldData};
  })
  const namedPeopleWithHomes = await Promise.all(peopleWithHomeworld)

  const peopleDataCompleted = await namedPeopleWithHomes.map(async person => {
    const speciesUrl = person.species
    const receivedSpeciesData = await getSpeciesData(speciesUrl);
    return {...person, ...receivedSpeciesData};
  }) 
  return await Promise.all(peopleDataCompleted)
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

//---------------------------------PLANET

export const getPlanetData = async (url) => {
  const response = await fetch(url);
  const rawPlanetData = await response.json();
  return cleanPlanetData(rawPlanetData);
};

const cleanPlanetData = async (rawPlanetData) => {
  const unfinishedPlanet = await rawPlanetData.results.map(async planet => {
    const name = planet.name;
    const climate = planet.climate;
    const population = planet.population;
    const terrain = planet.terrain;
    const residentsArray = planet.residents
    // const residentsArray = planet.residents.map(async residentUrl => {
    //   return await getResident(residentUrl);
    // });
    // const residents = await Promise.all(residentsArray);
    return {name, terrain, climate, population, residents: residentsArray};
  });
  const planetsWithoutResidents = await Promise.all(unfinishedPlanet);

  const finishedPlanets = planetsWithoutResidents.map(async planet => {
    const residents = planet.residents
    const unresolvedArray = await residents.map(async resident => getResident(resident))
    const residentsData = await Promise.all(unresolvedArray)
    return {...planet, residents: residentsData}  
  })
  return await Promise.all(finishedPlanets)
};

const getResident = async (residentUrl) => {
  const response = await fetch(residentUrl);
  const rawData = await response.json();
  const residentName = rawData.name;
  return residentName;
};

//-----------------VEHICLE

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


//pull cleaners and fetch calls in seperate files.
