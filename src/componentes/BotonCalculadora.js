import React from 'react';
import '../hojas-de-estilo/BotonCalculadora.css'

function BotonCalculadora(props) {

    const esOperador = valor => {

        return isNaN(valor) && (valor != '.') && (valor != '=');
    }
    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ""}`.trimEnd()}
        //funcion anonima, una funcion que solo va a ejecutarse una sola vez
        //el onClick (event listener) que es una funcion que va a retornar una nueva funcion
        //necesita los parentesis y el => para que el event listener sepa que queremos que se llame a una funcion
            onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
}

export default BotonCalculadora;