import React from 'react';
class Controlled extends React.Component{
    constructor() {
        super();
        this.state = {
            name:"",
            password:""
        }
    }
    submit() {
        console.warn("form values",this.state);
    }
    render(){
        return(
            <div>
                <h2>Controlled component handled by React</h2>
                    <input type="text"  placeholder="Enter Name" onChange={(event)=>this.setState({name:event.target.value})}/> <br></br>
                    <input type="password" placeholder="Enter Password" onChange={(event)=>this.setState({password:event.target.value})}/> <br></br>
                    <input type="button" onClick={()=>this.submit()} value="Submit" name="submit"/> <br></br>
            </div>
        )
    }
}
export default Controlled;