import React, { Component } from 'react';
import './styles.css';
import { filmDataCall } from '../../data/apiFetchCall'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filmData: []
    }
  }

componentDidMount() {
  this.retrieveFilmData()
}

retrieveFilmData = async () => {
  const filmData = await filmDataCall()
  this.setState({
    filmData
  })
}

  render() {
    return (
      <div className="App">
        <h1>THIS WORKS</h1>
      </div>
    );
  }
}

export default App;