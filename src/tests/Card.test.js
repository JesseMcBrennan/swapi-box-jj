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

    const mockEvent = {target: {name: 'people'}};

    wrapper.find('.card').simulate('click', mockEvent);
    expect(wrapper.find('.card').length).toEqual(1); 
  });

  it('the list items should change depending on what card is rendering', () => {

    const mockEvent = {target: {name: 'vehicles'}};

    wrapper.find('.card').simulate('click', mockEvent);
    expect(wrapper.find('.card').length).toEqual(1); 
  });

  it('the list items should change depending on what card is rendering', () => {

    const mockEvent = {target: {name: 'planets'}};

    wrapper.find('.card').simulate('click', mockEvent);
    expect(wrapper.find('.card').length).toEqual(1); 
  });

  it('should call the toggleFavorites method with the correct parameters', () => {
    const mockEvent = {target: {name: 'planet'}};

    wrapper.find('.card').simulate('click', mockEvent);
    expect(mockToggleFavorites).toHaveBeenCalledWith(mockData);
  });

  it('should render the correct card depending on what button is pressed', () => {
    const mockEvent = {target: {name: 'people'}};

    wrapper.find('.card').simulate('click', mockEvent);
    expect(wrapper.find('.card').hasClass('people'));
  });

  // it('should render the correct card depending on what button is pressed', () => {
  //   const mockEvent = {target: {name: 'vehicles'}};

  //   wrapper.find('.vehicle').simulate('click', mockEvent);
  //   expect(wrapper.find('.card').hasClass('vehicles'));
  // });

});
