// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    constructor(props) {
        super()
        this.coords = props.onReceiveCoordinates
        
    
    }

    log = () => {
        console.log(this.coords)
    }

    render() {
        return (
        <button onClick={this.log}></button>
        )
    }
}