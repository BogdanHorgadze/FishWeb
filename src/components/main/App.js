import React from 'react';
import { Router } from '../Router/Router';
import { Header } from '../Header/Header'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <Router />
      </div>
    </div>
  );
}

export default App;
