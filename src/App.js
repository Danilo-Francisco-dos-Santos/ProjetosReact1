// Importou o useState
import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./pages/Login";

import { BrowserRouter } from 'react-router-dom'

import Routers from './Routers';

// Importa as alterações do App.css
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  // verifica se existe um usuario já criado se for vazio exibe a tela de login
  if (user === null) {
    return (
      <Login />
    );
  }

  return (
    <BrowserRouter>

      <Header />
      <Routers />
      <Footer />

    </BrowserRouter>
  );

}

export default App;