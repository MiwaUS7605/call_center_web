import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="container navbar navbar-light">
          <div class="navbar-brand">
            <img
              src={require("../assets/logo.png")}
              width="45"
              height="45"
              alt=""
            />
            <a class="mx-2 navbar-brand fs-2 font-monospace">
              B-Taxi CallCenter
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
