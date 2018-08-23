import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "../Card";
import './styles.css';

export const CardContainer = ({ cardData, addFavorite }) => {
  const displayPeopleCards = cardData.map((data, index) => 
    <Card 
      {...data} 
      addFavorite={this.addFavorite}
      key={index}
    />);
  return (
    <div>
      {displayPeopleCards}
    </div>
  );
};

CardContainer.propTypes = {
  cardData: PropTypes.array
};