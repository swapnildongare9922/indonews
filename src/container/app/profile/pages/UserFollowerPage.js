import React ,  {Component} from 'react';

class UserFollowerPage extends Component {

    render(){

        return(
            <>
                <div className="card mt-1 border border-secondary">
                    <div className="row mt-1 text-center">
                        <div className="col">
                            {this.props.user.profile_url != null ?
                                <img src={this.props.user.profile_url} alt="" height="70px" width="70px" style={{ borderRadius: '100px' }} />
                                :
                                <img src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png" alt="" height="70px" width="70px" style={{ borderRadius: '100px' }} />
                            }
                        </div>
                        <div className="col  mt-4">{this.props.user.name}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default UserFollowerPage;