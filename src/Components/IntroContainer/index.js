import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const IntroContainer = ({ filmData }) => {
  const randomNumber = Math.floor(Math.random() * (7));
  const displayFilmData = filmData[`${randomNumber}`];

  return (
    <div className='target'>
      <div className="introContainer">
        <p>{displayFilmData.crawl}</p>
        <h1>{displayFilmData.title}</h1>
        <h2>{displayFilmData.releaseDate}</h2>
      </div>
    </div>
  );
}; 

IntroContainer.propTypes = {
  filmData: PropTypes.object
};