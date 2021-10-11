import React from 'react';
import {Col, Row} from "react-bootstrap";
import {ITeam} from "../types/Types";
import { FaPlusCircle } from "react-icons/fa";

type TeamProps = {
    team : ITeam,
    index: number,
    onAddClicked: (bool: boolean, index: number) => void
}

const Team: React.FC<TeamProps> = (props) => {

    const {team, index, onAddClicked} = props

    return (
        <React.Fragment>
        <Row xs={12} className="ps-0 p-1 d-flex align-items-baseline team">
            <Col xs="11" className="ps-0 text-start">
                <h5 className="p-0">{index + 1}. {team.name}</h5>
            </Col>
            <Col xs="1" lg="1" className="text-end  p-1">
                <FaPlusCircle size={22} className='icon' onClick={() => onAddClicked(true,index)}/>
            </Col>
        </Row>
        <Row>
            <Col lg={{span: 3, offset: 9}}>
                <h5>{team.points}</h5>
            </Col>
        </Row>
        </React.Fragment>
    );
};

export default Team;
