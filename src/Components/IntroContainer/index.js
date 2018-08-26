import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const IntroContainer = ({ filmData }) => {
  const {crawl, title, releaseDate} = filmData;

  return (
    <div className='target'>
      <div className="introContainer">
        <h1>{title}</h1>
        <p>{crawl}</p>
        <h2>{releaseDate}</h2>
      </div>
    </div>
  );
}; 

IntroContainer.propTypes = {
  filmData: PropTypes.object
};