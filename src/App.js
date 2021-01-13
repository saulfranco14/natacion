import React, { Fragment }  from 'react';
import Login                from './components/auth/Login.component';
import Dashboard            from './components/Dashboard.component';
import User                 from  './components/listModels/user/User.component';
import Teacher              from  './components/listModels/teacher/Teacher.component';
import Payment              from './components/listModels/payment/Payment.component';
import Class                from './components/listModels/clas/Class.component';
import ClassofUser          from './components/listModels/classofUser/ClassofUser.component';
import Hours                from './components/listModels/Hours.component';
import Training             from './components/listModels/Training.component';
import Roles                from './components/listModels/rol/Roles.component';
import CreateUser           from './components/listModels/user/CreateUser.component';
import CreatePayment        from './components/listModels/payment/CreatePayment.component';
import CreateClass          from './components/listModels/clas/CreateClass.component';
import CreateClassOfUser    from './components/listModels/classofUser/CreateClassOfUser.component';
import CreateTeacher        from './components/listModels/teacher/CreateTeacher.component';
import CreateRole           from './components/listModels/rol/CreateRole.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/"                   component={Login} />
          <Route exact path="/dashboard"          component={Dashboard} />
          <Route exact path="/users"              component={User} />
          <Route exact path="/teachers"           component={Teacher} />
          <Route exact path="/payment"            component={Payment} />
          <Route exact path="/class"              component={Class} />
          <Route exact path="/classofusers"       component={ClassofUser} />
          <Route exact path="/schedule"           component={Hours} />
          <Route exact path="/training"           component={Training} />
          <Route exact path="/roles"              component={Roles} />
          <Route exact path="/createUser"         component={CreateUser}/>
          <Route exact path="/createPayment"      component={CreatePayment}/>
          <Route exact path="/createClass"        component={CreateClass}/>
          <Route exact path="/createClassOfUser"  component={CreateClassOfUser}/>
          <Route exact path="/createTeacher"      component={CreateTeacher}/>
          <Route exact path="/createRole"         component={CreateRole}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
