import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ahpLogo from "./americanhorseproject_logo.png";
// import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={ahpLogo} width="50" height="30" alt="americanhorseproject_logo" />
            </Link>
            <Link to="/" className="navbar-brand">American Horse Project</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Horses</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/showHorse/:id" className="nav-link">Horse</Link>
                </li>
              </ul>
            </div>
          </nav>
        <h1>Adopt a horse</h1>
          
          <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path='/showHorse/:id' component={showHorse} />
            <PrivateRoute path='/updateHorse/:id' component={UpdateHorse} />
            <PrivateRoute path='/AddHorse' component={AddHorse} />      
            <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
