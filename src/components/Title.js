import { Component } from 'react';

class Title extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {content}=this.props;
        return (
            <>
                <div className="container-fluid  bg-secondary text-white">
                    <div className="row">
                        <div className={this.props.className}>
                            <h1>{content}</h1>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Title;