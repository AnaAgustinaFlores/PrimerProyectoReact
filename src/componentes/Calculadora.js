import React from 'react';
import '../hojas-de-estilo/Calculadora.css'
import BotonCalculadora from './BotonCalculadora';
import BotonClear from './BotonClear';
import Pantalla from './Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculadora() {
//valor de la pantalla | 
    const [input, setInput] = useState('');

    const inputPantalla = valor =>{
        //input de la pantalla concatenado con el nuevo
        setInput(input + valor);
    };

    const calcularResultado = () => {
    //la cadena de caracteres esta vacia es falsa, y si no esta vacia es verdadera
        if(input){
            setInput(evaluate(input))
        }else{
            setInput('Por favor, ingrese valores')
        }
    };

    return (
        <div className='contenedor-calculadora'>
            <Pantalla input={input}/>
            <div className='fila'>
                <BotonCalculadora manejarClick={inputPantalla}>
                    1
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    2
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    3
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    +
                </BotonCalculadora>
            </div>
            <div className='fila'>
                <BotonCalculadora manejarClick={inputPantalla}>
                    4
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    5
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    6
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    -
                </BotonCalculadora>
            </div>
            <div className='fila'>
                <BotonCalculadora manejarClick={inputPantalla}>
                    7
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    8
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    9
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    *
                </BotonCalculadora>
            </div>
            <div className='fila'>
                <BotonCalculadora manejarClick={calcularResultado}>
                    =
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    0
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    .
                </BotonCalculadora>
                <BotonCalculadora manejarClick={inputPantalla}>
                    /
                </BotonCalculadora>
            </div>
            <div className='fila'>
                <BotonClear manejarClear={() => setInput('')}>
                    Clear
                </BotonClear>
            </div>
        </div>
    );
}

export default Calculadora;