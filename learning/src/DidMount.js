import React from 'react'

export default class DidMount extends React.Component{

    constructor () {
        super();
        this.state = {
            data  : null
        }
        this.state = {
            active: null,
            who:null
        }
        // console.warn("constructor")
    }
    // After all data prepared DidMount called, and if any update then after DidMount render will again called
    componentDidMount() {
        // this.setState ({ data : "updated" });
        // console.warn("Did Mount")
    }
    componentDidUpdate () {
        console.warn("CAlled Just after Update the data")
    }
    render () {
        // console.warn("render")
        return (
            <div>
                <h3>Component Did Mount & Component Did Update</h3>
                <p></p>
                <button onClick={()=>this.setState({data:"Active"})}> Activate the data</button>
            </div>
        )
    }
}