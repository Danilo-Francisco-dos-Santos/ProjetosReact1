import React from "react";

// Puxa styled dentro pasta Header
import { AreaHeader } from './styled';

function Header() {
    return (

        <AreaHeader>
            <div className="container">
                <div className="logo">
                    LogoMarca
                </div>

                <nav>
                    <ul>
                        <li>Configurações</li>
                        <li>Sair</li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>

        // <div>
        //     Topo do site
        // </div>
    );
}

export default Header;