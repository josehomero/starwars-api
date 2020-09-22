import React from 'react';
import './App.css';

import Header from './components/Header';
import CharTable from './components/CharTable'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      species: [],
      planet: []
    }
  }

  async componentDidMount() {
    let planets = [];
    let species = [];


    const data = await fetch("https://swapi.dev/api/people/").then(response => 
    response.json());

    for (const character of data.results) {
      const planetURL = character.homeworld.replace("http", "https")
      const planetData = await fetch(planetURL).then((res) => res.json())
      character.planetName = planetData.name;
      

      const speciesURL =
        character.species.length < 1 
        ? "https://swapi.dev/api/species/1/"
          : character.species[0].replace("http", "https")
      const speciesData = await fetch(speciesURL).then((response) =>
        response.json()
      )
      character.speciesName = speciesData.name;

    }

    this.setState({
      characters: [...data.results],
      planet: planets,
      species: species
    })
  }

  render() {
    return (
      <div>
        <Header />
        <CharTable characters={this.state.characters} species={this.state.species} planet={this.state.planet} />
      </div>
    )
  }
}

export default App;
