import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";



function Routers() {
    return (

        <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>

            <Route exact path="/config">
                Página 2
            </Route>
        </Routes>

    );
}

export default Routers;