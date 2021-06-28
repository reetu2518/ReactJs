import React from 'react'

export default class Home extends React.Component{
    constructor () {
        super();
        this.state={
            name : 'reetu',
            email : 'test@gmail.com',
            count : 0
        }
    }
    updateState () {
        this.setState({
            name : "updated name here after state change",
            count : this.state.count+1
        });
    }
    render() {
        return (
            <div>
                {/* <h3>Component is a collection of code which we can use reuse wherever required.</h3>
                <h4>Component are two types: a) Functional b) Class</h4> */}
                {/* <p> Get the value in class component:  
                    {this.props.test}<br></br>
                    {this.props.test1.name}
                </p> */}
                <p> 
                    Name: {this.state.name} : {this.state.email} : Count=> {this.state.count}
                </p>
                <button onClick={()=>{this.updateState()}}>Click here</button>
            </div>
        )
    }
}