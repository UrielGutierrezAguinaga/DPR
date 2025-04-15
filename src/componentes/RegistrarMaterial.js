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
const RegistrarMaterial = () => {
    
    const navigate = useNavigate();
          
    return (  
        <>
        <Helmet>
              <title>Registrar Material</title>
          </Helmet>
          
        <Header>
              <ContenedorHeader>
                  <Titulo>Registro de Material</Titulo>
                  </ContenedorHeader>
        </Header>
           
        <BotonAtras ruta="/materiales"/>


        <ImagenMotas src={imagen1} alt="MotasUam" />
        <FormularioRegistro>
		<FormularioRegistroSecciones>
	<TitutuloSecciones>Datos de Material</TitutuloSecciones>

      
        Nombre de Material<Input2  type="text" 
                name="nombre" 
                placeholder="Nombre: Ej: Laptop" />
        Marca<Input2  type="text" 
                name="marca" 
                placeholder="Marca: Ej: Dell" />
        Modelo<Input2  type="text" 
                name="modelo" 
                placeholder="Modelo: Ej: Thinkpad" />
        Número de Serie<Input2  type="text" 
                name="id-material" 
                placeholder="Número de Serie: Ej: SN5548393843" />
        Cantidad<Input2  type="text" 
                name="cantidad" 
                placeholder="Matrícula: Ej: 10 unidades" />

        Estado<Select name="Estado" >
                <option value="">Seleccione Estado</option>
                <option value="Disponible">Disponible</option>
                <option value="SinDisponibilidad">Sin Disponibilidad</option>
          
        </Select>	
        Tipo<Select name="Tipo" >
                <option value="">Seleccione Tipo</option>
                <option value="Inventariado">Inventariado</option>
           
        </Select>	
     
            </FormularioRegistroSecciones>

            
				
	        <ContenedorBoton>
	                <Boton as="button" primario type="submit" onClick={() => navigate("/inicio-empleado")}>Registrar Material</Boton>
		</ContenedorBoton>
	</FormularioRegistro>
  
      </>


    );
}
 
export default RegistrarMaterial

