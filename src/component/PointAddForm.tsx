import React from 'react';
import {Button, Form, Modal, FormControl} from "react-bootstrap";

type PointAddFormProps = {
    onFormClose: () => void,
    showFormPopup: boolean
}

const PointAddForm: React.FC<PointAddFormProps> = (props) => {

    const {onFormClose, showFormPopup} = props;

    return (
        <Modal show={showFormPopup} onHide={onFormClose} >
            <Modal.Header closeButton>
                <Modal.Title>Add Points</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label className="mb-1">Name of Team</Form.Label>
                        <Form.Control type="text" disabled/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1 ms-1">Enter Number Of Points</Form.Label>
                        <Form.Control type="text" required/>
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Enter Number Of Points</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Button className='btn-dark mb-0 m-1 mt-2 float-end' type={"submit"}>Add Points</Button>
                    <Button className='mb-0 float-end m-1 mt-2' variant="secondary" onClick={onFormClose} >
                        Close
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

    );
};

export default PointAddForm;
