import React, { Fragment } from 'react'
import Sidebar from '../../layout/Sidebar.component';
import Header from '../../layout/Header.component';

const CreateClassOfUser = () => {
    return (  
        <Fragment>
           <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Crear clase opor usuario</h1>
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
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="Usuario">Usuario</label>
                                        <input 
                                            type="text"
                                            id="Usuario"
                                            name="descrUsuarioipcion"
                                            placeholder="Escribe el nombre del usuario"
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
                                            Crear clase por usuario
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
 
export default CreateClassOfUser;