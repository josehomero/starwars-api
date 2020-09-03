import React from 'react';
import './App.css';

import Header from './components/Header';
import Table from './components/Table'

import axios from 'axios'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }



  render() {
    return(
      <div>
        <Header />
        <Table />
      </div>
    )
  }
}

export default App;
