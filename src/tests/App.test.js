import React from 'react';
import { shallow } from 'enzyme';
import App from '../Components/App';

describe('NavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the App with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
