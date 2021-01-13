import React, { Fragment } from 'react';
import Sidebar from '../../layout/Sidebar.component';
import Header from '../../layout/Header.component';

const CreateRole = () => {
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
                                        <label htmlFor="role">Role</label>
                                        <input 
                                            type="text"
                                            id="role"
                                            name="role"
                                            placeholder="Escribe el role"
                                            autoComplete="off"
                                        />    
                                    </div>
                                    
                                    <div className="campo-form">
                                        <label htmlFor="descripcion"> Descripcion </label>
                                        <textarea 
                                            id="descripcion"
                                            name="descripcion"
                                            placeholder="Escribe la descripción del role"
                                            autoComplete="off"
                                        />

                                       
                                    </div>
                                   
                                    <div className="marginButton">
                                        <button
                                            type="submit"
                                            className="btn btn-create btn-primario"
                                        >
                                            Crear rol
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
 
export default CreateRole;