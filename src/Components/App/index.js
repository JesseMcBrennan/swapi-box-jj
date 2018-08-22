import React, { Component } from 'react';
import loadingDroid from '../../loading.gif';
import { getFilmData, getPeopleData } from '../../data/apiFetchCall';
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
      planetData: [],
      vehicleData: []
    };
  }

  componentDidMount() {
    this.retrieveFilmData();
  }

  handleClick = async (selectedButton) => {
    const peopleData = await getPeopleData();
    this.setState({
      peopleData
    });
  }

  retrieveFilmData = async () => {
    const filmData = await getFilmData();
    this.setState({
      filmData
    });
  }

  render() {
    const { filmData, peopleData } = this.state;
    const displayData = filmData.length ? 
      <IntroContainer filmData={filmData} /> 
      : <img src={loadingDroid} />;
    return (
      <div className="App">
        <h1 className='header'>SWAPI-Box</h1>
        <NavBar handleClick={this.handleClick} />
        <CardContainer peopleData={peopleData} />
        {displayData}
      </div>
    );
  }
}

export default App;
