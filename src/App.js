import React from "react";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Nav from "./components/nav";
import Home from "./components/home";
import Reserve from "./components/reserve";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='app'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/reserve' component={Reserve} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
