import React from "react";
import { AreaLogin } from './styled';

// importa react routers dom
import { BrowserRouter, Link } from 'react-router-dom';

//Importa Estilização diferente para botões especificos
import { BtnDefatultIcons, BtnEntrar } from '../../components/Buttons/Styled'

// Importa os icones Font Awesome esse do Facebook
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Login() {
    return (

        <BrowserRouter>
            <AreaLogin>
                <h1>Faça o login em sua conta</h1>

                <BtnDefatultIcons>
                    <FaFacebookSquare />
                    <div>Fazer login com o Facebook</div>
                </BtnDefatultIcons>

                <BtnDefatultIcons>
                    <FaGoogle />
                    <div>Fazer login com o Google</div>
                </BtnDefatultIcons>

                <p>OU</p>

                <form>
                    <div className="form">
                        <label>E-mail: </label>
                        <input type="email"></input>
                    </div>

                    <div className="form">
                        <label>Senha: </label>
                        <input type="password"></input>
                    </div>

                    <BtnEntrar>
                        Entrar
                    </BtnEntrar>
                </form>

                <div className="">
                    Não tem uma conta? 
                    <Link to={"/Registrar"}>Registre-se</Link>
                </div>

            </AreaLogin>
        </BrowserRouter>
    );
}

export default Login;