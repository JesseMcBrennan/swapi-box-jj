import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const Card = ({name, homeworld, species, population }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{homeworld}</h2>
      <h2>{species}</h2>
      <h2>{population}</h2>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.string
};
