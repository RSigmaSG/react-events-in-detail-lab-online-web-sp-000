// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    constructor(props) {
        super()
        this.coords = props.onReceiveCoordinates
    
    }

    log = () => {
        console.log([this.coords([e.clientX, e.clientY]))
    }

    render() {
        return (
        <div>
            <button onClick={this.log}>Print coordinates: </button>
        </div>
        )
    }
}