import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
export default (
  <Switch>
    <Route path="/" component={Home} />
    {/* <Route path = '/about' component={About}/> */}
    {/* <Route path = '/services' component={Services}/> */}
    {/* <Route path='/contact' component={Contact}/> */}
  </Switch>
);
