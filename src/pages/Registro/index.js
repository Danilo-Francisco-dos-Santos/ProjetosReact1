import React from "react";
import { AreaRegistro } from './styled';
import { BtnComeceAgora } from '../../components/Buttons/Styled';
import { Link } from "react-router-dom";

// Importa o icone do React Icons Arrows
import { IoIosArrowBack } from 'react-icons/all'

function Registrar() {
    return (
        <AreaRegistro>
            <h1 className="organize">
                <Link to="/"><IoIosArrowBack /></Link>
                Crie sua Conta
            </h1>

            <p>Crie sua conta, é gratis!</p>

            <form>
                <div className="form">
                    <label>Nome</label>
                    <input type='text' />
                </div>

                <div className="form">
                    <label>Senha</label>
                    <input type='password' />
                </div>
            </form>

            <div>
                <BtnComeceAgora>
                    Comece agora!
                </BtnComeceAgora>
            </div>

            <div className="footerLogin">
                Já tem uma conta?
                <Link to="/" >Faça login</Link>
            </div>

        </AreaRegistro>

    );
}

export default Registrar;