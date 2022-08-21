import styled from "styled-components";

// Estilização do Botão do Login
export const BtnDefatultIcons = styled.button`

    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;

&:hover{
    background-color: #ccc;
}

`;

// Copia a estilização do botão de cima
export const BtnEntrar = styled(BtnDefatultIcons)`
    background-color: #7d2ae8;
    color: #fff;
    display: inline;

    &:hover{
        background-color: #4e129c;
    }

`;

export const BtnComeceAgora = styled(BtnDefatultIcons)`
    background-color: #7d2ae8;
    color: #fff;
    display: inline;

    &:hover{
        background-color: #4e129c;
    }

`;