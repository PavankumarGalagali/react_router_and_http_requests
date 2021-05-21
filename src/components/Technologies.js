import React, { Component } from 'react'
import Footer from './Footer';

export default class Technologies extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Technologies Component </h1>
                <Footer />
            </div>
        )
    }
}
