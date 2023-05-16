import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Header/>} />
      </Routes>
    </div>
  );
}

export default App;
