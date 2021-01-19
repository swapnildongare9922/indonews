import React, { Component } from "react";
import { withRouter } from "react-router";
import appRoutes from "../../../../routes/app";

class News extends Component {

  onNewsClick = () => {
    localStorage.removeItem('news');
    const { news } = this.props;
    localStorage.setItem('news', JSON.stringify(news));
    this.props.history.push(appRoutes.app.news.news_details)
  }
  render() {
    const { news } = this.props;
    return (
      <>
        <div
          className="col-md-6" key={news.id}
          onClick={this.onNewsClick
          }
        >
          <div className="col-sm-4 grid-margin">
            <div className="position-relative">
              <div className="rotate-img">
                <img src={news.urlToImage} alt="thumb" class="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-sm-8  grid-margin">
            <h4 className="mb-2 font-weight-600">{news.title}</h4>
            <div className="fs-13 mb-2">
              <span className="mr-2"></span>
              {news.publishedAt}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(News);
