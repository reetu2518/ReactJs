import React from 'react'
import './custom.css'

export default class Style extends React.Component {
    constructor () {
        super();
        
    }
    render () {
        const h3 = {
            color : "blue",
            fontSize: "40px",
            textAlign : "center"
        }
        const h2 = {
            color : "green",
            fontSize: "40px",
            textAlign : "center"
        }
        return (
            <div>
                <h3 id="heading">Global Style by ID</h3>
                <h3 className="heading">Global Style by class</h3>
                <p style={h3}>Inline style</p>
                <p style={this.props.data=="test"? h2 : h3 }>Conditional style </p>

            </div>
        )
    }
}