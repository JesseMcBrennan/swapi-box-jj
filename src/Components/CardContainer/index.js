import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "../Card";
import './styles.css';

export const CardContainer = ({ cardData, selected }) => {
  const displayPeopleCards = cardData.map(data => (
    <Card 
      key={Date.now() * Math.random()} 
      {...data} 
      selected={selected} 
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