import React, { Component } from 'react'
import AppBody from '../../../../components/AppBody';
import axios from "axios";
import { Link } from "react-router-dom";
import helper from '../../../../utils/helper';
import TimeLineBlogs from '../../blog/component/TimelineBlogs';
import UserFollowerPage from './UserFollowerPage';
import UserFollowingPage from './UserFollowingPage';
import appRoutes from '../../../../routes/app';
import Title from '../../../../components/Title';
const user = helper.user();
class UserProfilePage extends Component {
    constructor(props) {
        super();
        this.state = {
            timelineBlogs: [],
            userDetails: [],
            userFollowerList: [],
            userFollowingList: [],
            loading: true,
            timeline: true,
            follower: false,
            following: false,
        }
    }
    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
        axios.get('http://indonews.live/api/profile', {
            headers: { "Authorization": `Bearer ${user.access_token}` }
        }).then(res => {
            this.setState({ userDetails: res.data, loading: false });
        }).catch(err => {
            console.log(err);
            this.setState({ loading: false });
        })

        axios.get('http://indonews.live/api/get-followers', {
            headers: { "Authorization": `Bearer ${user.access_token}` }
        }).then(res => {
            this.setState({ userFollowerList: res.data.list, loading: false });
        }).catch(err => {
            console.log(err);
            this.setState({ loading: false });

        })

        axios.get('http://indonews.live/api/get-follow', {
            headers: { "Authorization": `Bearer ${user.access_token}` }
        }).then(res => {
            this.setState({ userFollowingList: res.data.list })

        }).catch(err => {

        });

        axios.get('http://indonews.live/api/user-blogs', {
            headers: { "Authorization": `Bearer ${user.access_token}` }
        }).then(res => {
            this.setState({ timelineBlogs: res.data.list, loading: false });
        }).catch(err => {
            console.log(err);
            this.setState({ loading: false });
        })

    }

    changeSectionHandler(key) {
        switch (key) {
            case 1:
                this.setState({
                    timeline: true,
                    follower: false,
                    following: false,
                })
                break;
            case 2:
                this.setState({
                    timeline: false,
                    follower: true,
                    following: false,
                })
                break;
            case 3:
                this.setState({
                    timeline: false,
                    follower: false,
                    following: true,
                })
                break;
            default:
                break;
        }
    }
    render() {
        const { userDetails } = this.state;
        return (
            <AppBody
                loader={this.state.loading}
                content={
                    <>
                        <div className="container-fluid">
                            <div className="row" style={{ background: ' rgb(2,0,36)', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)', height: '250px' }}>
                            </div>
                            <div className="row">
                                <div className="col-md-3 text-center">
                                    {
                                        this.state.userDetails.profile_pic != null ?
                                            <img className="img" src={this.state.userDetails.profile_pic} style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '100px', height: '200px', width: '200px', marginTop: '-100px' }} />
                                            :

                                            <img className="img" src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png" style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '100px', height: '200px', width: '200px', marginTop: '-100px' }} />
                                    }

                                </div>
                                <div className="col-md-2 mt-3">
                                    <div className="row">
                                        <div className="col-12">
                                            <strong>{this.state.userDetails.name}</strong>
                                        </div>
                                        <div className="col-12">
                                            {this.state.userDetails.email}
                                        </div>
                                        <div className="col-12">
                                            {this.state.userDetails.mobile_no}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className={`col mt-5 ${this.state.timeline ? 'text-info' : null}`} style={{ cursor: 'pointer' }} onClick={e => { this.changeSectionHandler(1) }}><span style={{ textDecoration: 'none', textDecorationColor: 'black' }}><strong>Timeline</strong></span></div>
                                        <div className={`col mt-5 ${this.state.follower ? 'text-info' : null}`} style={{ cursor: 'pointer' }} onClick={e => { this.changeSectionHandler(2) }}><span style={{ textDecoration: 'none', textDecorationColor: 'black' }}><strong>Followers</strong> <span style={{ color: '#b3b3b3' }}>{this.state.userDetails.followers}</span></span></div>
                                        <div className={`col mt-5 ${this.state.following ? 'text-info   ' : null}`} style={{ cursor: 'pointer' }} onClick={e => { this.changeSectionHandler(3) }}><span style={{ textDecoration: 'none', textDecorationColor: 'black' }}><strong>Following</strong> <span style={{ color: '#b3b3b3' }}>{this.state.userDetails.follow}</span></span></div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3 mt-5 text-center" style={{ fontSize: '30px' }}>
                                    <Link to="/update-profile" >
                                        <span class="border border-primary p-2" style={{ borderRadius: "80px" }}>
                                            <i class="fa fa-cog" aria-hidden="true" ></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <section className="mt-5" style={{ border: '1px solid #c0c0c0' }}></section>
                        {
                            this.state.timeline
                                ?
                                <>
                                    <Title content="Timeline Blogs" />
                                    <div className="container-fluid">
                                        {
                                            this.state.timelineBlogs.map(blog => {
                                                return (
                                                    <>
                                                        <div className="row">
                                                            <div className="col-md-2"></div>
                                                            <div className="col-md-8">
                                                                <TimeLineBlogs blog={blog} key={blog.id} user={this.state.userDetails} />
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            })
                                        }
                                    </div>
                                </>
                                :
                                this.state.follower
                                    ?

                                    <>
                                        <Title content="Followers" />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-3"></div>
                                                <div className="col-6">
                                                    {
                                                        this.state.userFollowerList.map(follower => {
                                                            return <UserFollowerPage user={follower} />
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                    <Title content="Following" />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-3"></div>
                                                <div className="col-6">
                                                    {
                                                        this.state.userFollowingList.map(following => {
                                                            return <UserFollowingPage user={following} />
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </>
                        }
                    </>
                } />
        )
    }
}
export default UserProfilePage;