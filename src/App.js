import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import NavBar from './components/NavBar';
import ContentComponent from './components/Content';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <HeaderComponent />
        <ContentComponent />
      </header>
    </div>
  );
}

export default App;
