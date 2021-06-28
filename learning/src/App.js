// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
    constructor () {
        super();
        this.state = {
            email:null,
            password:null,
            login:false,
            _token:"ZLG6yYhGIX7C93FKgvGflPd7X8JXXe9dhcohoYs6",
            token:null,
        }        
    }
    login () {
        let _token = "ZLG6yYhGIX7C93FKgvGflPd7X8JXXe9dhcohoYs6";
        const url = "http://localhost:8000/login";
        // const url = "http://localhost/AlternativeSolutions/public/login";
        // console.warn("API call",this.state);
        fetch (url, {
            method : "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': _token
              },
            redirect: 'manual',
            body:JSON.stringify(this.state)
        }).then((resp)=>{
            console.warn("response",resp);
            resp.json().then((result)=>{
                console.warn("result",result);
                // localStorage.setItem("email","test@gmail.com")
                // localStorage.setItem("email","test@gmail.com")
            })
        })
        .catch(function(err) {
            console.warn(err + " url: " + url);
        });
    }
    render () {
        return (
            <div>
                <h1>JWT(Json Web token) token with React</h1>
                <input type="text" onChange={(event)=>this.setState({email:event.target.value})}/> 
                <br></br><br></br>
                <input type="password" onChange={(event)=>this.setState({password:event.target.value})}/>
                <br></br><br></br>
                <input type="button" value="Click me" onClick={(event)=>this.login()}/>
            </div>
        )
    }
}


export default App;