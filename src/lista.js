import React from 'react';

const Lista = (props) => {
    return (
        <ul className="list-group">
            {props.lista}
        </ul>
    );
}

export default Lista;