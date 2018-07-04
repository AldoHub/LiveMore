import React, { Component } from 'react';
//import the Link module
import {Link} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
        <nav>
          <ul>
          <li><Link to="/">Live More</Link></li>
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </ul>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/packages/">Packages</Link></li>
         
          </ul>
        </nav>
    );
  }
}

export default Nav;
