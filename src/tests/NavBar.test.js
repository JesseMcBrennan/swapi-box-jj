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
        handleClick={mockClick}
        favoritesLength={mockFavoritesLength}
        selectedButton={mockSelected}
      />);
  });

  it('renders the NavBar with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the className from people to selected when selected', () => {
    const mockEvent = {target: {name:'people'}};

    wrapper.find('[name="people"]').simulate('click', mockEvent);
    wrapper.update();
    expect(wrapper.find('[name="people"]').hasClass('selected'));

  });

  it('should change the className from vehicles to selected when selected', () => {
    const mockEvent = {target: {name:'vehicles'}};

    wrapper.find('[name="vehicles"]').simulate('click', mockEvent);
    wrapper.update();
    expect(wrapper.find('[name="vehicles"]').hasClass('selected'));
  });

  it('should change the className from planets to selected when selected', () => {
    const mockEvent = {target: {name:'planets'}};

    wrapper.find('[name="planets"]').simulate('click', mockEvent);
    wrapper.update();
    expect(wrapper.find('[name="planets"]').hasClass('selected'));
  });

  it('should change the className from people to selected when selected', () => {
    const mockEvent = {target: {name:'favorites'}};

    wrapper.find('[name="favorites"]').simulate('click', mockEvent);
    wrapper.update();
    expect(wrapper.find('[name="favorites"]').hasClass('selected'));
  });

});
