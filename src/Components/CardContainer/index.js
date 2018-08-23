import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "../Card";
import './styles.css';

export const CardContainer = ({ cardData, addFavorite, selected }) => {
  const displayPeopleCards = cardData.map((data, index) => (
    <Card  
      data={data}
      selected={selected} 
      addFavorite={addFavorite}
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
  cardData: PropTypes.array,
  selected: PropTypes.string
};