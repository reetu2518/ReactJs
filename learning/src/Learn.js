import React from 'react'

export default class Learn extends React.Component {
    constructor () {
        super();
        this.state = {
            show : true
        }
    }
    render () {
        return (
            <div>
                {
                    this.state.show ?
                    <p>Toggles text</p>
                    :null
                }
                
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle me</button>
            </div>
        )
    }
}