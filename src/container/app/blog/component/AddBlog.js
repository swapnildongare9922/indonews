import React, { Component } from 'react';
import AppBody from '../../../../components/AppBody';
import Loader from 'react-loader-spinner';
import FlashMessage from 'react-flash-message'
import helper from '../../../../utils/helper';
import axios from 'axios';

const user = helper.user();

class AddBlog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categoryApi: [],
            languageApi: [],
            category_id: '',
            language_id: '',
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
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {

        axios.get('http://indonews.live/api/categories-languages', {
            headers: { "Authorization": `Bearer ${user.access_token}` }
        }).then(res => {
            this.setState({ languageApi: res.data.Language })
            this.setState({ categoryApi: res.data.Category, loading: false })

        }).catch(err => {
            this.setState({ loading: false })
        });

    }

    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    imageChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] })
        console.log(this.state.blog_image)
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`;
        axios.post('http://indonews.live/api/upload', {
            headers: { "Authorization": `Bearer ${user.access_token}` },
            blog_image: this.state.blog_image,
            blog_video: this.state.blog_video,

        }).then(res => {
            console.log(res)
        })
    }

    addBlogHandler = async (e) => {
        const { title, description, language, category, blog_image, blog_video, blog_video_url, blog_image_url } = this.state;


        // const blogImageRes = await axios.post('http://indonews.live/api/upload', {
        //     headers: { "Authorization": `Bearer ${user.access_token}` },
        //     blog_image: blog_image,
        //     blog_video: blog_video,

        // });
        // if (blogImageRes.status === 200) {
        //     this.setState({ blog_image_url: blogImageRes.blog_image, blog_video_url: blogImageRes.blog_video })
        //     console.log(blogImageRes);
        // } else {
        //     console.log("error")
        // }

        try {
            this.setState({ loading: true })
            axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`;
            axios.post('http://indonews.live/api/create-blog', {
                headers: { "Authorization": `Bearer ${user.access_token}` },
                title: title,
                contents: description,
                language_id: language,
                category_id: category,
            }).then(res => {
                console.log(res)
                this.setState({ loading: false, error: true, errorMessage: 'Blog added successfully !' })
            }).catch(err => {
                console.log(err)
                this.setState({ loading: false })
            })
        } catch (error) {
            console.log(error)
        }

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
                                                                return <option value={lang.id}>{lang.title}</option>
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
                                                <input type="text" id="title" name="title" className="form-control" onChange={e => { this.handleChange(e) }} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <textarea name="description" id="description" cols="30" rows="5" className="form-control" style={{ resize: 'none' }} onChange={e => { this.handleChange(e) }}></textarea>
                                            </div>

                                            <div className="row">
                                                <div className="form-group">
                                                    <input type="file" name="blog_image" id="" className="form-control" onChange={e => { this.imageChangeHandler(e) }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <img src="" alt="" id="image" />
                                                </div>
                                            </div>

                                            <div className="card-footer bg-white">
                                                <button className="btn btn-info form-control" type="button" onClick={this.addBlogHandler}>Publish</button>
                                            </div>
                                        </form>
                                        <button className="form-control btn btn-warning" onClick={this.refresh}>Refrsh</button>
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

export default AddBlog;