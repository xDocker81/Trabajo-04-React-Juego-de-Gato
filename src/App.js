import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
   <Game />
  );
}

function refreshPage(){ 
  window.location.reload(); 
}


export default App;
