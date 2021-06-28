import React from 'react'
import PropTypes from 'prop-types';

class FromUpload extends React.Component{
    upload (e) {
        const files = e.target.files
        const formData = new FormData();
        formData.append('img', files[0]);
        fetch('https://api.imgur.com/3/image',{
            method:"POST",
            body:formData
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.warn(result);
            });
        })
    }
    render () {
        return (
            <div>
                <h3>File Upload nad check Prototype</h3>
                <br></br>
                <h4>Name: {this.props.name}</h4>
                <h4>Age: {this.props.age}</h4>
                <p></p>
                <br></br>
                <input type="file" name="img" onChange={(e)=>this.upload(e)}/>
                <br></br>
            </div>
        )
    }
}
// check type of properties
FromUpload.propTypes= {
    age: PropTypes.number,
    name: PropTypes.string
}

export default FromUpload;