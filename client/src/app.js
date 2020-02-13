//This File controls all the client side routing between pages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import AccountForm from "./Pages/AccountForm";
import MagicalNotes from "./Pages/MagicalNotes";
//import LoginPage from "../Components/Authorization/authLogIn";
import LogIn from "./Pages/LogIn";
import ElfProfile from "./Pages/ElfProfile";
import FamilyProfile from "./Pages/FamilyProfile";
//import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AccountForm" component={AccountForm} />
          <Route exact path="/MagicalNotes" component={MagicalNotes} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/ElfProfile" component={ElfProfile} />
          <Route exact path="/FamilyProfile" component={FamilyProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//<Route exact path="/LoginPage" component={LoginPage} />