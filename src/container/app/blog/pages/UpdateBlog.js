import axios from "axios";
import React, { Component } from "react";
import FlashMessage from 'react-flash-message';
import { withRouter } from "react-router";
import AppBody from "../../../../components/AppBody";
import appRoutes from "../../../../routes/app";
import helper from "../../../../utils/helper";


const user = helper.user();

class UpdateBlog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categoryApi: [],
            languageApi: [],
            title: '',
            heading: '',
            description: '',
            category: '',
            language: '',
            blog_image: '',
            blog_video: '',
            blog_image_url: '',
            blog_video_url: '',
            loading: true,
            error: false,
            errorMessage: ''

        }
        this.blogUpdateHandler = this.blogUpdateHandler.bind(this);
    }

    componentDidMount() {

        axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
        axios.get('http://indonews.live/api/categories-languages', {
            headers: { "Authorization": `Bearer ${user.access_token}` }
        }).then(res => {
            this.setState({ languageApi: res.data.Language })
            this.setState({ categoryApi: res.data.Category, loading: false })

        }).catch(err => {
            this.setState({ loading: false })
        });

        const { match: { params: { id } } } = this.props;
        axios.post('http://indonews.live/api/get-blog', {
            headers: { "Authorization": `Bearer ${user.access_token}` },
            id: id,
        }).then(res => {
            this.setState({
                category: res.data.category,
                language: res.data.languae,
                title: res.data.title,
                heading: res.data.heading,
                description: res.data.content,
            })

        }).catch(err => {
            this.setState({ loading: false })
        });
    }

    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    blogUpdateHandler() {

        this.setState({ loading: true })
        const { match: { params: { id } } } = this.props;
        const { title, heading, description, category, language } = this.state;

        axios.post('http://indonews.live/api/update-blog', {
            headers: { "Authorization": `Bearer ${user.access_token}` },
            id: id,
            title: title,
            category_id: category,
            language_id: language,
            heading: heading,
            contents: description

        }).then(res => {
            this.setState({ loading: false,error:true,errorMessage:'Blog Updated !' })
            this.props.history.push(appRoutes.app.profile.my_profile);

        }).catch(err => {
            this.setState({ loading: false,error:true,errorMessage:'unable to update !' })
            console.log(err)
        })
    }
    render() {

        return (
            <AppBody
                loader={this.state.loading}
                content={
                    <>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
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
                                <div className="col-md-2"></div>
                                <div className="col-md-8 card mt-1 mb-5">
                                    <div className="card-header bg-white text-center">
                                        <h2><strong>Add Blog</strong></h2>
                                    </div>
                                    <div className="card-body">
                                        <form action="" encType="">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="language">Select language</label>
                                                        <select name="language" id="language" className="form-control" onChange={e => { this.handleChange(e) }}>
                                                            <option value={null}>Select --</option>
                                                            {this.state.languageApi.map(lang => {
                                                                return <option value={lang.id} >{lang.title}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="category">Select Category</label>
                                                        <select name="category" id="category" className="form-control" onChange={e => { this.handleChange(e) }}>
                                                            <option value={null}>Select --</option>
                                                            {this.state.categoryApi.map(cat => {
                                                                return <option value={cat.id}>{cat.title}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="title">Title</label>
                                                <input type="text" id="title" name="title" className="form-control" value={this.state.title} onChange={e => { this.handleChange(e) }} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <textarea name="description" id="description" cols="30" rows="5" className="form-control" style={{ resize: 'none' }} onChange={e => { this.handleChange(e) }}>
                                                    {this.state.description}
                                                </textarea>
                                            </div>

                                            <div className="row">
                                                <div className="form-group">
                                                    <input type="file" name="blog_image" id="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <img src="" alt="" id="image" />
                                                </div>
                                            </div>

                                            <div className="card-footer bg-white">
                                                <button className="btn btn-info form-control" type="button" onClick={this.blogUpdateHandler}>Update</button>
                                            </div>
                                        </form>
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

export default withRouter(UpdateBlog);