import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import Header from "./Header";
import Team from "./Team";
import {ITeam} from "../types/Types";
import AddTeam from "./AddTeam";
import TeamList from "./TeamList";
import CreateTeamForm from "./CreateTeamForm";
import PointAddForm from "./PointAddForm";

const PointApp: React.FC = () => {

    const [isShowTeamCreateForm, setIsShowTeamCreateForm] = useState<boolean>(false);
    const [isShowPointAddForm, setIsShowPointAddForm] = useState<boolean>(false);

    const [teams,setTeams] = useState<ITeam[]>([
        {
            name:"Sparks",
            points:234433
        },
        {
            name:"Perks",
            points:213424
        }
    ])

    const handleShowCreateTeamForm = () => {
        setIsShowTeamCreateForm(true);
    }

    const handleCloseCreateTeamForm = () => {
      setIsShowTeamCreateForm(false)
    }

    const handleShowAddPointForm = () => {
      setIsShowPointAddForm(true);
    }

    const handleCloseAddPointForm = () => {
        setIsShowPointAddForm(false);
    }

    return (
        <Row xs={12} md={8} lg={12} className='app-container d-flex flex-column align-items-center text-center'>
            <Header/>
            <TeamList teams={teams} onAddClicked={handleShowAddPointForm}/>
            <AddTeam onAddClick={handleShowCreateTeamForm}/>
            {
                isShowTeamCreateForm && <CreateTeamForm onFormClose={handleCloseCreateTeamForm}
                                                        showFormPopup={isShowTeamCreateForm}/>
            }
            {
                isShowPointAddForm && <PointAddForm onFormClose={handleCloseAddPointForm}
                                                    showFormPopup={isShowPointAddForm}/>
            }
        </Row>
    );
};

export default PointApp;
