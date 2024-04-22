import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import Address from "./Adress";
import RatingTable from './RatingTable';
import ResultData from "../Data/ResultData";
import AloneImage from "../Assets/icons8-administrator-male-100.png"
import FamilyImage from "../Assets/icons8-family-100.png"
import StudentImage from "../Assets/icons8-student-100.png"
import YoungCoupleImage from "../Assets/icons8-couple-100.png"
import PensioneurImage from "../Assets/icons8-old-man-smiling-80.png"
import InvalidImage from "../Assets/icons8-wheelchair-100.png"
import LinesTable from "./LinesTable";
import "../styles/ResultComponent.css"
import ParkTable from "./ParkTable";
import AverageRating from "./AverageRating";
import ExplainButton from "./ExplainButton";


function ResultComponent() {


    var userGroup;
    switch (ResultData.UserGroupName){
        case 'alone':
            userGroup =AloneImage;
            break;
        case 'family':
            userGroup = FamilyImage;
            break;
        case 'student':
            userGroup = StudentImage;
            break;
        case 'young-couple':
            userGroup = YoungCoupleImage;
            break;
        case 'pensioneur':
            userGroup = PensioneurImage;
            break;
        case 'invalid':
            userGroup = InvalidImage;
            break;
        default:
            userGroup = AloneImage;
    }

    return <Container>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <Address/>
            <AverageRating/>
        </div>
        <div style={{width: '100%', display: 'flex', alignItems: 'space-between', border: '1px solid transparent'}}>
            <RatingTable/>
            <div style={{
                marginLeft: '100px',
                width: 'auto',
                margin: '2%'
            }}>
                <div style={{
                    backgroundImage: `url(${userGroup})`,
                    backgroundColor: "white",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '30%',
                    width: '100px',
                    height: '100px', // Adjust this value as needed
                    display: 'flex', // Use flexbox to center content
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center',
                    padding: '8px'// Center vertically
                }}></div>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', height: '40vh'}}
             className="table-container">
            <div style={{backgroundColor: 'transparent', width: '40%'}}>
                <LinesTable/>
            </div>
            <div className="park-table">
                <ParkTable />
            </div>
        </div>
        <div className="explain-button">
            <ExplainButton/>
        </div>

    </Container>
};

export default ResultComponent;