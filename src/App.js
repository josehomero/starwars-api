import React from 'react';
import './App.css';

import Header from './components/Header';
import Table from './components/Table'

import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      species: {},
      planet: {}
    }
  }

  async componentDidMount() {

    const data = await fetch("https://swapi.dev/api/people/")
      .then(response => response.json());

    //loop through each character
    for (const character in data.results) {
      const speciesData = await fetch("https://swapi.dev/api/species/")
      .then(response => response.json())

      const planetData = await fetch("https://swapi.dev/api/planets/")
      .then(response => response.json())
      //get species
      //get planet
    }
    //save to state
    this.setState({
      characters: [...data.results]
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Table characters={this.state.characters} species={this.state.species} planet={this.state.planet} />
      </div>
    )
  }
}

export default App;
