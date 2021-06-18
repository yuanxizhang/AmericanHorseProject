import React from 'react';
import 'Header.css'; 
import Logo from '../images/logos/ahpLogoDark.svg';
import {Link} from 'react-router-dom';

const Header =() =>{
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><img src={Logo} className="App-logo" alt="logo" /></Link>
        <p>
          <code>The American Horse Project</code>
        </p>
      </header>
    </div>
  );
}
export default Header;
