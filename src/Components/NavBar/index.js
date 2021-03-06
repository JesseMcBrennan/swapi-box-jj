import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const NavBar = ({ handleClick, selectedButton, favoritesLength }) => {
  const click = (event) => handleClick(event.target.name);
  return (
    <div className="navBar" >
      <h1 className='header'>SWAPI-Box</h1>
      <div className="buttons-container">
        <button 
          onClick={click} 
          name='people' 
          className={selectedButton === 'people' ? 'selected' : 'unselected'}
        >People</button>
        <button 
          onClick={click} 
          name='planets' 
          className={selectedButton === 'planets' ? 'selected' : 'unselected'}
        >Planets</button>
        <button 
          onClick={click} 
          name='vehicles' 
          className={selectedButton === 'vehicles' ? 'selected' : 'unselected'}
        >Vehicles</button>
        <button 
          onClick={click} 
          name='favorites' 
          className={selectedButton === 'favorites' ? 'selected' : 'unselected'}
        >{`Favorites: ${favoritesLength}`}</button>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  handleClick: PropTypes.func,
  selectedButton: PropTypes.string,
  favoritesLength: PropTypes.number
};