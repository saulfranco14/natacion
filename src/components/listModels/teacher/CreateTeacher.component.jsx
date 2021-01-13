import React, { Fragment } from 'react'
import Sidebar from '../../layout/Sidebar.component';
import Header from '../../layout/Header.component';

const CreateTeacher = () => {
    return (  
        <Fragment>
           <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Crear profesor</h1>
                        </div>
                            <div className="form-create">
                                <div className="contenedor-form-create sombra-dark">
                                <form>
                                    <div className="campo-form">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input 
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Escribe el nombre"
                                            autoComplete="off"
                                        />

                                        <label className="marginLabel" htmlFor="apellidoPaterno">Apellido Paterno</label>
                                        <input 
                                            type="text"
                                            id="apellidoPaterno"
                                            name="apellidoPaterno"
                                            placeholder="Escribe su apellido paterno"
                                            autoComplete="off"
                                        />
                                        
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="apellidoMaterno">Apellido Materno</label>
                                        <input 
                                            type="text"
                                            id="apellidoMaterno"
                                            name="apellidoMaterno"
                                            placeholder="Escribe su apellido materno"
                                            autoComplete="off"
                                        />
                                        <label className="marginLabel" htmlFor="telefonoCasa">Teléfono celular</label>
                                        <input 
                                            type="text"
                                            id="telefonoCel"
                                            name="telefonoCel"
                                            placeholder="Escribe su teléfono celular"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="telefonoCasa">Télefono Casa</label>
                                        <input 
                                            type="text"
                                            id="telefonoCasa"
                                            name="telefonoCasa"
                                            placeholder="Escribe su télefono de casa"
                                            autoComplete="off"
                                        />
                                        <label className="marginLabel" htmlFor="telefonoCasa">Email</label>
                                        <input 
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="Escribe su email"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="pesoUsuario">Peso (kg) </label>
                                        <input 
                                            type="text"
                                            id="pesoUsuario"
                                            name="pesoUsuario"
                                            placeholder="Escribe su peso"
                                            autoComplete="off"
                                        />
                                        <label className="marginLabel" htmlFor="imcUsuario">IMC</label>
                                        <input 
                                            type="text"
                                            id="imcUsuario"
                                            name="imcUsuario"
                                            placeholder="Escribe su imc"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="alergiaUsuario"> Alergía </label>
                                        <input 
                                            type="text"
                                            id="alergiaUsuario"
                                            name="alergiaUsuario"
                                            placeholder="Escribe si tiene una alergía el usuario"
                                            autoComplete="off"
                                        />
                                        <label className="marginLabel" htmlFor="sexoUsuario">Sexo</label>
                                        <select className="selectForm" id="sexoUsuario">
                                            <option value="masculino">Masculino</option>
                                            <option value="femenino">Femenino</option>
                                        </select>
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                                        <input 
                                            type="text"
                                            id="fechaNacimiento"
                                            name="fechaNacimiento"
                                            placeholder="Escribe su fecha de nacimiento"
                                            autoComplete="off"
                                        />
                                    </div>
                                  
                                    <div className="marginButton">
                                        <button
                                            type="submit"
                                            className="btn btn-create btn-primario"
                                        >
                                            Crear profesor
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
 
export default CreateTeacher;