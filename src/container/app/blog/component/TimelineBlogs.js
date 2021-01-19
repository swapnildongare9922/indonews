import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import helper from '../../../../utils/helper';
import appRoutes from '../../../../routes/app';

const user = helper.user();
class TimeLineBlogs extends Component {

    render() {

        const deleteBlogHandler = async (id) => {
            this.setState({ loading: false, error: true, errorMessage: 'Blog Updated !' })
            axios.post('http://indonews.live/api/delete-blog', {
                headers: { "Authorization": `Bearer ${user.access_token}` },
                id: id
            }).then(res => {
                window.location.reload()
            }).catch(err => {
                console.log(err);
            })




        }
        const likeBlog = async (id) => {
            const res = await axios.post('http://localhost:8000/api/like-blog', {
                blog_id: id
            });
            if (res.status === 200) {
                alert('liked')
            }
        }

        return (

            <>
                {/* post */}
                <div className="row mt-3 p-0 m-0">
                    <div className="col">
                        <div className="card" style={{ border: '1px solid #c0c0c0'}}>

                            <div className="card-header bg-white">
                                <div className="row p-0 m-0">
                                    <div className="col-2">
                                        <img src={this.props.blog.profile_url} alt="" height="40px" width="40px" style={{ borderRadius: '100px' }} />
                                    </div>
                                    <div className="col-3 text-fluid">{this.props.blog.name} </div>
                                    <div className="col text-secondary text-fluid text-right">
                                        {this.props.blog.date} {this.props.blog.time}
                                        {/* <button onClick={e=>{deleteBlogHandler(this.props.blog.id)}}>delete</button> */}
                                        {
                                            this.props.edit === false ?
                                                null
                                                :
                                                <>
                                                    <Link to={`/blog/edit/${this.props.blog.id}`}>
                                                        <span className="bg-success text-white ml-2" style={{ height: '20px', width: '40px', border: '1px solid #c0c0c0', padding: '5px', borderRadius: '100px', cursor: 'pointer' }} >
                                                            edit
                                            </span>
                                                    </Link>
                                                    <span className="bg-danger text-white ml-2" style={{ height: '20px', width: '20px', border: '1px solid #c0c0c0', padding: '5px', borderRadius: '100px', cursor: 'pointer' }} onClick={e => { deleteBlogHandler(this.props.blog.id) }}>
                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                    </span>
                                                </>
                                        }


                                    </div>
                                </div>
                            </div>
                            <div className="card-body">

                                <img className="card-img-top" src={this.props.blog.image_url} alt="Card image cap" height="500px" width="70%" />
                                <div className="text-fluid">
                                    <p>
                                        <strong>{this.props.blog.heading}</strong>
                                    </p>
                                </div>
                                <p style={{ height:'300px',overflow:'scroll',  }}>
                                    {this.props.blog.content}
                                </p>
                                <div className="container-fluid text-center card p-1 text-secondary">
                                    <div className="row">
                                        <div className="col-6 " style={{ borderRight: '1px solid #c0c0c0' }}>
                                            <i class="fas fa-thumbs-up" style={{ fontSize: '30px', cursor: 'pointer' }} onClick={e => { likeBlog(this.props.blog.id) }}></i>
                                        </div>
                                        {/* <div className="col-6 text-primary" style={{ borderRight :'1px solid #c0c0c0' }}>
                                        <i class="fas fa-thumbs-up" style={{ fontSize:'30px' ,cursor:'pointer'}} onClick={e=>{unlikeBlog(this.props.blog.id)}}></i>
                                        </div> */}
                                        <div className="col-6" style={{ borderLeft: '1px solid #c0c0c0' }}>
                                            <i class="far fa-comment" style={{ fontSize: '30px', cursor: 'pointer' }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* post */}
            </>

        )
    }
}

export default withRouter(TimeLineBlogs);