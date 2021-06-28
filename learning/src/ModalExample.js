import React from 'react';
import { Button, Modal } from 'react-bootstrap'
// import { Button, Container, Row, Col, Modal } from 'react-bootstrap'

export default class ModalExample extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: true })
    }
    render() {
        return (
            <div>
                <h3>Ref with bootstrap</h3>
                <Button variant="primary" onClick={()=> this.handelModal() }>
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

            </div>
        )
    }
}