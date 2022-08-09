import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom'

import Routers from './Routers';

// Importa as alterações do App.css
import './App.css';

function App() {

  return (
    <BrowserRouter>

      <Header />
      <Routers />
      <Footer />

    </BrowserRouter>
  );

}

export default App;