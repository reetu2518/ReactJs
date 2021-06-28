import React from 'react';
class Uncontrolled extends React.Component{
    constructor() {
        super();
        this.name = React.createRef();
        this.password = React.createRef();
    }
    submit(event) {
        event.preventDefault();
        
        console.warn("name",this.name.current.value);
        // console.warn("form values",this.password.current);
        // console.warn("form values",this.password.current.placeholder);
        console.info("password",this.password.current.value);
    }
    render(){
        return(
            <div>
                <h2>Uncontrolled component</h2>
                <form onSubmit={(values)=>this.submit(values)}>
                    <input type="text"  placeholder="Enter Name" ref={this.name}/> <br></br>
                    <input type="password" placeholder="Enter Password" ref={this.password}/> <br></br>
                    <input type="submit" value="Submit" name="submit"/> <br></br>
                </form>
            </div>
        )
    }
}
export default Uncontrolled;