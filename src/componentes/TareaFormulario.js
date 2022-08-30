import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState('');


// MANEJAR CAMBIO me va a capturar el valor del input de texto que ingresa el usuario, al cual le paso el evento onchange como argumento
                    // evento == onChange
    const manejarCambio = evento =>{

    //con target.value saco el valor del campo de texto que ingreso el usuario
        setInput(evento.target.value);
    }


// MANEJAR ENVIO funcion que llamamos para enviar el formulario
    const manejarEnvio = evento =>{
        const tareaNueva ={
            //uuidv4(); genera un id unico
            id: uuidv4(),
            texto: input,
            completada: false
        }
        //onSubmit va a ser una funcion del prop, al cual le paso como argumento la nueva tarea
        props.onSubmit(tareaNueva);
    }

 

    return (
        <form className='tarea-formulario' onSubmit={e => e.preventDefault()}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button onClick={manejarEnvio}>
                <AiOutlinePlusCircle className='icono-boton' />
            </button>
        </form>
    );
}

export default TareaFormulario;