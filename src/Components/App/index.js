import React, { Component } from 'react';
import loadingGif from '../../loading-droid.gif';
import { getFilmData, getPeopleData, getVehicleData, getPlanetData } from '../../data/apiFetchCall';
import { IntroContainer } from '../IntroContainer';
import { CardContainer } from '../CardContainer';
import { NavBar } from '../NavBar';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmData: {},
      peopleData: [],
      vehicleData: [],
      planetData: [],
      favoritesData: [],
      cardsToDisplay: ''
    };
  }

  componentDidMount() {
    this.retrieveFilmData();
  }

  retrieveFilmData = async () => {
    const filmUrl = "https://swapi.co/api/films/";
    const filmData = await getFilmData(filmUrl);
    const randomNumber = Math.floor(Math.random() * (7));
    const randomFilmData = filmData[`${randomNumber}`];
    this.setState({filmData: randomFilmData});
  }

  toggleFavorites = (data) => {
    const { favoritesData } = this.state;
    if (favoritesData.length) {
      const favoriteNames = favoritesData.map(favorite => favorite.name);
      if (favoriteNames.includes(data.name)) {
        const filteredFavorites = favoritesData.filter(
          cardData => cardData.name !== data.name);
        this.setState({favoritesData: filteredFavorites});
      } else {
        this.setState({favoritesData: [data, ...favoritesData]});
      }
    } else {
      this.setState({
        favoritesData: [data]
      });
    }
  }

  handleClick = async (selectedData) => {
    const peopleUrl = "https://swapi.co/api/people/";
    const vehicleUrl = "https://swapi.co/api/vehicles/";
    const planetUrl = "https://swapi.co/api/planets/";
    const peopleData = await getPeopleData(peopleUrl);
    const vehicleData = await getVehicleData(vehicleUrl);
    const planetData = await getPlanetData(planetUrl);
    const favoritesData = this.state.favoritesData;
    switch (selectedData) {
      case 'people':
        this.setState({peopleData, cardsToDisplay: selectedData});
        break;
      case 'vehicles':
        this.setState({vehicleData, cardsToDisplay: selectedData});
        break;
      case 'planets':
        this.setState({planetData, cardsToDisplay: selectedData});
        break;
      case 'favorites':
        this.setState({favoritesData, cardsToDisplay: selectedData});
        break;
      default:
        break;
    }
  }

  displaySelection(cardsToDisplay) {
    const { filmData, peopleData, vehicleData, planetData, favoritesData } = this.state;
    const displayFilmCrawl = filmData.crawl ? <IntroContainer filmData={filmData} /> 
      : <img className='loading-gif' src={loadingGif} />;
    switch (cardsToDisplay) {
      case 'people':
        return (
          <CardContainer 
            cardsData={peopleData} 
            toggleFavorites={this.toggleFavorites}
          />);
      case 'vehicles':
        return (
          <CardContainer 
            cardsData={vehicleData} 
            toggleFavorites={this.toggleFavorites}
          />);
      case 'planets':
        return (
          <CardContainer 
            cardsData={planetData} 
            toggleFavorites={this.toggleFavorites}
          />);
      case 'favorites':
        return (
          <CardContainer 
            cardsData={favoritesData} 
            toggleFavorites={this.toggleFavorites}
          />);
      default:
        return <div>{displayFilmCrawl}</div>;
    }
  }

  render() {
    const { cardsToDisplay, favoritesData } = this.state;
    const favoritesLength = favoritesData.length;
    return (
      <div className="App">
        <NavBar 
          handleClick={this.handleClick}
          favoritesLength={favoritesLength}
          selectedButton={cardsToDisplay}
        />
        {this.displaySelection(cardsToDisplay)}
      </div>
    );
  }
}

export default App;
