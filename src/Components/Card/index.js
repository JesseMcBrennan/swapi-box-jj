import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const Card = ({
  selected,
  name,
  species,
  population,
  planet,
  terrain,
  climate,
  residents,
  model,
  passengers,
  vehicleClass
}) => {
  switch (selected) {
    case 'people':
      return (
        <div className='card' onClick={console.log('')}>
          <h2>{name}</h2>
          <h2>Homeworld: {planet}</h2>
          <h2>Species: {species}</h2>
          <h2>Population: {population}</h2>
        </div>
      );
    case 'planets':
      const displayResidents = residents.map(resident =><li>{resident}</li>);
      return (
        <div className='card' onClick={console.log('')}>
          <h2>{name}</h2>
          <h2>Terrain: {terrain}</h2>
          <h2>Population: {population}</h2>
          <h2>Climate: {climate}</h2>
          <h2>Residents:<ul>{displayResidents}</ul></h2>
        </div>
      );
    case 'vehicles':
      return (
        <div className='card' onClick={console.log('')}>
          <h2>{name}</h2>
          <h2>Model: {model}</h2>
          <h2>Passengers: {passengers}</h2>
          <h2>Class: {vehicleClass}</h2>
        </div>
      );
    case 'favorites':
      return (
        <div className='card' onClick={console.log('')}>
          <h1>put favorites here</h1>
        </div>
      );
    default:
      break;
  }
};

Card.propTypes = {
  selected: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.string,
  planet: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  model: PropTypes.string,
  passengers: PropTypes.string,
  vehicleClass: PropTypes.string
};
