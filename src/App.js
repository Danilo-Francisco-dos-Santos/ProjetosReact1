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

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.id,
      name: u.displayName,
      avatar: u.photoURL
    }

    setUser(newUser);
  }

  // verifica se existe um usuario já criado se for vazio exibe a tela de login
  if (user === null) {
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} />
    );
  }

  return (
    <BrowserRouter>

      <Header user={user} />
      <Routers />
      <Footer />

    </BrowserRouter>
  );

}

export default App;