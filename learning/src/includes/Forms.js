import React from 'react';

export default class Forms extends React.Component{
    constructor () {
        super();
        this.state =  {
            name : "",
            pwd : "",
            nameError : "",
            pwdError : ""
        }
    }
    valid () {
        if (!this.state.name.includes("@") && this.state.pwd.length < 5) { 
            this.setState({nameError:"Name accepts @ ", pwdError:"Password length can not less than 5"});
        } 
        else if (!this.state.name.includes("@")) {
            this.setState({nameError:"Name can not be blank"});
        } 
        else if (this.state.pwd.length===0) {
            this.setState({pwdError:"Password can not be blank"});
        } 
        else if (this.state.pwd.length<0) {
            this.setState({pwdError:"Password length can not less than 5"});
        } 
        // console.warn(this.state);
    }
    submit () {
        if (this.valid())
        {
            alert ("From has been submitted")
        } 
        this.setState({nameError:"", pwdError:""});
    }
    render() {
        return (
            <div align="center">
                <h3>Form Handling with validation</h3>
                    <p>
                        <label>Name: </label>
                        <input type="text" name="name" onChange={(e)=>this.setState({name:e.target.value})}/>
                        <span style={{color:"red", fontSize : "16px"}}>{this.state.nameError}</span>
                    </p>
                    <p>
                        <label>Password: </label>
                        <input type="password" name="pwd" onChange={(e)=>this.setState({pwd:e.target.value})}/>
                        <span style={{color:"red", fontSize : "16px"}}>{this.state.pwdError}</span>
                    </p>
                    <p>
                        <input type="button" name="submit" value="submit" onClick={()=>this.submit()}/>
                    </p>
            </div>
        )
    }
};