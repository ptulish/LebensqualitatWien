import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ResultComponent from "../components/result-component";
import ResultData from "../Data/ResultData";
import WienImage from "../Assets/wien-panorama_fotolia.jpg"
import InnereStadtInmage from "../Assets/innere-stadt.jpg"
import LeopoldstadtImage from "../Assets/leopoldstadt.jpg"
import LandstrasseImage from "../Assets/landstrasse.jpg"
import WiedenImage from "../Assets/wieden.jpg"
import MargaretenImage from "../Assets/margareten.jpg"
import NeubauImage from "../Assets/Neubau.jpg"
import JosefstadtImage from "../Assets/josefstadt.jpg"
import AlsergrundImage from "../Assets/alsergrund.jpg"
import FavoritenImage from "../Assets/favoriten.jpg"
import SimmeringImage from "../Assets/simering.jpg"
import MeidlingImage from "../Assets/meidling.jpg"
import HietzingImage from "../Assets/hietzing.jpg"
import PenzingImage from "../Assets/penzing.jpg"
import RudolfsheimFunfhausImage from "../Assets/rudolfsheim-funfhaus.jpg"
import OttakringImage from "../Assets/ottakring.jpg"
import HernalsImage from "../Assets/hernals.jpg"
import WahringImage from "../Assets/wahring.jpg"
import DoblingImage from "../Assets/dobling.jpg"
import BrigittenauImage from "../Assets/brigittenau.jpg"
import FloridsdorfImage from "../Assets/floridsdorf.jpg"
import DonaustadtImage from "../Assets/donaustadt.jpg"
import LiesingImage from "../Assets/liesing.jpg"

interface TransparentBorderProps {}

const TransparentBorder = styled.div<TransparentBorderProps>`
        width: 70vw;
        height: 92vh;
        margin: auto;
        position: absolute;
        border: 1px solid rgba(0, 0, 0, 0.4); // Прозрачность границы 40%
        box-sizing: border-box;
        background-color: rgba(255, 0, 0, 0.85);
        border-radius: 5%;
        color: #FFFFFF; /* Белый цвет текста */
        font-family: 'Roboto', sans-serif; /* Шрифт без засечек */
        font-weight: 600; /* Полужирное начертание */
    `;

function SearchResultPage() {
    const location = useLocation();
    var image: string;
    let data = location.state?.data;

    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch (error) {
            console.error("Error parsing data:", error);
            return <div>Error parsing data.</div>;
        }
    }

    ResultData.Address = data.Address;
    ResultData.District = data.DistrictName;
    ResultData.BibliothekRating = data.BibliothekRating;
    ResultData.ClinicRating = data.ClinicRating;
    ResultData.DisParkRating = data.DisParkRating;
    ResultData.DoctorRating = data.DoctorRating;
    ResultData.KinderGartenRating = data.KinderGartenRating;
    ResultData.MuseumRating = data.MuseumRating;
    ResultData.MusikSchoolRating = data.MusikSchoolRating;
    ResultData.ParkRating = data.ParkRating;
    ResultData.PoliceStationRating = data.PoliceStationRating;
    ResultData.PoolRating = data.PoolRating;
    ResultData.PublicTransportRating = data.PublicTransportRating;
    ResultData.SchoolRating = data.SchoolRating;
    ResultData.UniversityRating = data.UniversityRating;
    ResultData.AverageRating = data.AverageRating;
    ResultData.Lines = data.Lines;
    ResultData.LinesDistance = data.LinesKM;
    ResultData.ParkNames = data.ParkNames;
    ResultData.ParkDogs = data.ParkDog;
    ResultData.ParkPlay = data.ParkPlay;
    ResultData.ParkDrinks = data.ParkDrink;
    ResultData.ParkDistances = data.ParkDistances;

    switch (ResultData.District){
        case "Innere Stadt":
            image = InnereStadtInmage;
            break;
        case "Leopoldstadt":
            image = LeopoldstadtImage;
            break;
        case "Landstraße":
            image = LandstrasseImage;
            break;
        case "Wieden":
            image = WiedenImage;
            break;
        case "Margareten":
            image = MargaretenImage;
            break;
        case "Mariahilf":
            image = MargaretenImage;
            break;
        case "Neubau":
            image = NeubauImage;
            break;
        case "JosefStadt":
            image = JosefstadtImage;
            break;
        case "Alsergrund":
            image = AlsergrundImage;
            break;
        case "Favoriten":
            image = FavoritenImage;
            break;
        case "Simmering":
            image = SimmeringImage;
            break;
        case "Meidling":
            image = MeidlingImage;
            break;
        case "Hietzing":
            image = HietzingImage;
            break;
        case "Penzing":
            image = PenzingImage;
            break;
        case "Rudolfsheim-Fünfhaus":
            image = RudolfsheimFunfhausImage;
            break;
        case "Ottakring":
            image = OttakringImage;
            break;
        case "Hernals":
            image = HernalsImage;
            break;
        case "Währing":
            image = WahringImage;
            break;
        case "Döbling":
            image = DoblingImage;
            break;
        case "Brigittenau":
            image = BrigittenauImage;
            break;
        case "Floridsdorf":
            image = FloridsdorfImage;
            break;
        case "Donaustadt":
            image = DonaustadtImage;
            break;
        case "Liesing":
            image = LiesingImage;
            break;
        default:
            image = WienImage;
            break;
    }

    return (
        <div>

            <div>

                <div style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: 'auto',
                    height: '94vh', // Adjust this value as needed
                    display: 'flex', // Use flexbox to center content
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center', // Center vertically
                }}>
                    <TransparentBorder>
                        <ResultComponent></ResultComponent>

                    </TransparentBorder>
                </div>

            </div>

        </div>
    );
}

export default SearchResultPage;


