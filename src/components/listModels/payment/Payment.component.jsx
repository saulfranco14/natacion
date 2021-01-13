import React, { Fragment } from 'react';
import Sidebar from '../../layout/Sidebar.component';
import Header from '../../layout/Header.component';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { columnsPayment } from '../../../utils/rowData';

const rowsPayment = [
    { id: 1, fecha_pago: "2020-12-30 03:48:20", user_id: "Saúl Mauricio Franco Rentería", concepto: "Mensualidad", etiqueta: "3 veces por semana", costo: "$880", firma_caja: "Laura Hernandez"},
    { id: 2, fecha_pago: "2020-12-30 03:48:20", user_id: "Natalia Hernandez", concepto: "Clase", etiqueta: "clase de natación (1hr)", costo: "$120", firma_caja: "Laura Hernandez"},
    { id: 3, fecha_pago: "2020-12-30 03:48:20", user_id: "Omar Espinoza", concepto: "Clase", etiqueta: "clase de natación (30 min)", costo: "$60", firma_caja: "Laura Hernandez"},
    { id: 4, fecha_pago: "2020-12-30 03:48:20", user_id: "Vladimir putin", concepto: "Semananal", etiqueta: "semana", costo: "$300", firma_caja: "Laura Hernandez"},
    { id: 5, fecha_pago: "2020-12-30 03:48:20", user_id: "Ricardo Cabrera", concepto: "Mensualidad", etiqueta: "4 veces por semana", costo: "$1080", firma_caja: "Laura Hernandez"},
    { id: 6, fecha_pago: "2020-12-30 03:48:20", user_id: "Romero Ramirez", concepto: "Mensualidad", etiqueta: "2 veces por semana", costo: "$440", firma_caja: "Laura Hernandez"},

];

const User = () => {
    return ( 
        <Fragment>
           <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Pagos</h1>
                            <div className="buttonCreate">
                                <Link to={'/createPayment'} > 
                                    <button
                                        className="btn btn-primario"
                                    >
                                        Crear pago
                                    </button>
                                </Link>  
                            </div>
                        </div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowsPayment} columns={columnsPayment} pageSize={15} />
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default User;