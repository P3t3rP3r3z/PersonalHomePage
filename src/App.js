import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe';
import Clock from './components/Clock';

let time = new Date().toLocaleString();

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

render() {
    return (
      <div className="App">
      <Clock/>
       
        
      </div>
    );
  }
}

export default App;
