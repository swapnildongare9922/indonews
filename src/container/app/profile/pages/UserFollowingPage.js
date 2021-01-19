import axios from 'axios';
import React, { Component } from 'react';
import helper from '../../../../utils/helper';

const user = helper.user();
class UserFollowingPage extends Component {

    unfollowUser = async (id) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
        axios.post('http://indonews.live/api/un-follower', {
            headers: { "Authorization": `Bearer ${user.access_token}` },
            follower_id: id
        }).then(res=>{
            console.log(res);

        }).catch(err=>{
            console.log(err);
        })
    }
    render() {

        return (
            <>
                <div className="card m-2">
                    <div className="row p-2">
                        <div className="col-4">
                            {this.props.user.profile_pic != null ?
                                <img src={this.props.user.profile_pic} alt="" height="70px" width="70px" style={{ borderRadius: '100px' }} />
                                :
                                <img src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png" alt="" height="70px" width="70px" style={{ borderRadius: '100px' }} />
                            }
                        </div>
                        <div className="col-4">{this.props.user.name}</div>
                        <div className="col-4"><button className="btn btn-outline-success" onClick={e => { this.unfollowUser(this.props.user.id) }}>Unfollow</button></div>
                    </div>
                </div>

            </>
        )
    }
}

export default UserFollowingPage