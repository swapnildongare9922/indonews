import React, { Component } from "react";

class Blogs extends Component {
  render() {
    return (
      <>
        <div className="col-md-6 mt-1">
          <div className="card">
            <div className="card-body">
              {this.props.blog.video_url !== null ? (
                <video
                  className="container-fluid"
                  src={this.props.blog.video_url}
                  controls
                ></video>
              ) : (
                  <img
                    className="card-img-top img-fluid"
                    src={this.props.blog.profile_url}
                    alt="Card image cap"
                  />
                )}
              <div className="text-fluid">
                <p>
                  <strong>{this.props.blog.heading} </strong>
                </p>
              </div>
              <p
                style={{
                  maxHeight: "100px",
                  minHeight: "100px",
                  overflow: "hidden",
                }}
              >
                {this.props.blog.content}content
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Blogs;
