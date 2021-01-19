import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import helper from "../../../utils/helper";
import { apiUtils } from "../../../utils/api";
import appRoutes from "../../../routes/app";
import AppBody from "../../../components/AppBody";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      password: "",
      name: "",
      email: "",
      loading: false,
      error: [],
      err: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    this.setState({ error: [] });
    const {name,mobile, email, password } = this.state;
    e.preventDefault();
    axios
      .post("http://indonews.live/api/register", {
        name: name,
        email: email,
        mobile_no: mobile,
        password: password,        
      })
      .then((res) => {
        helper.storeLogin(res.data);
        apiUtils.setHeaderAuthToken(res.data.access_token);
        this.props.history.push(appRoutes.base);
      })
      .catch((err) => {
        if (err) {
          let er = err.response;
          if (er && er.status === 422) {
            this.setState({ error: er.data });
          }
          if (er && er.status === 500) {
            this.setState({ err: "Internal Server error." });
          }
        }
      });
  };
  render() {
    const { name, mobile, email, password,error} = this.state;
    return (
      <AppBody
        content={
          <div className="container " style={{ marginTop: "60px" }}>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-5">
                <div className="card p-5" style={{ borderRadius: "50px" }}>
                  <strong>
                    <h2 className="text-center">Register</h2>
                  </strong>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder=""
                      value={name}
                      onChange={this.handleChange}
                    />
                    <span className="val-err">{error && error.name}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder=""
                      value={email}
                      onChange={this.handleChange}
                    />
                    <span className="val-err">{error && error.email}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      value={mobile}
                      onChange={this.handleChange}
                    />
                    <span className="val-err">{error && error.mobile_no}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <span className="val-err">{error && error.password}</span>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-info form-control"
                      onClick={this.handleSubmit}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    );
  }
}
export default withRouter(RegisterPage);
