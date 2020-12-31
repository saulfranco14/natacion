import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Group } from '@material-ui/icons';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AssistantIcon from '@material-ui/icons/Assistant';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import TimerIcon from '@material-ui/icons/Timer';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const Sidebar = () => {
    return ( 
        <Fragment>
            <aside>
                <Link to={'/dashboard'} >
                    <h1>
                        Acuática agua azul 
                    </h1>
                </Link>

                {/* Usuarios */}
                <Link to={'/users'} >
                    <h3> 
                        <Group
                             fontSize="large"
                        />
                        {"  "}
                        Usuarios 
                    </h3> 
                </Link>
                 {/* Pagos */}
                 <Link to={'/payment'} > 
                    <h3> 
                        <LocalAtmIcon
                             fontSize="large"
                        />
                        {"  "}
                        Pagos 
                    </h3> 
                </Link>
                {/* Profesores */}
                <Link to={'/teachers'} > 
                    <h3> 
                        <EmojiPeopleIcon
                             fontSize="large"
                        />
                        {"  "}
                        Profesores 
                    </h3> 
                </Link>
                 {/* Clase de usuarios */}
                 <Link to={'/class'} > 
                    <h3>
                        <AssistantIcon
                             fontSize="large"
                        />
                        {"  "} 
                        Clases 
                    </h3>
                </Link>
                {/* Clase de usuarios */}
                <Link to={'/classofusers'} > 
                    <h3> 
                        <AssignmentIndIcon
                             fontSize="large"
                        />
                        {"  "} 
                        Clases por usuario 
                    </h3> 
                </Link>
                {/* Horarios */}
                <Link to={'/schedule'} > 
                    <h3> 
                        <TimerIcon
                             fontSize="large"
                        />
                        {"  "} 
                        Horarios 
                    </h3> 
                </Link>
                {/* Entrenamientos */}
                <Link to={'/training'} > 
                    <h3> 
                        <AccessibilityNewIcon
                             fontSize="large"
                        />
                        {"  "} 
                        Entrenamientos 
                    </h3> 
                </Link>
                {/* Roles */}
                <Link to={'/roles'} > 
                    <h3> 
                        <AccountCircleIcon
                             fontSize="large"
                        />
                        {"  "} 
                        Roles 
                    </h3> 
                </Link>



               
            </aside>
        </Fragment>
     );
}
 
export default Sidebar;