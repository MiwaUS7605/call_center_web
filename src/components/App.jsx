import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="bg-light bg-gradient">
          <NavBar />
          <MainContent />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}