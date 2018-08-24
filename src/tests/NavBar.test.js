import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../Components/NavBar/index.js';

describe('NavBar', () => {
  let wrapper;
  let mockClick;
  let mockFavoritesLength;
  let mockSelected;
  
  beforeEach(() => {
    mockClick = jest.fn();
    mockSelected = 'a button';
    mockFavoritesLength = 3;
    wrapper = shallow(
      <NavBar 
        handClick={mockClick}
        favoritesLength={mockFavoritesLength}
        selectedButton={mockSelected}
      />);
  });

  it('renders the NavBar with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
