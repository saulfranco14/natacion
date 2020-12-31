import React, { Fragment } from 'react';
import Sidebar from '../layout/Sidebar.component';
import Header from '../layout/Header.component';

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
                         </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Roles;