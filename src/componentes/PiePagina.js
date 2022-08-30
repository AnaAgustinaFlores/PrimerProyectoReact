import React from 'react';
import '../hojas-de-estilo/PiePagina.css'
import Logo from '../img/logo192.png'
import Github from '../img/github.png'
import linkedIn from '../img/linkedin.png'
import resume from '../img/resume.png'
import behance from '../img/behance.png'

function PiePagina() {
    return (
        <div className='contenedor-piepagina'>
            <h1>Mi primera pagina hecha con React <img src={Logo} className='logo-react' /></h1>
            <div className='href-contenedor'>
                <a href='https://github.com/AnaAgustinaFlores'> <img src={Github} className='img-href'/>GitHub</a>
                <a href='https://www.linkedin.com/in/ana-agustina-flores/'> <img src={linkedIn} className='img-href'/>LinkedIn</a>
                <a href='https://drive.google.com/drive/folders/1-BcwygQTdU2PVYrlH6tEAB3fyBRdFvv9?usp=sharing' > <img src={resume} className='img-href' />Mi Cv/Resume</a>
                <a href='https://www.behance.net/anaflores34'> <img src={behance} className='img-href'/>Behance</a>
            </div>
            
            <h2>© 2022 Developer: Ana Agustina Flores</h2>
        </div>
    );
}

export default PiePagina;