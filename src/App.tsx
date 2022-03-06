import React from 'react';
import Map from './Map'
import NoteForm from './NoteForm'
import './App.css';

// Note for later
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <Map/>
      <NoteForm/>
    </div>
  );
}

export default App;
