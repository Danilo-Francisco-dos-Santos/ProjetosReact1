import styled from 'styled-components';

export const AreaHeader = styled.div`
    // Tamanho do Header
    height: 60px;
    // Cor do fundo
    background-color: #791E94;
    // Cor do texto
    color: #fff;

    .container{
        /* Espaçamento 5px na vertical e 20 na horizontal */
        padding: 5px 20px;
        
        display: flex;
        
        /* Alinha os itens header no centro na horizontal */
        align-items: center;
    }

    .logo{
        flex: 1;
    }

    nav{
        ul{
            display: flex;
        }

        li{
            list-style: none;
            margin-left: 20px;
        }
    }

`;

