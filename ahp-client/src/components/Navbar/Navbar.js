import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div>
          
          <div className ="navbar-nav justify-content-between">  
              <ul className="nav navbar-nav mr-auto">                 
                  <li className="nav-item"><Link to="/">Home</Link></li>
                  <li className="nav-item"><Link to="/about">About</Link></li>            
                  <li className="nav-item"><Link to="/horses">Horses</Link></li>
                  <li className="nav-item"><Link to="/organizations">Rescue Orgs</Link></li>
                  <li className="nav-item"><Link to="/resouces">Resources</Link></li>
              </ul>
              
          </div>
      </div>
  </nav> 
)

export default Navbar;