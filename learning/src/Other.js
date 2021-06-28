import React, {Component} from 'react'
import reactDOM from 'react-dom'

export default class Other extends Component {
    constructor () {
        super();
    }
    render () {        
        return reactDOM.createPortal(
            <h1>Portal Component</h1>,
            document.getElementById('other-root')
        )
    }
}