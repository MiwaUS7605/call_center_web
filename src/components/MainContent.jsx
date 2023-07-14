import React, { Component } from "react";

class MainContent extends Component {
  render() {
    return (
      <React.Fragment>
        <section class="main-content">
          <article class="index-intro">
            <div class="container">
              <div class="jumbotron jumbotron-fluid">
                <h1 class="display-4 text-center">B-TAXI CALL CENTER</h1>
                <p class="lead text-center">Go any where, any time</p>
              </div>
            </div>
          </article>

          <div class="container">
            <div class="container mt-3">
              <div class="text-center display-4">
                Book now: +84 444 5555 666
                <img
                  width="40"
                  height="40"
                  src={require("../assets/phone-call.png")}
                ></img>
              </div>
            </div>

            <div class="row">
              <article class="column index-banner-1">
                <div class="container mt-5">
                  <div class="jumbotron jumbotron-fluid">
                    <h1 class="display-6">With VIP account, you can:</h1>
                    <p class="lead">1. Schedule booking in advance</p>
                    <p class="lead">2. Go any where, any time</p>
                    <p class="lead">3. Go any where, any time</p>
                  </div>
                </div>
              </article>

              <article class="column index-banner-1">
                <div class="container mt-5">
                  <div class="jumbotron jumbotron-fluid">
                    <h1 class="display-6">Upgrade to VIP?</h1>
                    <p class="lead">Transaction through:</p>
                    <p class="lead">Momo: 084-4234-34-31 (Mr.Teo)</p>
                    <p class="lead">ZaloPay: 084-4234-34-31 (Mrs.Thi)</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div class="row">
            <article class="column index-banner-1"></article>

            <article class="column index-banner-1">
              <div class="container mt-5">
                <div class="jumbotron jumbotron-fluid">
                  <p class="lead">
                    Install B-Taxi app and log in with VIP account for more
                  </p>
                  <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div class="container">
            <div class="row">
              <div class="column">
                <div class="card text-center">
                  <div class="card-body">
                    <p class="card-text">N Customers have installed our App</p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card text-center">
                  <div class="card-body">
                    <p class="card-text">N Drivers are ready to pick you up</p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card text-center">
                  <div class="card-body">
                    <p class="card-text">
                      x% of the trips were successfully booked
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-3">
              <div class="text-center fs-2 fst-italic fw-lighter">
              Join us now to enjoy fast and convenient booking experience!
              </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default MainContent;
