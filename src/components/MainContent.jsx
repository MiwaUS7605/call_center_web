import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { firestoreDb, auth} from "../config/firebase.config";
import { collection, getCountFromServer } from "firebase/firestore";
// import { ref, onValue } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth"


const MainContent = () => {
  const [customerInstall, setCustomerInstall] = useState(0);
  const [driverAvailable, setDriverAvailable] = useState(0);
  // const [totalBooking, setTotalBooking] = useState(0);


  useEffect(() => {
    const getCustomerInstall = async () => {
      const coll = collection(firestoreDb, "Customer");
      const snapshot = await getCountFromServer(coll);
      setCustomerInstall(snapshot.data().count);
    }

    const getDriverAvailable = async () => {
      const coll = collection(firestoreDb, "driver");
      const snapshot = await getCountFromServer(coll);
      setDriverAvailable(snapshot.data().count);
    }

    // const getTotalBooking = async () => {
    //     const bookingRef = ref(realtimeDb, 'Bookings/count');
    //     onValue(bookingRef, (snapshot) => {
    //       const data = snapshot.val();
    //       setTotalBooking(data);
    //     })
    // }

    const signIn = async () => {
      try {
        var email = process.env.REACT_APP_EMAIL;
        var password = process.env.REACT_APP_PASSWORD;
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
      }
      catch (err) {
        console.error(err.message);
      }
    }
    
    signIn();
    getCustomerInstall();
    getDriverAvailable();
    // getTotalBooking();

  }, []);

  return (
    <React.Fragment>
      <section class="main-content">
        <article class="index-intro">
          <div class="container">
            <div class="jumbotron jumbotron-fluid">
              <h1 class="display-4 text-center font-monospace text-shadow text-white">B-TAXI CALL CENTER</h1>
              <p class="lead text-center font-monospace text-shadow text-white">Go any where, any time</p>
            </div>
          </div>
        </article>

        <div class="container">
          <div class="d-flex flex-sm-column flex-lg-row display-5 mt-5 justify-content-center">
            <div class="mx-3">
              Book now: +84 444 5555 666 <span class="text-center">
                <FontAwesomeIcon icon={faPhoneVolume} fixedWidth />
              </span>
            </div>

          </div>

          <div class="row justify-content-between">
            <article class="col-md-6">
              <div class="container mt-5">
                <div class="card">
                  <h1 class="display-6">With VIP account, you can:</h1>
                  <p class="lead">1. Schedule booking in advance</p>
                  <p class="lead">2. Priority access to high-demand areas</p>
                  <p class="lead">3. Exclusive discounts and promotions</p>
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
                  <a class="btn btn-primary btn-lg" href="./" role="button">
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
                  <p class="card-text">{customerInstall} Customers have installed our App</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-lg-4 col-xl-3">
              <div class="card-fact text-center">
                <div class="card-body">
                  <p class="card-text">{driverAvailable} Drivers are ready to pick you up</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-lg-4 col-xl-3">
              <div class="card-fact text-center">
                <div class="card-body">
                  <p class="card-text">
                    <b>100%</b> of the trips were successfully booked
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
      <div class="fixed-bottom mx-3 my-4" data-bs-toggle="tooltip" data-bs-placement="left" title="Need any help?">
        <a href="./" class="float-end">
          <img
            class="img-fluid"
            maxWidth="100%"
            width="100"
            height="100"
            src={require("../assets/question-mark.png")}
            alt="Help"
          ></img>
        </a>
      </div>
    </React.Fragment>
  );
};

export default MainContent;
