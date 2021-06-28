import React, {Component} from 'react';

export default class Eror extends Component{
    render() {
        if (true)
        {
            throw new Error("custom error")
        }
        return (
            <div>
                <h1>User Component</h1>
            </div>
        )
    }
}