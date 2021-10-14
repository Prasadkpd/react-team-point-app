import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, Form, Modal, FormControl} from "react-bootstrap";
import {ITeam} from "../types/Types";

type PointReduceFormProps = {
    onFormClose: () => void,
    showFormPopup: boolean,
    onReducePointSubmit:(newTeam: ITeam) => void,
    teamNameForPoint: string
}

const PointReduceForm: React.FC<PointReduceFormProps> = (props) => {

    const {onFormClose, showFormPopup, onReducePointSubmit, teamNameForPoint} = props;
    const [points, setPoints] = useState<number>(0);
    const [isFormValidate, setIsFormValidate] = useState<boolean>(false);
    const [teamName, setTeamName] = useState<string>('');

    const handleOnPoints = (e: ChangeEvent<HTMLInputElement>) => {
        setPoints(parseInt(e.target.value.replace(/\D/g,'')));
    }

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (points === 0 || points === null) {
            setIsFormValidate(true);
        } else {
            const newTeam: ITeam = {
                name: teamName,
                points: points,
            }
            onReducePointSubmit(newTeam);
            onFormClose();
        }
    }


    return (
        <Modal show={showFormPopup} onHide={onFormClose} >
            <Modal.Header closeButton>
                <Modal.Title>Remove Points</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleOnSubmit} validated={isFormValidate} noValidate>
                    <Form.Group>
                        <Form.Label className="mb-1">Name of Team</Form.Label>
                        <Form.Control type="text" disabled value={teamNameForPoint ? teamNameForPoint : ''}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-1 ms-1">Enter Number Of Points</Form.Label>
                        <Form.Control type="text" required value={points} onChange={handleOnPoints.bind(this)}/>
                        <FormControl.Feedback type='invalid'>
                            <p className="text-danger fw-bold">Please Enter Number Of Points</p>
                        </FormControl.Feedback>
                    </Form.Group>
                    <Button className='btn-dark mb-0 m-1 mt-2 float-end' type={"submit"}>Remove Points</Button>
                    <Button className='mb-0 float-end m-1 mt-2' variant="secondary" onClick={onFormClose} >
                        Close
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

    );
};

export default PointReduceForm;
