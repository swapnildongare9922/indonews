import React, { Component } from 'react'
import helper from '../../../../utils/helper';
import axios from "axios";
import { withRouter } from 'react-router';
import AppBody from '../../../../components/AppBody';
const user = helper.user();

class UserPreferencePage extends Component {
    constructor(props) {
        super();
        this.state = {
            languages: [],
            categories: [],
            langId: [],
            catId: [],
            loading:false
        }
        this.handleLangugeClick = this.handleLangugeClick.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.setState({loading:true})
        axios.get('http://indonews.live/api/categories-languages', {
            headers: { "Authorization": `Bearer ${user.access_token}` }
        }).then(res => {
            const language = res.data.Language;
            const categories = res.data.Category;
            this.setState({ languages: res.data.Language, categories: res.data.Category });
            language.filter(a => a.is_select === true ? this.setState(prevState => ({ langId: [...prevState.langId, a.id] })) : '');
            categories.filter(a => a.is_select === true ? this.setState(prevState => ({ catId: [...prevState.catId, a.id] })) : '');
            this.setState({loading:false})
        }).catch(err => {
            console.log(err)
            this.setState({loading:false})
        })
    }

    handleLangugeClick = (index) => {
        const { languages, langId } = this.state
        let result = [...languages];
        if (result[index].is_select === false) {
            this.setState(prevState => ({
                langId: [...prevState.langId, result[index].id]
            }))
        } else {
            let newId = langId.filter(x => x !== result[index].id);
            this.setState({ langId: newId });
        }
        result[index] = {
            id: result[index].id,
            title: result[index].title,
            is_select: result[index].is_select === true ? false : true,
        }
        this.setState({ languages: result });
    };

    handleCategoryClick = (index) => {
        const { categories, catId } = this.state
        let result = [...categories];
        if (result[index].is_select === false) {
            this.setState(prevState => ({
                catId: [...prevState.catId, result[index].id]
            }))
        } else {
            let newId = catId.filter(x => x !== result[index].id);
            this.setState({ catId: newId });
        }
        result[index] = {
            id: result[index].id,
            title: result[index].title,
            is_select: result[index].is_select === true ? false : true,
        }
        this.setState({ categories: result });
    };

    handleSubmit = () => {
        this.setState({loading:true})
        const { langId, catId } = this.state
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
        axios.post('http://indonews.live/api/update-preferences-web', {
            headers: { "Authorization": `Bearer ${user.access_token}` },
            language_id: langId,
            category_id: catId
        }).then(res => {
            if (res) {
                console.log(res.data);
            }
            this.setState({loading:false})
        }).catch(err => {
            console.log(err)
            this.setState({loading:false})
        })
    }
    render() {
        const { languages, categories } = this.state;
        return (
            <AppBody 
                loader={this.state.loading}
            content={
                <>
                    <div className="languge">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Select Prefered Language.</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row text-fluid">
                                            {languages && languages.map((li, index) =>
                                                <div className="col-2" key={index}
                                                    onClick={() => this.handleLangugeClick(index)}
                                                >
                                                    <div className={li.is_select === true ? 'card-title pre-color' : 'black-color card-title'} style={{ minWidth: '140px', mimHeight: "60px" }}>
                                                        <div className="lag-setup-card">
                                                            <h5  >{li.title}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Select Prefered Category.</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="row text-fluid">
                                            {categories && categories.map((li, index) =>
                                                <div className="col-3" key={index}
                                                    onClick={() => this.handleCategoryClick(index)}
                                                    style={{ width: "auto" }}>
                                                    <div className={li.is_select === true ? 'card-title pre-color' : 'black-color card-title'} style={{ minWidth: '160px', minHeight: "60px" }}>
                                                        <div className="card-body  lag-setup-card">
                                                            <h5>{li.title}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="form-group">
                                    <button
                                        className="btn btn-info form-control"
                                        type="button"
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            } />
        )
    }
}

export default withRouter(UserPreferencePage);