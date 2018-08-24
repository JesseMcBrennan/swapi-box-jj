import React from 'react';
import { shallow } from 'enzyme';
import { IntroContainer } from '../Components/IntroContainer';

describe('IntroContainer', () => {
  let wrapper;
  let mockFilmData;

  beforeEach(() => {
    mockFilmData = {filmInfo: 'film value'};
    wrapper = shallow(
      <IntroContainer
        filmData={mockFilmData}
      />);
  });

  it('renders the IntroContainer with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
