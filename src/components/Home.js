import React, { Component } from 'react'

export default class Home extends Component {

    componentWillUnmount() {
        console.log("Unmounted");
    }
    
    goto =()=>{
            this.props.history.push("/contact")
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Home Component</h1>
                <button  onClick={this.goto}  >Go to Contact Us Page</button>
            </div>
        )
    }
}
