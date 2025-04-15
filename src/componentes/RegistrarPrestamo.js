import {Header, Titulo, ContenedorHeader, Subtitulo} from '../elementos/Header';
import Boton from '../elementos/Boton';
import React, {useState} from 'react';
import {Helmet} from 'react-helmet'; 
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {TitutuloSecciones,FormularioRegistroSecciones,Select,Input2, ContenedorBoton,FormularioRegistro} from '../elementos/ElementosDeFormulario'
import imagen1 from '../imagenes/motasPantera4.png'
import BotonAtras from '../elementos/BotonAtras';


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
const RegistrarPrestamo = () => {
    
    const navigate = useNavigate();
          
    return (  
        <>
        <Helmet>
              <title>Registrar Prestamo</title>
          </Helmet>
          
        <Header>
              <ContenedorHeader>
                  <Titulo>Registro de Prestamo</Titulo>
                  </ContenedorHeader>
        </Header>
           
        <BotonAtras ruta="/prestamos"/>


        <ImagenMotas src={imagen1} alt="MotasUam" />
        <FormularioRegistro>
		<FormularioRegistroSecciones>
	<TitutuloSecciones>Datos de Prestamo</TitutuloSecciones>

        Tipo de Usuario<Select name="Usuario" >
                <option value="">Seleccione Usuario</option>
                <option value="Alumno">Alumno</option>
                <option value="Coordinador">Coordinador</option>
                <option value="Técnico">Técnico</option>
        </Select>	
        Matricula / No.<Input2  type="text" 
                name="matricula" 
                placeholder="Matrícula: Ej: 2209999999" />
        
        Nombre(s)<Input2  type="text" 
                name="nombre" 
                placeholder="Nombre(s): Ej: Jose" />
        Apellido Paterno<Input2  type="text" 
                name="apellidoPaterno" 
                placeholder="Apellido Paterno: Ej: Ruiz" />
        Apellido Materno<Input2  type="text" 
                name="apellidoMaterno" 
                placeholder="Apellido Materno: Ej: Ruiz" />
        ID Material<Input2  type="text" 
                name="id-material" 
                placeholder="Matrícula: Ej: 5548393843" />
        Nombre Material<Input2  type="text" 
                name="nombre-material" 
                placeholder="Nombre(s): Ej: Laptop DELL" />
        Cantidad<Input2  type="text" 
                name="cantidad" 
                placeholder="Matrícula: Ej: 10 unidades" />
        Fecha de Préstamo<Input2 type="date" 
                name="fecha-registro" 
                placeholder="Selecciona una fecha" />
        Fecha de Limite<Input2 type="date" 
                name="fecha-registro" 
                placeholder="Selecciona una fecha" />
            
            </FormularioRegistroSecciones>

            
				
	        <ContenedorBoton>
	                <Boton as="button" primario type="submit" onClick={() => navigate("/inicio-empleado")}>Registrar Prestamo</Boton>
		</ContenedorBoton>
	</FormularioRegistro>
  
      </>


    );
}
 
export default RegistrarPrestamo

