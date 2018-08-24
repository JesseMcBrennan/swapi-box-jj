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
});
