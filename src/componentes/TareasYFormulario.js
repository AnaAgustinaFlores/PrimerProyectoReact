import React, { useState } from 'react';
import '../hojas-de-estilo/TareasYFormulario.css'
import TareaFormulario from './TareaFormulario';
import Tareas from './Tareas';

function TareasYFormulario(props) {

    const [tareas, setTareas] = useState([]); 

    //tarea es
    const agregarTarea = tarea => {
        console.log(tarea);
        //con trim preguntamos si la cadena no esta vacia
        if(tarea.texto.trim()){
            //en caso de que haya espacios en los extremos, los borra
            tarea.texto = tarea.texto.trim();

            //en esta variable le decimos que el arreglo tiene la ultima tarea que se agrego al principio, y con spread(osea los ...) 
            // tomamos todas las tareas anteriores, y las convertimos de un arreglo a objetos tareas individuales
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id =>{
        // filtro el array de tareas y pregunto si la tarea no es igual a la que paso por id, la deja en el array de tareas
        const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return (
        //las etiquetas vacias asi se les llama fragmentos, solo estan para que se pueda escribir la estructura, y se eliminan 
        //o no aparecen reflejados cuando se crea la estructura de html
        <>
                    {/* onSubmit es el prop de TareaFormulario, el cual le pasa como argumento la tarea */}
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className='tareas-y-formulario-contenedor'>
                {
                    tareas.map((tarea) =>
                    <Tareas
                    //asigno el id como key de las tareas, asi no cambia el orden de las tareas en la lista(key no se pasa como prop)
                    key={tarea.id}
                    // necesito pasar el id de nuevo para poder trabajar con el en mis funciones
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    eliminarTarea={eliminarTarea}
                    completarTarea={completarTarea}
                    />

                    )
                }
            </div>
        </>
    );
}

export default TareasYFormulario;