import React, { Fragment } from 'react';
import Sidebar from '../../layout/Sidebar.component';
import Header from '../../layout/Header.component';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { columnsTeacher } from '../../../utils/rowData';

const rowsTeacher = [
    { id: 1 , nombre: "Jennifer Hernandez", edad: 24, telefono_celular: "5543920293", email:"jenni@gmail.com", role:"Profesor", active: true},
    { id: 2, nombre: "Hector Gutierrez", edad: 31, telefono_celular: "5585999485", email:"jenni@gmail.com", role:"Profesor", active: true},
    { id: 3 , nombre: "Ana Montes", edad: 45, telefono_celular: "5543920293", email:"jenni@gmail.com", role:"profesor", active: false},
    { id: 4 , nombre: "Daniel Barraza", edad: 48, telefono_celular: "5543920293", email:"jenni@gmail.com", role:"Profesor", active: true},
    { id: 5, nombre: "Enrique Alvarez", edad: 25, telefono_celular: "5543920293", email:"jenni@gmail.com", role:"Profesor", active: true},

]

const Teacher = () => {
    return ( 
        <Fragment>
           <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Profesores</h1>
                            <div className="buttonCreate">
                                <Link to={'/createTeacher'} > 
                                    <button
                                        className="btn btn-primario"
                                    >
                                        Crear profesor
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowsTeacher} columns={columnsTeacher} pageSize={15} />
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Teacher;