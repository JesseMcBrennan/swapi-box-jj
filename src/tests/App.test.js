import React from 'react';
import { shallow } from 'enzyme';
import App from '../Components/App';
import CardContainer from '../Components/CardContainer';
import { mockMovieData } from '../data/__mocks__/api-call';
import { mockCleanedFilmData } from '../data/__mocks__/data-cleaner';

describe('App', () => {
  let wrapper;
  let mockFavorite;

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockFavorite = {
      Homeworld: 'Tatooine',
      Population: 200000,
      Species: 'Human'

    };
  });

  it('renders the App with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call retrieveFilmData when componentDidMount is invoked', async () => {
    // const spy = jest.spyOn(wrapper.instance(), 'retrieveFilmData');
    // await wrapper.instance().componentDidMount();
    // expect(spy).toHaveBeenCalled();
  });

  it('should update state with filmData when retrieveFilmData is called', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovieData)
      }));
    await wrapper.instance().retrieveFilmData();
    expect(wrapper.state('filmData')).toEqual(mockCleanedFilmData);
  });

  it('adds a favorite to the state.favoritesData', () => {
    wrapper.instance().toggleFavorites(mockFavorite);
    const actualState = wrapper.instance().state;
    expect(actualState.favoritesData.length).toEqual(1);
  });

  it('removes a favorite to the state.favorites', () => {
    wrapper.instance().toggleFavorites(mockFavorite);
    const previousState = wrapper.instance().state;
    expect(previousState.favoritesData.length).toEqual(1);

    wrapper.instance().toggleFavorites(mockFavorite);
    const actualState = wrapper.instance().state;
    expect(actualState.favoritesData.length).toEqual(0);
  });

  describe('displaySelection tests', () => {
    it('should return a CardContainer with peopleData', () => {
      const mockState = { filmData: {},
        peopleData: [],
        vehicleData: [],
        planetData: [],
        favoritesData: [],
        cardsToDisplay: '' };

      wrapper.instance().displaySelection('people');
      const actualState = wrapper.instance().state;

      expect(actualState).toEqual(mockState);
    });
  });
});
