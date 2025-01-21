import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contenedor from './elementos/Contenedor';
import {Helmet} from 'react-helmet';
import { BrowserRouter, Route,  Routes  } from 'react-router-dom';
import IniciarSesion from './componentes/InicioSesion'
import RegistroUsuarios from './componentes/RegistroUsuarios'
import RegistrarAlumno from './componentes/RegistrarAlumno';
import RegistrarEmpleado from './componentes/RegistrarEmpleado';
import Titulos from './elementos/Titulos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

      <Helmet>
        <title>Plataforma UAM Cuajimalpa</title>
      </Helmet>
      <Titulos/>
      <BrowserRouter>
      <Contenedor>
        
        <Routes>
        <Route path='/login' element={<IniciarSesion/>} />
        <Route path='/' element={<App />} />

        <Route path='/registro-usuarios' element={<RegistroUsuarios/>} />
        <Route path='/registro-alumno' element={<RegistrarAlumno/>} />
        <Route path='/registro-empleado' element={<RegistrarEmpleado/>} />

        
        </Routes>
        

       
        </Contenedor>

      </BrowserRouter>


    
    </>
  </React.StrictMode>
);
