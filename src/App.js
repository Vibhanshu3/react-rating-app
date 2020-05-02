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
          <Route path="/react-rating-app" exact component={Movies}></Route>
          <Route path="/react-rating-app/customer" exact component={Customer}></Route>
          <Route path="/react-rating-app/rental" exact component={Rental}></Route>
          <Route path="/react-rating-app/login" exact component={Login}></Route>
          <Redirect from="/react-rating-app/xyz" to="/"></Redirect>
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
