import React, { Fragment, useState } from 'react';

const Login = () => {

    // User
    const [ user, setUser ] = useState({
        email       : '',
        password    : ''
    });

    const { email, password } = user;

    const onChange = ( e ) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
    }

    return ( 
           <Fragment>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h2> Acuática agua azul</h2>
                        <form
                            onSubmit={ onSubmit }

                        >
                            <div className="campo-form">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Escribe tu email"
                                    autoComplete="off"
                                    value={ email }
                                    onChange={onChange}

                                />
                            </div>
                            <div className="campo-form">
                                <label htmlFor="email">Password</label>
                                <input 
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Escribe tu contraseña"
                                    autoComplete="off"
                                    value = { password }
                                    onChange={onChange}

                                />
                            </div>
                            <div className="campo-form">
                                <input
                                    type="submit"
                                    className="btn btn-primario btn-block"
                                    value="Iniciar Sesión"
                                />
                            </div>
                        </form>
                       
                </div>
            </div>
        </Fragment>
     );
}
 
export default Login;