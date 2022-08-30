import React from 'react';
import '../hojas-de-estilo/Tareas.css'
import { AiOutlineDelete, AiOutlineSmile, AiOutlineMeh } from 'react-icons/ai'


function Tareas({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className='tarea-texto'>
                {texto}
            </div>
            <div className='contenedor-icono'>
                <AiOutlineSmile  onClick={() => completarTarea(id)} className={ completada ? 'icono-boton esconder-icono' : 'icono-boton'} />
                < AiOutlineMeh onClick={() => completarTarea(id)} className={!completada ? 'icono-boton esconder-icono' : 'icono-boton'} />
                <AiOutlineDelete className='icono-boton' onClick={() => eliminarTarea(id)} />
            </div>
        </div>
    );
}

export default Tareas;