import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppBody from "../../../components/AppBody";
import axios from "axios";
import apiRoutes from "../../../routes/api";
import helper from "../../../utils/helper";
import { apiUtils } from "../../../utils/api";
import appRoutes from "../../../routes/app";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      error: [],
      err:{},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {

    this.setState({loading:true})
    this.setState({error:[]});  
    const { email, password } = this.state;
    e.preventDefault();
    axios
      .post("http://indonews.live/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);        
        helper.storeLogin(res.data);
        apiUtils.setHeaderAuthToken(res.data.access_token);
        this.props.history.push(appRoutes.base);
        this.setState({loading:false})
      })
      .catch((err) => {
        this.setState({loading:false})       
        if(err){
        let er = err.response;        
        if (er&&er.status===422) {
          this.setState({ error: er.data });
        }     
        if (er&&er.status===401) {
          this.setState({ err: er.data });
        }   
      }
    });
  };

  render() {
    const { email, error, err,password } = this.state;           
    return (
      <AppBody
        loader={this.state.loading}
        content={
          <div className="container" style={{ marginTop: "70px" }}>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-5">
                <div className="card p-5" style={{ borderRadius: "50px" }}>
                  <strong>
                    <h2 className="text-center">Login</h2>
                  </strong>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder=""
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <span className="val-err">{error && error.email}</span>
                    <span className="val-err">{err && err.error}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <span className="val-err">{error && error.password}</span>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-info form-control"
                      type="button"
                      onClick={this.handleSubmit}
                    >
                      Login
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
export default withRouter(LoginPage);
