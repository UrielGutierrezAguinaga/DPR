import {Header, Titulo, ContenedorHeader, Subtitulo} from '../elementos/Header';
import Boton from '../elementos/Boton';
import React, {useState} from 'react';
import {Helmet} from 'react-helmet'; 
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {TitutuloSecciones,FormularioRegistroSecciones,Select,Input2, ContenedorBoton,FormularioRegistro} from '../elementos/ElementosDeFormulario'
import imagen1 from '../imagenes/motasPantera4.png'

const ImagenMotas = styled.img`
    
    position: absolute; /* Coloca el contenedor en la posición absoluta */
    top: 12%; /* Alínea la imagen al borde superior */
    left: 76%; /* Alínea la imagen al borde izquierdo */
    width: 75% 5%; /* Ocupa todo el ancho de la pantalla */
    height: 120%; /* Ocupa todo el alto de la pantalla */
  
    z-index: -1; /* Envía la imagen detrás del formulario */
    @media (max-width: 768px) {
        margin-left: 0; /* Elimina el margen izquierdo en pantallas pequeñas */
        width: 24%; /* Ocupa todo el ancho del contenedor en pantallas pequeñas */
        height: 80%;
        left: 76%; /* Alínea la imagen al borde izquierdo */
        }

`;
const RegistrarAlumno = () => {
    return (  
        <>
        <Helmet>
              <title>Registrar Alumno</title>
          </Helmet>
          
        <Header>
              <ContenedorHeader>
                  <Titulo>Registro de Alumno</Titulo>
                  </ContenedorHeader>
        </Header>
        <ImagenMotas src={imagen1} alt="MotasUam" />
        <FormularioRegistro>
		<FormularioRegistroSecciones>
	<TitutuloSecciones>Datos de Contacto</TitutuloSecciones>	
        Nombre(s)<Input2  type="text" 
                name="nombre" 
                placeholder="Nombre(s): Ej: Jose" />
        Apellido Paterno<Input2  type="text" 
                name="apellidoPaterno" 
                placeholder="Apellido Paterno: Ej: Ruiz" />
        Apellido Materno<Input2  type="text" 
                name="apellidoMaterno" 
                placeholder="Apellido Materno: Ej: Ruiz" />
            </FormularioRegistroSecciones>

            <FormularioRegistroSecciones>
            <TitutuloSecciones>Datos de la Cuenta</TitutuloSecciones>
        Contraseña<Input2  type="password" 
                name="password" 
                placeholder="Contraseña" />
        Repite contraseña<Input2  type="password" 
                name="repeatPassword" 
                placeholder="Repetir Contraseña" />
            </FormularioRegistroSecciones>

            <FormularioRegistroSecciones>
            <TitutuloSecciones>Datos del Alumno</TitutuloSecciones>
		
        Matricula Alumno<Input2  type="text" 
                name="matricula" 
                placeholder="Matrícula: Ej: 2209999999" />
        
        Licenciatura<Select name="licenciatura">
                <option value="">Seleccione Licenciatura</option>
                <option value="computacion">Ing. en Computación</option>
                <option value="otras">Otra Licenciatura</option>
        </Select>
        Correo Institucional<Input2  type="email" 
                name="correoInstitucional" 
                placeholder="Correo Electrónico Institucional: Ej: jose.ruiz@cua.uam.mx" />
         Correo Electrónico<Input2 type="email" 
                name="correoPersonal" 
                placeholder="Correo Electrónico: Ej: joselito123@gmail.com" />
            </FormularioRegistroSecciones>
		

				
	        <ContenedorBoton>
	                <Boton as="button" primario type="submit">Registrar Alumno</Boton>
		</ContenedorBoton>
	</FormularioRegistro>
  
      </>


    );
}
 
export default RegistrarAlumno

