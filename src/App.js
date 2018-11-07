import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo deploy" alt="logo" />
          <p>
            Joseph Silverman
          </p>
          <a
            className="App-link"
            href="mailto:joseph@jsilverman.ca"
            target="_blank"
            rel="noopener noreferrer"          
          >
            joseph@jsilverman.ca
          </a>
          <a
            className="App-link"
            href="tel:+14167046000"
            target="_blank"
            rel="noopener noreferrer"
          >
            416 704 6000
          </a>
        </header>
      </div>
    );
  }
}

export default App;
