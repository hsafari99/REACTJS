import React from 'react';
import logo from '../logo.svg';
import '../Css/App.css';


function App() {
  return (
    <div className="container bg-danger">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-warning">
          Edit <code> src/App.js </code> 
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="bg-success">This is my added part </p>
      </header>
    </div>
  );
}

export default App;
