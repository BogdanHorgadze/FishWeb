import React from 'react';
import { Router } from '../Router/Router';
import { Header } from '../Header/Header'
import { ProductListContainer } from '../ProductListContainer/ProductListContainer';


function App() {
  return (
    <div className='app'>
      <Router />
      <Header />
      <div className='content'>
        <ProductListContainer />  
      </div>
    </div>
  );
}

export default App;
