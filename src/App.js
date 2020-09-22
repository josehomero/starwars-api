import React from 'react';

import Header from './components/Header';
import CharTable from './components/CharTable'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  async getCharacterData() {
    const data = await fetch("https://swapi.dev/api/people/").then(response => 
    response.json());

    for (const character of data.results) {
      const planetURL = character.homeworld.replace("http", "https")
      const planetData = await fetch(planetURL).then((response) => response.json())
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
      characters: [...data.results]
    })
  }

  componentDidMount() {
    this.getCharacterData()
  }

  render() {
    return (
      <div>
        <Header />
        <CharTable characters={this.state.characters}/>
      </div>
    )
  }
}

export default App;
