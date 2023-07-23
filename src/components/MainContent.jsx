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
                  class="mx-2"
                  width="40"
                  height="40"
                  src={require("../assets/phone-call.png")}
                ></img>
              </div>
            </div>

            <div class="row justify-content-center">
              <article class="col-md-6">
                <div class="container mt-5">
                  <div class="card">
                    <h1 class="display-6">With VIP account, you can:</h1>
                    <p class="lead">1. Schedule booking in advance</p>
                    <p class="lead">2. Go any where, any time</p>
                    <p class="lead">3. Go any where, any time</p>
                  </div>
                </div>
              </article>

              <article class="col-md-6">
                <div class="container mt-5">
                  <div class="card">
                    <h1 class="display-6">Upgrade to VIP?</h1>
                    <p class="lead">Transaction through:</p>
                    <p class="lead">Momo: 084-4234-34-31 (Mr.Teo)</p>
                    <p class="lead">ZaloPay: 084-4234-34-31 (Mrs.Thi)</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div class="container mt-5">
            <div class="row">
              <div class="container">
                <div class="card">
                  <h1 class="lead text-center display-6">
                    Install B-Taxi app and log in with VIP account for more
                  </h1>
                  <p class="lead text-center mt-3">
                    <a class="btn btn-primary btn-lg" href="#" role="button">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-5">
            <div class="row justify-content-center">
              <div class="col-md-3 col-lg-4 col-xl-3">
                <div class="card-fact text-center">
                  <div class="card-body">
                    <p class="card-text">N Customers have installed our App</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-4 col-xl-3">
                <div class="card-fact text-center">
                  <div class="card-body">
                    <p class="card-text">N Drivers are ready to pick you up</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-lg-4 col-xl-3">
                <div class="card-fact text-center">
                  <div class="card-body">
                    <p class="card-text">
                      x% of the trips were successfully booked
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-5">
            <div class="text-center fs-2 fst-italic fw-lighter">
              Join us now to enjoy fast and convenient booking experience!
            </div>
          </div>
        </section>
        <section class="container">
          <div class="container mt-3">
            <button href="#" class="btn btn-primary btn-help float-end">
              <img
                width="100"
                height="100"
                src={require("../assets/question-mark.png")}
              ></img>
            </button>
          </div>
        </section>
        <section>
          <>
            {/* Remove the container if you want to extend the Footer to full width. */}
            <div className="container my-5">
              {/* Footer */}
              <footer
                className="text-center text-lg-start text-dark"
                style={{ backgroundColor: "#ECEFF1" }}
              >
                {/* Section: Social media */}
                <section
                  className="d-flex justify-content-between p-4 text-white"
                  style={{ backgroundColor: "#21D192" }}
                >
                  {/* Left */}
                  <div className="me-5">
                    <span>Get connected with us on social networks:</span>
                  </div>
                  {/* Left */}
                  {/* Right */}
                  <div>
                    <a href="" className="text-white me-4">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="" className="text-white me-4">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="" className="text-white me-4">
                      <i className="fab fa-google" />
                    </a>
                    <a href="" className="text-white me-4">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="" className="text-white me-4">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="" className="text-white me-4">
                      <i className="fab fa-github" />
                    </a>
                  </div>
                  {/* Right */}
                </section>
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section className="">
                  <div className="container text-center text-md-start mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                      {/* Grid column */}
                      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        {/* Content */}
                        <h6 className="text-uppercase fw-bold">Company name</h6>
                        <hr
                          className="mb-4 mt-0 d-inline-block mx-auto"
                          style={{
                            width: 60,
                            backgroundColor: "#7c4dff",
                            height: 2,
                          }}
                        />
                        <p>
                          Here you can use rows and columns to organize your
                          footer content. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit.
                        </p>
                      </div>
                      {/* Grid column */}
                      {/* Grid column */}
                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase fw-bold">Products</h6>
                        <hr
                          className="mb-4 mt-0 d-inline-block mx-auto"
                          style={{
                            width: 60,
                            backgroundColor: "#7c4dff",
                            height: 2,
                          }}
                        />
                        <p>
                          <a href="#!" className="text-dark">
                            MDBootstrap
                          </a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">
                            MDWordPress
                          </a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">
                            BrandFlow
                          </a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">
                            Bootstrap Angular
                          </a>
                        </p>
                      </div>
                      {/* Grid column */}
                      {/* Grid column */}
                      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase fw-bold">Useful links</h6>
                        <hr
                          className="mb-4 mt-0 d-inline-block mx-auto"
                          style={{
                            width: 60,
                            backgroundColor: "#7c4dff",
                            height: 2,
                          }}
                        />
                        <p>
                          <a href="#!" className="text-dark">
                            Your Account
                          </a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">
                            Become an Affiliate
                          </a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">
                            Shipping Rates
                          </a>
                        </p>
                        <p>
                          <a href="#!" className="text-dark">
                            Help
                          </a>
                        </p>
                      </div>
                      {/* Grid column */}
                      {/* Grid column */}
                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        {/* Links */}
                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <hr
                          className="mb-4 mt-0 d-inline-block mx-auto"
                          style={{
                            width: 60,
                            backgroundColor: "#7c4dff",
                            height: 2,
                          }}
                        />
                        <p>
                          <i className="fas fa-home mr-3" /> New York, NY 10012,
                          US
                        </p>
                        <p>
                          <i className="fas fa-envelope mr-3" />{" "}
                          info@example.com
                        </p>
                        <p>
                          <i className="fas fa-phone mr-3" /> + 01 234 567 88
                        </p>
                        <p>
                          <i className="fas fa-print mr-3" /> + 01 234 567 89
                        </p>
                      </div>
                      {/* Grid column */}
                    </div>
                    {/* Grid row */}
                  </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div
                  className="text-center p-3"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                  © 2023 Copyright: Call Center System
                </div>
                {/* Copyright */}
              </footer>
              {/* Footer */}
            </div>
            {/* End of .container */}
          </>
        </section>
      </React.Fragment>
    );
  }
}

export default MainContent;
