import React, { Component } from 'react';
import Header from './Components/Header/index';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    );
  }
}


export default App;
