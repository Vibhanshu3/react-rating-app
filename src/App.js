import React from 'react';
import NavBar from './components/navbar';
import Movies from './components/movies';
import Customer from './components/customer';
import Rental from './components/rental';
import Login from './components/loginPage';
import NotFound from './components/notFound'
import { Route, Switch, Redirect } from "react-router-dom"


function App() {
  return (
    <nav className="navbar navbar-light bg-light">

      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={Movies}></Route>
          <Route path="/customer" exact component={Customer}></Route>
          <Route path="/rental" exact component={Rental}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Redirect from="/xyz" to="/"></Redirect>
          <Route component={NotFound}></Route>

        </Switch>
      </div>
    </nav>
    //present in props ka match.params.id
    // also history, location, match r in route props
    //ract training.com to read more
  )
}

export default App;
