import React, { Fragment } from 'react';
import Sidebar from '../../layout/Sidebar.component';
import Header from '../../layout/Header.component';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { columnRoles } from '../../../utils/rowData';

const rowsRoles = [
    { id: 1, nombre_rol: "administrativo", descripcion_rol: "Se encarga de administrar el sistema"},
    { id: 2, nombre_rol: "profesor", descripcion_rol: "Se encarga de dar clases de natación"},
    { id: 3, nombre_rol: "administrativo secundario", descripcion_rol: "Se encarga de administrar el sistema de clases"},
    { id: 4, nombre_rol: "super usuario", descripcion_rol: "Tiene el acceso total al sistema, pueda editar todo el contenido"},
    { id: 5, nombre_rol: "asistente", descripcion_rol: "Se encarga de administrar la parte de usuarios"},

]


const Roles = () => {
    return ( 
        <Fragment>
           <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Roles</h1>
                            <div className="buttonCreate">
                                <Link to={'/createRole'} > 
                                    <button
                                        className="btn btn-primario"
                                    >
                                        Crear role
                                    </button>
                                </Link>
                            </div>
                         </div>
                         <div className="tableCenter" >
                            <DataGrid rows={rowsRoles} columns={columnRoles} pageSize={15} />
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Roles;