import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ahp_logo from "./americanhorseproject_logo.png";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        {/* <div className="nav-container">
        <nav className="navbar navbar-expand navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={ahp_logo} width="60" height="40" alt="americanhorseproject_logo" />
            </Link>
            <Link to="/" className="navbar-brand">American Horse Project</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Search</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/showHorse/:id" className="nav-link">login</Link>
                </li>
              </ul>
            </div>
          </nav> */}
          
          <Navbar />
          
          <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path='/showHorse/:id' component={showHorse} />
            <PrivateRoute path='/updateHorse/:id' component={UpdateHorse} />
            <PrivateRoute path='/AddHorse' component={AddHorse} />      
            <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          </Switch>
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;
