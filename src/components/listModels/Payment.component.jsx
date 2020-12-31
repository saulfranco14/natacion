import React, { Fragment } from 'react';
import Sidebar from '../layout/Sidebar.component';
import Header from '../layout/Header.component';

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
                         </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default User;