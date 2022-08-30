import './App.css';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import Calculadora from './componentes/Calculadora'
import { Fragment, useState } from 'react'; //ahora podemos usar estados y hooks
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'
import PiePagina from './componentes/PiePagina';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {

  //valor | funcion que actualiza  |  hook con valor inicial
  const [numeroClicks, setNumeroClicks] = useState(0);

  const manejarClick = () => {
    //funcion con argumento
    setNumeroClicks(numeroClicks + 1)
    /*     console.log("Click"); */
  }

  const reiniciarContador = () => {
    setNumeroClicks(0);
    /* console.log("Reiniciar"); */
  }

  return (
    <div className="App">
      <div className='contenedor-body'>
        <div className='contenedor-principal'>


          <Router>

            <div className='navbar'>
              <Link to='/contador'>
                <span>Contador de clicks</span>
              </Link>
              <Link to='/calculadora'>
                <span>Calculadora</span>
              </Link>
              <Link to='/tareas'>
                <span>Lista de tareas</span>
              </Link>
            </div>

            <Routes>
              <Route path='/contador' element={
                <Fragment>
                  <Contador
                    numeroClicks={numeroClicks}
                  />
                  <div className='botones'>
                    <Boton
                      texto='Click'
                      esBotonDeClick={true}
                      manejarClick={manejarClick}
                    />
                    <Boton texto='Reiniciar'
                      esBotonDeClick={false}
                      manejarClick={reiniciarContador}
                    />
                  </div>
                </Fragment>
              }>
              </Route>

              <Route path='/calculadora' element={<Calculadora />}></Route>
              <Route path='/tareas' element={<ListaDeTareas />}></Route>
            </Routes>
          </Router>


        </div>

      </div>
      <PiePagina />
    </div >
  );
}

export default App;
