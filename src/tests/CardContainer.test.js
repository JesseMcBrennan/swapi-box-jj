import React from 'react';
import { shallow } from 'enzyme';

import { CardContainer } from '../Components/CardContainer/index.js'

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer />)
  })

  it('renders the CardContainer with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  })
})