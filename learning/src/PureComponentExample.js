import React, {Component, PureComponent} from 'react';

export default class PureComponentExample extends PureComponent{
    constructor () {
        super()
        this.state = {
            data:10
        }
    }    
    render() {
        console.warn(this.state)
        return (
            <div>
                <h1>Difference between componenet and pure componenet</h1>
                <button onClick={()=>this.setState({data:11})}>Click me</button>
            </div>
        )
    }
}