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
    const filmData = await getFilmData();
    this.setState({
      filmData
    });
  }

  handleClick = async (selectedData) => {
    let peopleData;
    let vehicleData;
    let planetData;
    let favoritesData;
    switch (selectedData) {
      case 'people':
        peopleData = await getPeopleData();
        this.setState({peopleData, cardsToDisplay: selectedData});
        break;
      case 'vehicles':
        vehicleData = await getVehicleData();
        this.setState({vehicleData, cardsToDisplay: selectedData});
        break;
      case 'planets':
        planetData = await getPlanetData();
        this.setState({planetData, cardsToDisplay: selectedData});
        break;
      case 'favorites':
        favoritesData = this.state.favoritesData;
        this.setState({favoritesData, cardsToDisplay: selectedData});
        break;
      default:
        break;
    }
  }

  displaySelection(cardsToDisplay) {
    const { filmData, peopleData, vehicleData, planetData, favoritesData } = this.state;
    const displayData = filmData.length ? <IntroContainer filmData={filmData} /> 
      : <img src={loadingDroid} />;
    switch (cardsToDisplay) {
      case 'people':
        return <CardContainer peopleData={peopleData} />;
      case 'vehicles':
        return <CardContainer vehicleData={vehicleData} />;
      case 'planets':
        return <CardContainer planetData={planetData} />;
      case 'favorites':
        return <CardContainer favoritesData={favoritesData} />;
      default:
        return <div>{displayData}</div>;
    }
  }

  render() {
    const { cardsToDisplay } = this.state;
    return (
      <div className="App">
        <h1 className='header'>SWAPI-Box</h1>
        <NavBar handleClick={this.handleClick} />
        {this.displaySelection(cardsToDisplay)}
      </div>
    );
  }
}

export default App;
