import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from './Components/About'
import Services from "./Components/Services";
import Contact from "./Components/Contact";
export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path = '/about' component={About}/>
    <Route path = '/services'component={Services}/>
    <Route path='/contact' component={Contact}/>
  </Switch>
);
