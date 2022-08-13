import React from "react";

import { ContainerPage, TitlePage } from "../../components/Main";

// Como passar imagens para a página
const url = 'https://via.placeholder.com/150'

function pageHome() {
    return (
        <ContainerPage>
            <TitlePage>Página principal</TitlePage>
            <div>
                <img src={url} alt="Minha Imagem"></img>
            </div>
        </ContainerPage>
    );
}

export default pageHome;