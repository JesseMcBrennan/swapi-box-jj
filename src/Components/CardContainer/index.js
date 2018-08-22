import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "../Card";
import './styles.css';

export const CardContainer = ({ peopleData, planetData, vehicleData, favoritesData }) => {
  // const displayPeopleCards = peopleData.map(person => <Card {...person} />);

  return (
    <div>
   {/*   {displayPeopleCards}*/}
    </div>
  );
};

CardContainer.propTypes = {
  peopleData: PropTypes.array
};