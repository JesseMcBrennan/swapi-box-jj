import React, { Component } from 'react';
import loadingDroid from '../../loading.gif';
import { getFilmData, getPeopleData, getVehicleData, getPlanetData } from '../../data/apiFetchCall';
import { IntroContainer } from '../IntroContainer';
import { CardContainer } from '../CardContainer';
import { NavBar } from '../NavBar';
import './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmData: [],
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
    this.setState({filmData});
  }

  addFavorite = () => {
    console.log('hi')
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
    const displayFilmCrawl = filmData.length ? <IntroContainer filmData={filmData} /> 
      : <img src={loadingDroid} />;
    switch (cardsToDisplay) {
      case 'people':
        return (
          <CardContainer 
            cardData={peopleData} 
            addFavorite={this.addFavorite}
            selected={cardsToDisplay} 
          />)
      case 'vehicles':
        return (
          <CardContainer 
            cardData={vehicleData} 
            addFavorite={this.addFavorite}
            selected={cardsToDisplay} 
          />)
      case 'planets':
        return (
          <CardContainer 
            cardData={planetData} 
            addFavorite={this.addFavorite}
            selected={cardsToDisplay} 
          />)
      case 'favorites':
        return (
          <CardContainer 
            cardData={favoritesData} 
            addFavorite={this.addFavorite}
            selected={cardsToDisplay} 
          />)
      default:
        return <div>{displayFilmCrawl}</div>;
    }
  }

  render() {
    const { cardsToDisplay } = this.state;
    return (
      <div className="App">
        <h1 className='header'>SWAPI-Box</h1>
        <NavBar handleClick={this.handleClick} selectedButton={cardsToDisplay}/>
        {this.displaySelection(cardsToDisplay)}
      </div>
    );
  }
}

export default App;
