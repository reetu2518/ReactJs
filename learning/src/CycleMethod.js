import React from 'react'

export default class CycleMethod extends React.Component{
    constructor () {
        super();
        console.warn("constructor")
    }
    componentDidMount () {
        console.warn("Mount reached")
    }
    render () {
        console.warn("render")
        return (
            <div>
                <h3>Life Cycle Method</h3>
            </div>
        )
    }
}