import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import appRoutes from "../routes/app";
import { apiUtils } from "../utils/api";
import helper from "../utils/helper";

class NavBar extends Component {
  render() {
    const user = helper.user();
    return (
      <div>
        <header id="header">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="navbar-top">
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="navbar-top-left-menu"></ul>
                  {!user && (
                    <ul className="navbar-top-right-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="mdi mdi-magnify"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/register" className="nav-link">
                          Sign in
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="navbar-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <a className="navbar-brand" href="#">
                      {/* <img src="./frontend/images/logo.svg" alt=""       /> */}
                      <h1 className="text-white text-bold">indonews.live</h1>
                    </a>
                  </div>
                  <div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="navbar-collapse justify-content-center collapse"
                      id="navbarSupportedContent"
                    >
                      {user && (
                        <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                          <li>
                            <button className="navbar-close">
                              <i className="mdi mdi-close"></i>
                            </button>
                          </li>
                          <li className="nav-item active">
                            <Link className="nav-link" to="/">
                              Home
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link className="nav-link" to="/preference">
                              Prefferences
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/blogs">
                              Blogs
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/blog/add">
                              Post Blog
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/my-profile">
                              Profile
                            </Link>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/contactus.html">
                              Contact
                            </a>
                          </li>
                          <li
                            className="nav-item"
                            onClick={() => {
                              helper.logout();
                              apiUtils.removeHeaderAuthToken();
                            }}
                          >
                            <a className="nav-link" href="">
                              Logout
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="#">
                        <i className="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
