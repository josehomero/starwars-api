import React from 'react';
import './App.css';

import Header from './components/Header';
import Table from './components/Table'

import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      character:{}
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
}

  render() {
    return(
      <div>
        <Header />
        <Table characters={this.state.character} />
      </div>
    )
  }
}

export default App;
