import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Config from './pages/config';
import Registrar from "./pages/Registro";

function Routers() {

    return (

        <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>

            <Route exact path='/config' element={<Config />}>
            </Route>

            <Route exact path="/registrar" element={<Registrar />}>
            </Route>
        </Routes >

    );
}

export default Routers;