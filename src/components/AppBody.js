import React, { Component } from "react";
import AppLoader from "./AppLoader";
import Footer from "./Footer";
import NavBar from "./NavBar";

class AppBody extends Component {
  render() {
    const { content, loader } = this.props;
    return (
      <div>
        <NavBar />
        
        {loader ? <AppLoader loader={loader} /> : content}
        <Footer />
      </div>
    );
  }
}
export default AppBody;
