import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand fs-2 text-center font-monospace" href="#">
            <img src={require('../assets/logo.png')} width="45" height="45" class="d-inline-block align-text-center" alt=""/>
            B-Taxi CallCenter
          </a>
          
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
