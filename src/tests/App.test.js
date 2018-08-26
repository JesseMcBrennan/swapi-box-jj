import React from 'react';
import { shallow } from 'enzyme';
import App from '../Components/App';
import CardContainer from '../Components/CardContainer';
import { mockMovieData } from '../data/__mocks__/api-call';
import { mockCleanedFilmData } from '../data/__mocks__/data-cleaner';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
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

  describe('displaySelection tests', () => {
    it('should return a CardContainer with peopleData', () => {
      // const mockPeopleData = [{key1 : 'value'}, {key2 : 'value'}];
      // const mockToggleFavorites = jest.fn();
      // const mockCardsToDisplay = 'people';
      // const result = wrapper.instance().displaySelection(mockCardsToDisplay);
      // const expected = shallow(
      //   <CardContainer 
      //     cardsData={mockPeopleData} 
      //     toggleFavorites={mockToggleFavorites}
      //   />);
      // expect(wrapper.find(CardContainer).prop('cardsData')).toEqual(wrapper.instance().displaySelection);
    });
  });
});
