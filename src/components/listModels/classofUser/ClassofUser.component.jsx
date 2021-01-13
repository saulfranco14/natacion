import React, { Fragment } from 'react';
import Sidebar from '../../layout/Sidebar.component';
import Header from '../../layout/Header.component';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { columnsClassUser } from '../../../utils/rowData';

const rowsClassUser = [
    { id: 1, created_at: "2021-01-04 07:48:20",     clase_id: "7:00 a 8:00 am ",   user_id:`Saúl Franco`,      profesor_id: "Hector" },
    { id: 2, created_at: "2021-01-04 08:48:20",     clase_id: "8:00 a 9:00 am ",   user_id:`Vladimir Putin`,   profesor_id: "Ana" },
    { id: 5, created_at: "2021-01-04 08:48:20",     clase_id: "8:00 a 9:00 am ",   user_id:`Jazmin Franco`,   profesor_id: "Ana" },
    { id: 6, created_at: "2021-01-04 09:48:20",     clase_id:   "10:00 a 11:00 am ",   user_id:`Gerardo Gaona`,   profesor_id: "Ana" },
    { id: 3, created_at: "2021-01-04 09:48:20",      clase_id:  "10:00 a 11:00 am ",  user_id:`Omar Gutierrez`,   profesor_id: "Ana" },
    { id: 4, created_at: "2021-01-05 10:48:20",     clase_id:   "11:00 a 12:00 pm ", user_id:`Selene`,           profesor_id: "Jennifer"  },

]
const ClassofUser = () => {
    return ( 
        <Fragment>
           <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Clases por usuario</h1>
                            <div className="buttonCreate">
                                 <Link to={'/createClassOfUser'} > 
                                    <button
                                        className="btn btn-primario"
                                    >
                                        Crear clase por usuario
                                    </button>
                                </Link> 
                            </div>
                        </div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowsClassUser} columns={columnsClassUser} pageSize={15} />
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default ClassofUser;