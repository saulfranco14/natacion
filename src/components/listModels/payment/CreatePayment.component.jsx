import React, { Fragment } from 'react';
import Sidebar from '../../layout/Sidebar.component';
import Header from '../../layout/Header.component';

const CreatePayment = () => {
    return ( 
        <Fragment>
            <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Crear Pago</h1>
                        </div>
                            <div className="form-create">
                                <div className="contenedor-form-create sombra-dark">
                                <form>
                                    <div className="campo-form">
                                        <label htmlFor="nombre">Usuario</label>
                                        <input 
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Escribe el nombre del usuario"
                                            autoComplete="off"
                                        />

                                        <label className="marginLabel" htmlFor="conceptoPago">Concepto</label>
                                        <select className="selectForm" id="conceptoPago">
                                            <option value="mensualidad">Mensualidad</option>
                                            <option value="semanal">Semanal</option>
                                            <option value="clase1">Clase (1hr)</option>
                                            <option value="clase30">Clase (30 min)</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                        
                                    </div>
                                    
                                    <div className="campo-form">
                                        <label htmlFor="etiqueta"> Etiqueta </label>
                                        <input 
                                            type="text"
                                            id="etiqueta"
                                            name="etiqueta"
                                            placeholder="Escribe el concepto del pago"
                                            autoComplete="off"
                                        />

                                        <label className="marginLabel" htmlFor="conceptoPago">Costo</label>
                                        <input 
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Escribe el pago del concepto"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="etiqueta"> Tipo de pago </label>
                                        <input 
                                            type="text"
                                            id="etiqueta"
                                            name="etiqueta"
                                            placeholder="Escribe el concepto del pago"
                                            autoComplete="off"
                                        />

                                        <label className="marginLabel" htmlFor="conceptoPago">Firma de Caja</label>
                                        <input 
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Escribe el nombre de la persona"
                                            autoComplete="off"
                                        />
                                    </div>
                                    
                
                                    <div className="marginButton">
                                        <button
                                            type="submit"
                                            className="btn btn-create btn-primario"
                                        >
                                            Crear pago
                                        </button>
                                    </div>
                                </form>
                                </div>
                            </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default CreatePayment;