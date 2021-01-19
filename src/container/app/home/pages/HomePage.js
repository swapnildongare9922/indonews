import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import AppBody from "../../../../components/AppBody";
import News from "../component/News";
import Blogs from "../../blog/component/Blogs";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topHeadlines: [],
      blogs: [],
      newsLoader: true,
      homeBlogsLoader: true,
    };
  }
  componentDidMount() {
    axios.get(`http://indonews.live/api/get-news`).then((res) => {
      let r = JSON.parse(res.data.news);
      this.setState({ topHeadlines: r.articles, newsLoader: false });
      console.log(r);
    });

    axios.get(`http://indonews.live/api/home-blogs`).then((res) => {
      this.setState({ blogs: res.data.list, homeBlogsLoader: false });
    });
  }
  render() {
    const { topHeadlines, blogs,homeBlogsLoader } = this.state;
    return (
      <AppBody
       loader={homeBlogsLoader}  
       content={
          <div>
            <div className="container-fluid">
              <div className="row" data-aos="fade-up">
                <div className="col-12 stretch-card grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        {topHeadlines.map((head) => {
                          return <News news={head} />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container  mt-3">
              <div className="row">
                <div className="text-secondary">
                  <h3>Blogs</h3>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                {blogs&& blogs.map((res) => {                    
                    return <Blogs blog={res} />;
                })}
              </div>
            </div>
          </div>
        }
      />
    );
  }
}
export default withRouter(HomePage);
