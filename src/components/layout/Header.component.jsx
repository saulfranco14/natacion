import React, { Fragment } from 'react'

const Header = () => {
    return ( 
        <Fragment>
            <header className="app-header">
                <p className="nombre-usuario">Hola <span>Saúl Franco</span></p>
                <nav className="nav-principal">
                    <a href="#!">
                        Cerrar Sesión
                    </a>
                </nav>
            </header>
        </Fragment>
     );
}
 
export default Header;