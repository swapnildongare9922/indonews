import axios from 'axios';
import React, { Component } from 'react';
import AppBody from '../../../../components/AppBody';
import helper from '../../../../utils/helper';
import FlashMessage from 'react-flash-message';
const user = helper.user();
class UserUpdateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: '',
            name: '',
            email: '',
            phone: '',
            userDetails: [],
            loading: false,
            error: false,
            errorMessage: ''
        }
    }
    componentDidMount() {
        this.setState({ loading: true });
        axios.get('http://indonews.live/api/profile', {
            headers: { "Authorization": `Bearer ${user.access_token}` }
        }).then(res => {
            this.setState({ name: res.data.name, email: res.data.email, phone: res.data.mobile_no, image: res.data.profile_pic, loading: false });
        }).catch(err => {
            console.log(err);
            this.setState({ loading: false });
        })
    }

    inputChangeHandler(e) { this.setState({ [e.target.name]: e.target.value }) }

    updateProfileHandler = async (e) => {
        const { name, phone, email } = this.state;
        this.setState({ loading: true })
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
            axios.post('http://indonews.live/api/update-profile', {
                headers: { "Authorization": `Bearer ${user.access_token}` },
                name: name,
                email: email,
                mobile_no: phone,
            }).then(res => {
                this.setState({ loading: false, error: true, errorMessage: 'Profile updated !' })
                console.log(res)
            }).catch(err => {
                this.setState({ loading: false })
            })
        } catch (error) {
            console.log(error)
        }
    }

    updateProfilePicture = e => {
        const { image } = this.state;
        this.setState({ loading: true })
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
            axios.post('http://indonews.live/api/upload-profile-picture', {
                headers: { "Authorization": `Bearer ${user.access_token}` },
                image: e.target.files[0]
            }).then(res => {
                this.setState({ loading: false, image: res.data })
                console.log(res)
            }).catch(err => {
                this.setState({ loading: false })
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { name, phone, email, image } = this.state;
        return (
            <AppBody
                loader={this.state.loading}
                content={
                    <>
                        <div className="container">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6">
                                    {
                                        this.state.error ?
                                            <FlashMessage duration={5090} persistOnHover={true}>
                                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                                    <strong>{this.state.errorMessage}</strong>
                                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            </FlashMessage>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <div className="card mt-5 mb-5 p-5">
                                        <div className="form-group text-center">
                                            <img className="img" src={image} style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '100px', height: '200px', width: '200px', cursor: 'pointer' }} onClick={this.imageClickHandler} />
                                            <input type="file" name="image" id="updateImage" onChange={e => { this.updateProfilePicture(e) }} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" placeholder="Name" name="name" id="name" value={name} onChange={e => { this.inputChangeHandler(e) }} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" name="email" placeholder="Email" id="email" value={email} onChange={e => { this.inputChangeHandler(e) }} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Mobile No.</label>
                                            <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" value={phone} onChange={e => { this.inputChangeHandler(e) }} />
                                        </div>
                                        <div className="form-group">
                                            <button className="form-control btn btn-warning" onClick={this.updateProfileHandler}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }

            />
        )
    }
}

export default UserUpdateProfile;