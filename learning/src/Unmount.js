import React, {Component} from 'react'

export default class Unmount extends Component {
    componentWillUnmount () {
        alert("User Deleted")
    }
    render () {
        return (
            <div>
                <h3>User Component</h3>
            </div>
        )
    }
}