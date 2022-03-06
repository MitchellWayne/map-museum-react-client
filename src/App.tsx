import React from 'react';
import { HashRouter, Routes } from "react-router-dom";

import Map from './Map'
import NoteForm from './NoteForm'

import './App.css';

// Note for later
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Routes>
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
