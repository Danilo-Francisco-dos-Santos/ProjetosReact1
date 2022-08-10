import React from "react";

// Puxa styled dentro pasta Header
import { AreaHeader } from './styled';

// Funciona como HREF do html porem sem atulizar a aplicação
import { Link } from "react-router-dom";

function Header() {
    return (

        <AreaHeader>
            <div className="container">
                <div className="logo">
                    LogoMarca
                </div>

                <nav>
                    <ul>
                        <Link to="/">
                            <li>Início</li>
                        </Link>
                        <Link to="/config">
                            <li>Configurações</li>
                        </Link>

                        <Link to="/Sair">
                            <li>Sair</li>
                        </Link>
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