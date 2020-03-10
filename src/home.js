import React from 'react';

import * as data from './data';
import Lista from './lista';
import ListaUsuarios from './components/listaUsuarios';
import Carousel from './components/carousel';

const Home = () => {
    const notas_mayores_30 = data.notas.filter((nota) => {
        return nota > 30;
    });
    const lista_notas = notas_mayores_30.map((nota, i) => {
        return <li key={i} className="list-group-item">{nota}</li>
    });

    const lista_materias = data.materias.map((materia, i) => {
        return <li key={i} className="list-group-item">{materia}</li>
    });
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <i className="fab fa-html5 fa-5x"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <p className="text-light">Welcome to Webpack, Bootstrap and ReactJS</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Carousel />
                    </div>
                    <div className="col-md-6">
                        <Carousel />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ListaUsuarios usuarios={data.usuarios} />
                        <br />
                        <Lista lista={lista_notas} />
                        <br />
                        <Lista lista={lista_materias} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;