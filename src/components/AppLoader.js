import React, { Component } from "react";
import Loader from 'react-loader-spinner'

class AppLoader extends Component {
  render() {
    const { loader } = this.props;
    return (
      <div>
        {loader && (
          <>
            <div className="container " style={{ margin:'150px'}}>
              <div className="row">
                <div className="col-5"></div>
                <div className="col-4">
                  <Loader type="Bars" color="#00BFFF" height={80} width={80} />
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default AppLoader;
