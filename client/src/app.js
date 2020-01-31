//This File controls all the client side routing between pages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import AccountForm from "./Pages/AccountForm";
import ElvesNotes from "./Pages/ElvesNotes";
import LogIn from "./Pages/LogIn";
import ParentPortal from "./Pages/ParentPortal";
import Profile from "./Pages/Profile";
//import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AccountForm" component={AccountForm} />
          <Route exact path="/ElvesNotes" component={ElvesNotes} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/ParentPortal" component={ParentPortal} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
