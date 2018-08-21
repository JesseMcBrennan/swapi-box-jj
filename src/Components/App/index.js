import React, { Component } from 'react';
import loadingDroid from '../../loading.gif';
import './styles.css';
import { filmDataCall } from '../../data/apiFetchCall';
import { IntroContainer } from '../IntroContainer';
import { NavBar } from '../NavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      filmData: []
    };
  }

  componentDidMount() {
    this.retrieveFilmData();
  }

  retrieveFilmData = async () => {
    const filmData = await filmDataCall();
    this.setState({
      filmData
    });
  }

  render() {
    const { filmData } = this.state;
    const displayData = filmData.length ? <IntroContainer filmData={filmData} /> : <img src={loadingDroid} />;
    return (
      <div className="App">
        <h1 className='header'>SWAPI-Box</h1>
        <NavBar />
        {displayData}
      </div>
    );
  }
}

export default App;
