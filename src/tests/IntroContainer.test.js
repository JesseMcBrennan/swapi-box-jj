import React from 'react';
import { shallow } from 'enzyme';

import { IntroContainer } from '../Components/IntroContainer/index.js'

describe('IntroContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<IntroContainer />)
  })

  it('renders the IntroContainer with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  })
})