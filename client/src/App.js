import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch"

function App() {
  return (
    <Router>
      <div>
      
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Saved" component={Saved} />
          <Route exact path="/Book/:id" component={Detail}/> 
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;