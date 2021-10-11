import React, {useState} from 'react';
import {Row} from "react-bootstrap";
import Header from "./Header";
import Team from "./Team";
import {ITeam} from "../types/Types";
import AddTeam from "./AddTeam";
import TeamList from "./TeamList";
import CreateTeamForm from "./CreateTeamForm";
import PointAddForm from "./PointAddForm";

type PointAppProps = {
    onTeamChange: (teams : ITeam[]) => void,
    teams: ITeam[] | null
}

const PointApp: React.FC<PointAppProps> = (props) => {

    const {onTeamChange, teams} = props;
    const [isShowTeamCreateForm, setIsShowTeamCreateForm] = useState<boolean>(false);
    const [isShowPointAddForm, setIsShowPointAddForm] = useState<boolean>(false);

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
    
    const handleCreateTeamSubmit = (newTeam: ITeam) => {
      const newTeamList:ITeam[] = teams ? teams.slice() : [];
      newTeamList.push(newTeam);
      onTeamChange(newTeamList);
      setIsShowTeamCreateForm(false);
    }

    return (
        <Row xs={12} md={8} lg={12} className='app-container d-flex flex-column align-items-center text-center'>
            <Header/>
            <TeamList teams={teams} onAddClicked={handleShowAddPointForm}/>
            <AddTeam onAddClick={handleShowCreateTeamForm}/>
            {
                isShowTeamCreateForm && <CreateTeamForm onFormClose={handleCloseCreateTeamForm}
                                                        showFormPopup={isShowTeamCreateForm} 
                                                        onCreateTeamSubmit={handleCreateTeamSubmit}/>
            }
            {
                isShowPointAddForm && <PointAddForm onFormClose={handleCloseAddPointForm}
                                                    showFormPopup={isShowPointAddForm}/>
            }
        </Row>
    );
};

export default PointApp;
