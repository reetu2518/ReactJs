import React from 'react'

// click event in class component 
/*
export default class ClickEvent extends React.Component{
    constructor () 
    {
        super();
    }
    testFunc () {
        alert("clicked")
    }
    render () {
        return (
            <div>
                <p>()=> used for bind the data because in this onclick lost its scope </p>
                <button onClick={()=>{this.testFunc()}}>Click me</button> <br></br>
                <button onClick={this.testFunc.bind(this)}>Bind Click me</button>
            </div>
        )
    }
}
*/

// Click event in function component
export default function ClickEvent () {
    function testFunc () {
        alert("clicked")
    }
    return (
        <div>
            <button onClick={testFunc}>Click me</button> 
        </div>
    ) 
}