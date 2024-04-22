import BibliothekImage from "../Assets/icons8-library-24.png"
import ClinicImage from "../Assets/icons8-hospital-24.png"
import DisParkImage from "../Assets/icons8-disability-24.png"
import DoctorImage from "../Assets/icons8-doctor-24.png"
import KindergardenImage from "../Assets/icons8-seesaw-32.png"
import MuseumImage from "../Assets/icons8-museum-32.png"
import MusikSchoolImage from "../Assets/icons8-music-notation-32.png"
import ParkImage from "../Assets/icons8-park-24.png"
import PoliceStationRating from "../Assets/icons8-police-30.png"
import PoolImage from "../Assets/icons8-swimming-24.png"
import PublicTransportImage from "../Assets/icons8-bus-24.png"
import SchoolImage from "../Assets/icons8-school-24.png"
import UniversityImage from "../Assets/icons8-university-32.png"
import React from "react";
import "../styles/RatingImage.css"

interface ImageComponentProps {
    number: string;
}

const ImageComponent: React.FC<ImageComponentProps> =({ number }) => {
    // Определяем путь к изображению в зависимости от номера
    let imagePath = '';
    switch (number) {
        case "Bibliotheken":
            imagePath = BibliothekImage;
            break;
        case "Karnkenhäuser":
            imagePath = ClinicImage;
            break;
        case "Behindertparkplätze":
            imagePath = DisParkImage;
            break;
        case "Ärzte":
            imagePath = DoctorImage;
            break;
        case "Kindergarten":
            imagePath = KindergardenImage;
            break;
        case "Museen":
            imagePath = MuseumImage;
            break;
        case "Musikschulen":
            imagePath = MusikSchoolImage;
            break;
        case "Parken":
            imagePath = ParkImage;
            break;
        case "Polizeistellen":
            imagePath = PoliceStationRating;
            break;
        case "Schwimmbäder":
            imagePath = PoolImage;
            break;
        case "Öffentliche Verkersmittel":
            imagePath = PublicTransportImage;
            break;
        case "Schulen":
            imagePath = SchoolImage;
            break;
        case "Universitäten":
            imagePath = UniversityImage;
            break;
        default:
            // Если номер не соответствует ни одному изображению, показываем пустую строку
            return null;
    }

    return <img src={imagePath} alt={`Image ${number}`}/>;
};

export default ImageComponent;
