import React from 'react'

export default class ApiCall extends React.Component {
    constructor () {
        super();
        this.state = {
            users : null
        }
    }
    componentDidMount () {
        fetch("https://reqres.in/api/users").then((resp)=>{
            resp.json().then((result)=>{
                this.setState({
                    users : result.data
                })
                // console.warn(this.state.users[0].first_name)
            })
        })
    }
    render () {
        
        return (
            <div>
                <h2>Fetch API data</h2>
                {
                    this.state.users?
                    // <div>
                    //     <p>data exists</p>
                    // </div>
                    this.state.users.map(function(i){
                        <div>
                            {i}
                        </div>
                    })
                    // this.state.users.map((item,i)=>{
                    //     <div>
                    //         <p>Hii</p>
                    //         <p>{i}----{item.first_name}</p>
                    //     </div>
                    // })
                    :
                    <div>
                        <p>hello</p>
                    </div>
                    
                }
            </div>
        )
    }
}