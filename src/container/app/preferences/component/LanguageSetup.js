import React, { Component } from 'react';
class LanguageSetup extends Component{
    render(){
        return(
            <>
            <div className="btn btn-outline-secondary text-center" 
            style={{ padding: '3px', margin: '5px', height: '30px', width: '100px' }}
             onClick={e => { console.log("Call")}} id="1">language</div>
            </>
        )
    }
}

export default LanguageSetup;
