import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo(){
    return(
        <PageDefault>
            <h1>Cadastro de Video</h1>
            <Link to="/cadastro/categoria">
                <h3>Cadastrar Categoria</h3>
            </Link>
        </PageDefault>
    )

}

export default CadastroVideo;