import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "../Card";
import './styles.css';

export const CardContainer = ({ cardData }) => {
  const displayPeopleCards = cardData.map(data => <Card {...data} />);
  return (
    <div>
      {displayPeopleCards}
    </div>
  );
};

CardContainer.propTypes = {
  cardData: PropTypes.array
};