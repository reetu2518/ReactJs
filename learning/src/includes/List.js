import React from 'react'

export default class List extends React.Component {
    constructor () {
        super();
        this.state = {
            list : [
                {name : "test1", email : "test@gmail.com"},
                {name : "test2", email : "test2@gmail.com"},
                {name : "test3", email : "test3@gmail.com"},
            ],
            list1 : [
                {name : "abc", email : "test@gmail.com"},
                {name : "cde", email : "test2@gmail.com"},
                {name : "fgh", email : "test3@gmail.com"},
            ]
        }
    }
    render () {
        return (
            <div>
                <h3>Listing with map</h3>
                {
                    this.state.list.map((item)=>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                        </div>
                    )
                }
                {                    
                    this.state.list1.map((e)=>
                        <div>
                            <p>{e.name}</p>
                            <p>{e.email}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}