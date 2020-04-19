import React, {Fragment, useState} from 'react';
import {calcularTotal} from '../helpers'

const Formulario = (props) => {
    
    const[error, guardarError] = useState(false);

    //cuando el usuario hace submit
   
    const calcularPrestamo = e => {
        e.preventDefault();
        

        //validar el Formulario

        if(props.cantidad === 0 || props.plazo===''){
            guardarError(true);
            return;
        }
        //eliminar el error previo
        guardarError(false);

        //habilitar el spinner

        props.guardarCargando(true);

        setTimeout(() => {
                    //realizar la cotizacion
        const total = (calcularTotal(props.cantidad, props.plazo));
        props.guardarTotal(total);

        //deshabilitar el spinner

        props.guardarCargando(false);
        }, 2500);

        

        
    }

    return (
        <Fragment>
        <form onSubmit={calcularPrestamo}>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange= {e => {
                        props.guardarCantidad(parseInt(e.target.value))}}
                    
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange = {e => {props.guardarPlazo(parseInt(e.target.value))}}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                      
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                      
                  />
              </div>
          </div>
  </form>
    {(error ? <p className="error">Todos los campos son obligatorios</p>:'')}
  
    
  </Fragment> );
}
 
export default Formulario;

