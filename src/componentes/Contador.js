import React from 'react';
import '../hojas-de-estilo/Contador.css'

function Contador ({ numeroClicks }){
    return(
        <div className='contador'>
            {numeroClicks}
        </div>

        
    );
}

export default Contador;