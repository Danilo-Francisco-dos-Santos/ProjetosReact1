import React from "react";
import { AreaLogin } from './styled';

// Browser Router conecta o seu aplicativo ao URL do navegador
// Link adiciona alguma navegação global igual a href
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Registrar from "../Registro";

//Importa Estilização diferente para botões especificos
import { BtnDefatultIcons, BtnEntrar } from '../../components/Buttons/Styled'

// Importa os icones Font Awesome esse do Facebook
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Login() {
    return (

        <BrowserRouter>

            <Routes>
                <Route exact path="/registrar" element={<Registrar />}>
                </Route>

                {/* O conteudo a ser rederizado deve ficar dentro de element e não dentro das tags route */}
                <Route exact path="*" element={

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

                        {/* Link para se Registrar */}
                        <div className="footerLogin">
                            Não tem uma conta?
                            <Link to="/registrar">Registre-se</Link>
                        </div>

                    </AreaLogin>
                }></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default Login;