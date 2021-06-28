import React from 'react';
import {Button, Container, Row, Col, Modal} from 'react-bootstrap'

export default class Ref extends React.Component {
    constructor () {
        super();
        // this.userRef = React.createRef();
        this.state = {
            show : false
        }
    }
    // editVal () {
    //     this.userRef.current.value ="reetu";
    //     // this.userRef.current.focus();
    // }
    handleModal () {
        this.setState({ show:true })
    }
    render() {        
        return (
            <div>
                <h3>Ref with bootstrap</h3>
                {/* <input ref={this.userRef} type="text" name="user"/> */}
                {/* <Button onClick={()=>this.editVal()}>Click Me</Button> */}
                <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <Button variant="primary" onClick={()=>this.handelModal()}>
                            Launch demo modal
                        </Button>
                        <Modal show={true}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.footer>
                            <Button variant="secondary">Close</Button>
                            <Button variant="primary">Save Changes</Button>
                        </Modal.footer>
                        </Modal>
                    </Col>
                    
                    <Col xs lg="6"> 3 of 3 </Col>
                    </Row>
                
                </Container>
                {/* <Button>hii</Button> */}
            </div>
        )
    }
}