import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import "./App.css";
import { Switch, Route} from "react-router-dom";

import Test from "./pages/Test";
import Overview from "./pages/Overview";
import Lesson from "./pages/Lesson";
import Assignment from "./pages/Assignment";
import Resource from "./pages/Resource";
import Report from "./pages/Reports";

import Error from "./pages/Error";





const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/overview" component={Overview}></Route>
        <Route path="/lesson" component={Lesson}></Route>
        <Route path="/assignment" component={Assignment}></Route>
        <Route path="/test" component={Test}></Route>
        <Route path="/resource" component={Resource}></Route>
        <Route path="/report" component={Report}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
