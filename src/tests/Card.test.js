import React from 'react';
import { shallow } from 'enzyme';

import { Card } from '../Components/Card/index.js'

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  })
})