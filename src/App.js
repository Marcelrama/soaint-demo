import React from 'react';

import Header from './components/Header';
import ProductList from './services/ProductList';
import Nav from './components/Nav';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Nav/>
      <div className="container">
         <ProductList/>
      </div>
      
    </div>

  );
}

export default App;
