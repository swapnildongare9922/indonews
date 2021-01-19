import React, { Component } from "react";
import { withRouter } from "react-router";
import AppBody from "../../../../components/AppBody";

class SingleNewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
    };
  }
  componentDidMount() {
    const {
      match: {
        params: { news },
      },
    } = this.props;
    //this.setState({ news:JSON.stringify( news) });
    console.log(JSON.stringify(news));
  }
  render() {
    const news = localStorage.getItem("news");
    let result = JSON.parse(news);
    console.log(result);
    return (
      <AppBody
        content={
          <div>
            <div className="container">
              <div className="row card">
                <div className="col card-header bg-light">
                  <img
                    src={result.urlToImage}
                    alt=""
                    className=""
                    height="100"
                    width="300"
                  />
                </div>
                <div className="card-body">
                  <span className="text-secondary"></span>
                  <span className="btn btn-primary ml-3">
                    {result.source.name}
                  </span>
                  <div className="text-fluid text-bold">
                    <strong>
                      <p>{result.title}</p>
                    </strong>
                    <p>{result.content}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <p className="text-secondary">Trending News</p>
              </div>
            </div>
          </div>
        }
      />
    );
  }
}
export default withRouter(SingleNewsPage);
