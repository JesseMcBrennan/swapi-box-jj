import React from 'react';
import { shallow } from 'enzyme';

import { NavBar } from '../Components/NavBar/index.js'

describe('NavBar', () => {
  let wrapper;
  let mockClick;
  let mockFavorites;
  let mockSelected;

  beforeEach(() => {
    mockClick = jest.fn()
    mockSelected = 'a button'
    mockFavorites = ['something']
    wrapper = shallow(
      <NavBar 
        handClick={mockClick}
        favoritesLength={mockFavorites}
        selectedButton={mockSelected}
      />)


  })

  it('renders the NavBar with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  })
})