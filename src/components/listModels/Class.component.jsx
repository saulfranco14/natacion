import React, { Fragment } from 'react';
import Sidebar from '../layout/Sidebar.component';
import Header from '../layout/Header.component';
import { DataGrid } from '@material-ui/data-grid';
import { columnsClasses } from '../../utils/rowData';

const rowsClass = [
    { id: 1, created_at: "2021-01-04 07:48:20", updated_at: "2020-01-04 09:50:00", horario_clase: "7:00 a 8:00 am ", capacidad_clase:`8 personas`, etiqueta: "clase de la mañana", profesor: "Hector", active: false  },
    { id: 2, created_at: "2021-01-04 07:48:20", updated_at: "2020-01-04 09:50:00", horario_clase: "8:00 a 9:00 am ", capacidad_clase:`6 personas`, etiqueta: "clase de la mañana", profesor: "Ana", active: true  },
    { id: 3, created_at: "2021-01-04 07:48:20", updated_at: "2020-01-04 09:50:00", horario_clase: "10:00 a 11:00 am ", capacidad_clase:`6 personas`, etiqueta: "clase de la mañana", profesor: "Ana", active: true  },
    { id: 4, created_at: "2021-01-04 07:48:20", updated_at: "2020-01-04 09:50:00", horario_clase: "11:00 a 12:00 pm ", capacidad_clase:`4 personas`, etiqueta: "clase de la mañana", profesor: "Jennifer", active: true  },

]

const Class = () => {
    return ( 
        <Fragment>
           <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Clases</h1>
                            <div className="buttonCreate">
                                <button
                                    className="btn btn-primario"
                                >
                                    Crear clase
                                </button>
                            </div>
                         </div>
                         <div className="tableCenter" >
                            <DataGrid rows={rowsClass} columns={columnsClasses} pageSize={15} />
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Class;