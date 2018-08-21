
import React, { Component } from 'react';
import './styles.css';
import { filmDataCall } from '../../data/apiFetchCall';
import { IntroContainer } from '../IntroContainer';

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
    const displayData = filmData.length ? <IntroContainer filmData={filmData} /> : <h1>place holder</h1>;
    return (
      <div className="App">
        {displayData}
      </div>
    );
  }
}

export default App;
