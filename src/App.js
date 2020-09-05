import React from 'react';
import './App.css';

import Header from './components/Header';
import Table from './components/Table'

import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      character:{},
      species:{},
      planet:{}
    }
  }

componentDidMount(){
  fetch("https://swapi.dev/api/people/1/")
  .then(response => response.json())
  .then(data => {
    this.setState({
      character: data
    })
  })
  fetch("https://swapi.dev/api/species/1/")
  .then(response => response.json())
  .then(data => {
    this.setState({
      species: data
    })
  })
  fetch("http://swapi.dev/api/planets/1/")
  .then(response => response.json())
  .then(data => {
    this.setState({
      planet: data
    })
  })
}

  render() {
    return(
      <div>
        <Header />
        <Table characters={this.state.character} species={this.state.species} planet={this.state.planet}/>
      </div>
    )
  }
}

export default App;
