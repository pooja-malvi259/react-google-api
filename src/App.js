import React, { Component } from 'react';
import ReactMap from './component/ReactMap';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>Google Maps here</p>
      <ReactMap />
      </div>
    );
  }
}

export default App;
