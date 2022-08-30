import React from 'react';
import '../hojas-de-estilo/ListaDeTareas.css'
import TareasYFormulario from './TareasYFormulario';

function ListaDeTareas(props) {
    return (
        <div className='contenedor-lista-tareas'>
            <h1>Mis Tareas</h1>
            <TareasYFormulario/>
        </div>
        
    );
}

export default ListaDeTareas;