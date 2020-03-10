import React from 'react';

const ListaUsuarios = props => {
    const lista_usuarios = props.usuarios.map((usuario, i) => {
        const notas = usuario.notas.map((nota, i) => {
            return <span key={i} className="badge badge-primary badge-pill">{nota}</span>
        })
        return (
            <li key={i} className="list-group-item">{usuario.name} {usuario.lastname} {notas}</li>
        )
    });
    return (
        <ul className="list-group">
            {lista_usuarios}
        </ul>
    )
}

export default ListaUsuarios;