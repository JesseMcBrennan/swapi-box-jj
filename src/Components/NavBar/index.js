import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const NavBar = ({ handleClick }) => {
  const click = (event) => handleClick(event.target.name);

  return (
    <div className="navBar">
      <button onClick={click} name='people'>People</button>
      <button onClick={click} name='vehicles'>Vehicles</button>
      <button onClick={click} name='planets'>Planets</button>
      <button onClick={click} name='favorites'>favorites</button>
    </div>
  );
};

NavBar.propTypes = {
  handleClick: PropTypes.func
};