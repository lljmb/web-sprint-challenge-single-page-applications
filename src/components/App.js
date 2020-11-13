import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

// Components used for the different routes
import Home from "./Home";
import Form from "./Form";

import './styles.less'


const App = () => {
  return (
        <div className="App">
          <nav>
            <h1 className="store-header">Pizza Planet</h1>
            <div className="nav-links">
              
              <Link to="/">Home</Link>
              <Link to="/pizza">Order</Link>
            </div>
          </nav>
          
          <Switch>
            <Route path="/pizza">
              <Form />
            </Route>
    
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
  );
};
export default App;
