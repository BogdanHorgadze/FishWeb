import React from 'react';
import { Router } from '../Router/Router';
import { Header } from '../Header/Header'


function App() {
  return (
    <div className='app'>
      <Router />
      <Header />
    </div>
  );
}

export default App;
