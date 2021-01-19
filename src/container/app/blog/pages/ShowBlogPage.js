import axios from 'axios';
import React, { Component } from 'react'
import { withRouter } from 'react-router';
import AppBody from '../../../../components/AppBody';
import Title from '../../../../components/Title';
import helper from '../../../../utils/helper';
import TimelineBlogs from '../component/TimelineBlogs';

const user = helper.user();
class ShowBlogPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            allBlogs: [],
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        // axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`

        axios.get('http://indonews.live/api/get-blogs')
            .then(res => {
                this.setState({ loading: false, allBlogs: res.data.list })
                console.log(res)
            }).catch(err => {
                this.setState({ loading: false })
            })
    }

    render() {
        return (
            <AppBody
                loader={this.state.loading}
                content={
                    <>
                        <Title content="Blogs"/>
                        <div className="container-fluid">
                            <div className="row">
                                    {
                                        this.state.allBlogs.map(blog => {
                                            return (
                                                <>
                                                    <div className="col-md-6 p-0 m-0">
                                                        <TimelineBlogs blog={blog} edit={false} />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                    </>
                }
            />
        )
    }
}
export default withRouter(ShowBlogPage);