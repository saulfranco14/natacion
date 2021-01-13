import React, { Fragment } from 'react'
import Sidebar from '../../layout/Sidebar.component';
import Header from '../../layout/Header.component';

const CreateClass = () => {
    return (  
        <Fragment>
           <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Crear clase</h1>
                        </div>
                            <div className="form-create">
                                <div className="contenedor-form-create sombra-dark">
                                <form>
                                    <div className="campo-form">
                                        <label htmlFor="horario_clase">Horario de la clase</label>
                                        <input 
                                            type="text"
                                            id="horario_clase"
                                            name="horario_clase"
                                            placeholder="Escribe el horario de la clase"
                                            autoComplete="off"
                                        />

                                        <label className="marginLabel" htmlFor="capacidadClase">Capacidad de personas (clase) </label>
                                        <input 
                                            type="number"
                                            id="capacidadClase"
                                            name="capacidadClase"
                                            placeholder="Escribe la capacidad total de la clase"
                                            autoComplete="off"
                                        />
                                        
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="descripcion">Descripción</label>
                                        <input 
                                            type="text"
                                            id="descripcion"
                                            name="descripcion"
                                            placeholder="Escribe la descripción de la clase"
                                            autoComplete="off"
                                        />
                                        <label className="marginLabel" htmlFor="Profesor">Profesor</label>
                                        <input 
                                            type="text"
                                            id="Profesor"
                                            name="Profesor"
                                            placeholder="Escribe el nombre del profesor"
                                            autoComplete="off"
                                        />
                                    </div>
                                  
                                    <div className="marginButton">
                                        <button
                                            type="submit"
                                            className="btn btn-create btn-primario"
                                        >
                                            Crear clase
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
 
export default CreateClass;