import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "../Card";
import './styles.css';

export const CardContainer = ({ cardsData, toggleFavorites }) => {
  const displayPeopleCards = cardsData.map((data, index) => (
    <Card  
      data={data}
      toggleFavorites={toggleFavorites}
      key={index}
    />)
  );

  return (
    <div className='card-container'>
      {displayPeopleCards}
    </div>
  );
};

CardContainer.propTypes = {
  cardsData: PropTypes.array,
  toggleFavorites: PropTypes.func
};
