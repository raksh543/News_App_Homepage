import React from "react";
import AboutUs from "./AboutUs";

export default function Footer() {
  return (
    <div className="container container-footer">
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container1">
            <div className="row">
              <div className="col-md-3 col-sm-6 ">
                <div className="aboutUs mx-3 mb-3">
                  <AboutUs />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4 className="title-footer">RECENT ARTICLES</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="# ">sea takimata sanctus est</a>
                    </li>
                    <li>
                      <a href="# ">Advertise with Us</a>
                    </li>
                    <li>
                      <a href="# ">Careers</a>
                    </li>
                    <li>
                      <a href="# ">sea takimata saxbd kss</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                  <h4 className="title-footer">RECENT COMMENTS</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="# ">sea takimata sanctus est</a>
                    </li>
                    <li>
                      <a href="# ">sea takimata sanctus est</a>
                    </li>
                    <li>
                      <a href="# ">sea takimata sanctus est</a>
                    </li>
                    <li>
                      <a href="# ">sea takimata sanctus est</a>
                    </li>
                    <li>
                      <a href="# ">Feedback</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4 className="title-footer">FOLLOW US</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a href="# " className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# " className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# " className="icoInstagram" title="Instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# " className="icoGooglePlus" title="GooglePlus">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  &copy; Copyright 2020 - Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
