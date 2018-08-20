import React from 'react';
import PropType from 'prop-types';

export const IntroContainer = ({filmData}) => {
  const randomNumber = Math.floor(Math.random() * (7));
  const displayFilmData = filmData[`${randomNumber}`];

  return (
    <div>
      <p>{displayFilmData.crawl}</p>
      <h1>{displayFilmData.title}</h1>
      <h2>{displayFilmData.releaseDate}</h2>
    </div>
  );
}; 