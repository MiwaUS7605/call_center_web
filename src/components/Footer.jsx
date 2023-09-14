
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMessage, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons'


class Footer extends Component {
    render() {
        return (
            <section>
                <>
                    <div className="container my-5">
                        {/* Footer */}
                        <footer
                            className="text-center text-lg-start text-dark"
                            style={{ backgroundColor: "#ECEFF1" }}
                        >
                            {/* Section: Social media */}
                            <section
                                className="d-flex justify-content-between p-4 text-white"
                            >
                                {/* Left */}
                                <div className="me-5">
                                    {/* <span>Get connected with us on social networks:</span> */}
                                </div>
                                {/* Left */}
                                {/* Right */}
                                <div>
                                    
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
                                            <h6 className="text-uppercase fw-bold">B-TAXI</h6>
                                            <hr
                                                className="mb-4 mt-0 d-inline-block mx-auto"
                                                style={{
                                                    width: 60,
                                                    backgroundColor: "#7c4dff",
                                                    height: 2,
                                                }}
                                            />
                                            <p>
                                                Your seamless and reliable taxi service. Hail cabs from anywhere, and our dedicated team will connect you with the nearest driver. Enjoy prompt and safe transportation with us!
                                            </p>
                                        </div>
                                        {/* Grid column */}
                                        {/* Grid column */}
                                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                            {/* Links */}
                                            <h6 className="text-uppercase fw-bold">Services</h6>
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
                                                    Transport
                                                </a>
                                            </p>
                                            <p>
                                                <a href="#!" className="text-dark">
                                                    Others...
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
                                            <div className="d-inline-flex flex-row">
                                                <FontAwesomeIcon className="mt-0.5" icon={faHome} />
                                                <div className="ms-3">
                                                    227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh
                                                </div>
                                            </div>

                                            <div className="d-inline-flex flex-row">
                                                <FontAwesomeIcon className="mt-0.5" icon={faMessage} />
                                                <div className="ms-3">
                                                    callcenter.admin@gmail.com
                                                </div>
                                            </div>

                                            <div className="d-inline-flex flex-row">
                                                <FontAwesomeIcon className="mt-0.5" icon={faPhone} />
                                                <div className="ms-3">
                                                    + 84 444 5555 666
                                                </div>
                                            </div>

                                            <div className="d-inline-flex flex-row">
                                                <FontAwesomeIcon className="mt-0.5" icon={faPrint} />
                                                <div className="ms-3">
                                                    + 84 444 5555 666
                                                </div>
                                            </div>
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
        );
    }
}
export default Footer;