import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation';
import Routes from './Routes';

function App() {
  return (
    <>
    <Navigation/>
    <div className='center'>
      <Routes/>
    </div>
    </>
  );
}

export default App;
