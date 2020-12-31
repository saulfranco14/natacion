import React, { Fragment }  from 'react';
import Login                from './components/auth/Login.component';
import Dashboard            from './components/Dashboard.component';
import User                 from  './components/listModels/User.component';
import Teacher              from  './components/listModels/Teacher.component';
import Payment              from './components/listModels/Payment.component';
import Class                from './components/listModels/Class.component';
import ClassofUser          from './components/listModels/ClassofUser.component';
import Hours                from './components/listModels/Hours.component';
import Training             from './components/listModels/Training.component';
import Roles                from './components/listModels/Roles.component';
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

        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
