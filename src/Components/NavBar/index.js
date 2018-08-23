import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const NavBar = ({ handleClick, selectedButton }) => {
  const click = (event) => handleClick(event.target.name);
  return (
    <div className="navBar" >
      <button 
        onClick={click} 
        name='people' 
        className={selectedButton === 'people' ? 'selected' : 'unselected'}
      >People</button>
      <button 
        onClick={click} 
        name='vehicles' 
        className={selectedButton === 'vehicles' ? 'selected' : 'unselected'}
      >Vehicles</button>
      <button 
        onClick={click} 
        name='planets' 
        className={selectedButton === 'planets' ? 'selected' : 'unselected'}
      >Planets</button>
      <button 
        onClick={click} 
        name='favorites' 
        className={selectedButton === 'favorites' ? 'selected' : 'unselected'}
      >Favorites</button>
    </div>
  );
};

NavBar.propTypes = {
  handleClick: PropTypes.func,
  selectedButton: PropTypes.string
};