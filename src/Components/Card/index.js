import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const Card = ({toggleFavorites, data}) => {
  const { name, planet, species, population, residents, 
    terrain, climate, model, passengers, vehicleClass } = data;
  let displayResidents;
  const displayCard = (data) => {
    switch (planet || terrain || model) {
      case planet:
        return (
          <div>
            <h2 className='title'>{name}</h2>
            <h2>Homeworld: {planet}</h2>
            <h2>Population: {population}</h2>
            <h2>Species: {species}</h2>
          </div>
        );
      case terrain:
        displayResidents = residents.map((resident, index) =><li key={index}>{resident}</li>);
        return (
          <div>
            <h2 className='title'>{name}</h2>
            <h2>Terrain: {terrain}</h2>
            <h2>Population: {population}</h2>
            <h2>Climate: {climate}</h2>
            <h2>Residents:<ul>{displayResidents}</ul></h2>
          </div>
        );
      case model:
        return (
          <div>
            <h2 className='title'>{name}</h2>
            <h2>Model: {model}</h2>
            <h2>Passengers: {passengers}</h2>
            <h2>Class: {vehicleClass}</h2>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className='card' onClick={() => toggleFavorites(data)}>
      {displayCard(data)}
    </div>
  );
};

Card.propTypes = {
  toggleFavorites: PropTypes.func,
  data: PropTypes.object
};
