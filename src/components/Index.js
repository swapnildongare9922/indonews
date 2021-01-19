import { Component } from "react";
import { Link } from "react-router-dom";

class Index extends Component {


    render() {

        return (
            <>
               {/* <!-- partial:partials/_navbar.html --> */}
            <header id="header">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="navbar-top">
                            <div className="d-flex justify-content-between align-items-center">
                                <ul className="navbar-top-left-menu">
                                    {/* <li className="nav-item">
                                        <a href="pages/index-inner.html" className="nav-link">Advertise</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/aboutus.html" className="nav-link">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/singlenews" className="nav-link">Single news</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Write for Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">In the Press</a>
                                    </li> */}
                                </ul>
                                <ul className="navbar-top-right-menu">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link"><i className="mdi mdi-magnify"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">Sign in</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/profile" className="nav-link">profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <a className="navbar-brand" href="#"   >
                                        {/* <img src="./frontend/images/logo.svg" alt=""       /> */}
                                        <h3 className="text-white text-bold">indonews.live</h3>
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
                                        <ul
                                            className="navbar-nav d-lg-flex justify-content-between align-items-center"
                                        >
                                            <li>
                                                <button className="navbar-close">
                                                    <i className="mdi mdi-close"></i>
                                                </button>
                                            </li>
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/preferences">Prefferences</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/addblog">Add Blog</Link>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/sports.html">Sports</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/art.html">Art</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/politics.html">POLITICS</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/travel.html">Travel</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/contactus.html">Contact</a>
                                            </li>
                                            <li className="nav-link">
                                                <div className="col-12">
                                                    <div className="text-fluid bg-white p-2 m-2 text-center" style={{ float: 'right', borderRadius: '100px', fontSize: '25px', height: '50px', width: '50px' }} title="logout" >
                                                        <i className="fa fa-sign-out" aria-hidden="true" ></i>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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
            </>
        )
    }
}

export default Index;