import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Container, Dropdown, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {useSearchParams} from "react-router-dom";
import Address from "./Adress";
import RatingTable from './RatingTable';
import wienPanoram from "../Assets/brigittenau.jpg";
import ResultData from "./ResultData";
import AloneImage from "../Assets/icons8-administrator-male-100.png"
import FamilyImage from "../Assets/icons8-family-100.png"
import StudentImage from "../Assets/icons8-student-100.png"
import YoungCoupleImage from "../Assets/icons8-couple-100.png"
import PensioneurImage from "../Assets/icons8-old-man-smiling-80.png"
import InvalidImage from "../Assets/icons8-wheelchair-100.png"

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
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Address />
        </div>
        <div style={{width: '100%', display: 'flex', alignItems: 'space-between'}}>
            <RatingTable />
            <div style={{marginLeft: '100px', width: '200px', margin: '2%', paddingLeft: '100px'}}> {/* Добавьте отступ для отделения текста от таблицы */}
                <div style={{
                    backgroundImage: `url(${userGroup})`,
                    backgroundColor:"white",
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
    </Container>
};

export default ResultComponent;