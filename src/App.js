import React from 'react';
import './App.css';

import axios from 'axios'

function App() {

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
