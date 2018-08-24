import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const IntroContainer = ({ filmData }) => {
  const {crawl, title, releaseDate} = filmData;

  return (
    <div className='target'>
      <div className="introContainer">
        <p>{crawl}</p>
        <h1>{title}</h1>
        <h2>{releaseDate}</h2>
      </div>
    </div>
  );
}; 

IntroContainer.propTypes = {
  filmData: PropTypes.object
};