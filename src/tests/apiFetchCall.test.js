import { 
  mockCleanedFilmData, 
  mockPeopleData, 
  mockPlanetsData, 
  mockVehicleData  } from '../data/__mocks__/api-call';
import { 
  cleanFilmData, 
  cleanPeopleData, 
  cleanPlanetData, 
  cleanVehicleData } from '../data/apiFetchCall';
import { 
  mockCleanedPersonData, 
  mockCleanedPlanetData, 
  mockCleanedVehicleData } from "../data/__mocks__/data-cleaner";

describe('apiFetchCall tests', () => {
  it('should return a cleaned object of person data', async () => {
    const result = await cleanPeopleData(mockPeopleData);
    expect(result).toEqual([mockCleanedPersonData]);
  });

  it('should return a cleaned object of planet data', async () => {
    const result = await cleanPlanetData(mockPlanetsData);
    expect(result).toEqual([mockCleanedPlanetData]);
  });

  it('should return a cleaned object of vehicle data', async () => {
    const result = await cleanVehicleData(mockVehicleData);
    expect(result).toEqual([mockCleanedVehicleData]);
  });
});
