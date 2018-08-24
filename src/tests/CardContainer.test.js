import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from '../Components/CardContainer';

describe('CardContainer', () => {
  let wrapper;
  let mockCardsData;
  let mockToggleFavorites;

  beforeEach(() => {
    mockCardsData = [{cardInfo: 'card value'}, {cardInfo: 'card value'}];
    mockToggleFavorites = jest.fn();
    wrapper = shallow(
      <CardContainer 
        cardsData={mockCardsData} 
        toggleFavorites={mockToggleFavorites}
      />);
  });

  it('renders the CardContainer with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
