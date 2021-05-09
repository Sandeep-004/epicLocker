import React from 'react';
import './index.css';
import First from './First';
import CreateAcc from './CreateAcc';
import { Route, Switch  } from 'react-router-dom';  
import Signin from './Signin';
import Locker from './Locker';
import Error from './Error';
import Logout from './Logout';


export const App = () => {
  return (
    <div>
    <menu>
      <Switch>
          <Route exact path="/" component={First}></Route>
          <Route exact path="/createAcc" component={CreateAcc}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/locker" component={Locker}></Route>
          <Route exact path="/logout" component={Logout}></Route>
          <Route component={Error}></Route>
      </Switch>
    </menu>
    </div>
  )
}


export default App;