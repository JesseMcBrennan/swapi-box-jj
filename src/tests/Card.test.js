import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../Components/Card/index.js';

describe('Card', () => {
  let wrapper;
  let mockData;
  let mockToggleFavorites;
  beforeEach(() => {
    mockData = {key:'value', key2:'value'};
    mockToggleFavorites = jest.fn();
    wrapper = shallow(
      <Card 
        data={mockData}
        toggleFavorites={mockToggleFavorites}
      />);
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('the list items should change depending on what card is rendering', () => {
    mockPerson = {name: "Luke Skywalker", planet: "Tatooine", species: "Human", population: "200000"}

    const mockEvent = {target:{name: 'people'}}

    wrapper.find('[name="people"]').simulate('click', mockEvent)



  })

});
