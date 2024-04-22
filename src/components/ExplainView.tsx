import React, { useState } from 'react';
import "../styles/ExplainView.css"
import {CloseButton} from "react-bootstrap";
import ResultData from "../Data/ResultData";
import DataWorker from "../Data/DataWorker";

interface ExplainViewProps {
    isOpen: boolean;
    onClose: () => void;
}

function formatDistance(distanceStr: string): string {
    var distance = parseFloat(distanceStr.replace(',', '.'));

    if (isNaN(distance)) {
        return distanceStr;
    }

    if (distance < 1) {
        return (distance * 1000).toFixed(2) + " Meter";
    } else {
        return (distance).toFixed(2) + " KM";
    }
}

const ExplainView: React.FC<ExplainViewProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    let aMuster: Array<number> = [];
    let bMuster: Array<number> = [];
    let name: string = "";
    let KatMuster: Array<string> = ["Bibliothek", "Krankenhaus", "Behindertparkplatz", "Arzt", "Kindergarten", "Museum", "Musikschule", "Grünzone", "Polizeistelle", "Schwimmbad", "Öffis", "Schulen", "Universitäten"]
    let parkDistance: number = 0;
    let parkDrink: string = "";
    let parkDog:string = "";
    let parkChild:string = "";
    let stopDistance: number = 0;
    let stopLine: string = "";
    let stopStatement: string = "";

    switch (ResultData.UserGroupName){
        case "student":
            name = "Student";
            aMuster = DataWorker.StudentCounts;
            bMuster = DataWorker.StudentWeigths;
            break;
        case "family":
            name = "Familie";
            aMuster = DataWorker.FamilyCounts;
            bMuster = DataWorker.FamilyWeigths;
            break;
        case "young-couple":
            name = "Pärchen";
            aMuster = DataWorker.YoungCoupleCounts;
            bMuster = DataWorker.YoungCoupleWeigths;
            break;
        case "disabled":
            name = "Behinderte";
            aMuster = DataWorker.DisabledCounts;
            bMuster = DataWorker.DisabledWeigths;
            break;
        case "pensioneur":
            name = "Rentner";
            aMuster = DataWorker.PensioneurCounts;
            bMuster = DataWorker.PensioneurWeigths;
            break;
        case "alone":
            name = "Alleinwohnende";
            aMuster = DataWorker.AloneCounts;
            bMuster = DataWorker.AloneWeigths;
            break;
    }


    const sum = bMuster.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);


    if (ResultData.ParkDistances[0] <= 0.2) parkDistance = 5;
    else if (ResultData.ParkDistances[0] <= 0.4) parkDistance = 4;
    else if (ResultData.ParkDistances[0] <= 1) parkDistance = 3;
    else if (ResultData.ParkDistances[0] <= 1.8) parkDistance = 2;
    else if (ResultData.ParkDistances[0] <= 3.0) parkDistance = 1;
    else parkDistance = 0;

    if (ResultData.ParkDistances[0] <= 0.09) stopDistance = 5;
    else if (ResultData.ParkDistances[0] <= 0.16) stopDistance = 4;
    else if (ResultData.ParkDistances[0] <= 0.5) stopDistance = 3;
    else if (ResultData.ParkDistances[0] <= 1) stopDistance = 2;
    else if (ResultData.ParkDistances[0] <= 2) stopDistance = 1;
    else stopDistance = 0;

    if(ResultData.ParkDrinks[0])
        parkDrink = "gibt Trinkbrunnen, Rating erhöht sich um 0.5";
    else
        parkDrink = "gibt kein Trinkbrunnen";

    if(ResultData.ParkDogs[0])
        parkDog = "es gibt Hundezone, Rating erhöht sich um 0.5";
    else
        parkDog = "es gibt keine Hundezone"

    if(ResultData.ParkPlay[0])
        if(ResultData.UserGroupName == "family")
            parkChild = "es gibt eine Spielplatz, Rating erhöht sich um 0.7";
        else
            parkChild = "es gibt eine Spielplatz, aber hat kein Einfluss auf den Rating wegen der Gruppe";
    else
        parkChild = "es gibt keinen Spielplatz."

    if (ResultData.Lines[0][0] == 'U')
    {
        stopLine = "U-Bahn";
        stopStatement = ", also bekommt es noch 2 zum Rating"
    }
    else if (ResultData.Lines[0].startsWith("S") || ResultData.Lines[0].startsWith("REX") ||
        ResultData.Lines[0].startsWith("SV") || ResultData.Lines[0].startsWith("R") ||
        ResultData.Lines[0].startsWith("CJX") || ResultData.Lines[0].startsWith("WLB") ||
        ResultData.Lines[0].startsWith("B"))
    {
        stopLine = "Zug";
        stopStatement = ", also bekommt es noch 1 zum Rating"
    }
    else if (ResultData.Lines[0].startsWith("N"))
    {
        stopLine = "Night";
        stopStatement = ", also bekommt es noch 0.8 zum Rating"
    } else if(/^[a-zA-Z]/.test(ResultData.Lines[0])){
        stopLine = "Tram";
    }
    else {
        stopLine = "Bus";
    }

    return (
        <div className="push">
            <div className="content">
                <CloseButton onClick={onClose} className="close-button">
                </CloseButton>
                <div>

                    <h2 style={{color: 'red'}}>Algorithmus erklären</h2>
                    <p> Gruppe: {name}
                        Anzahlmuster: {aMuster.join(', ')}<br/>
                        Gewichtmuster: {bMuster.join(', ')}<br/>
                        Kategoriemuster: {KatMuster.join(', ')}
                    </p>
                    <h5>Schritt 1:</h5>
                    <p>Die angegebene Gruppe ist {name} und Adresse: {ResultData.Address}</p>
                    <h5>Schritt 2:</h5>
                    <p> Für jede Kategorie so viel Objekten finden wie in Anzahlmuster. Es
                        wird {aMuster[0]} Bibliotheken gefunden, es wird {aMuster[1]} Krankenhauser gefunden und so
                        weiten nach Muster<br/>
                        Dann wird die Distanzen ausgerechnet. Den Muster können Sie auf "Algorithmus" Page finden.
                    </p>
                    <h5>Schritt 3:</h5>
                    <p> Für Grünzonen: der Park {ResultData.ParkNames[0]} ist {ResultData.ParkDistances[0].toFixed(1)}
                        km entfernt. Also bekommt er den Rating {parkDistance}. Es {parkDrink}, {parkDog}, {parkChild}.
                        Und so mit allen {aMuster[7]} Grünzonen.
                    </p>
                    <p> Für Öffis: Die
                        Linie {ResultData.Lines[0]} ist {formatDistance(ResultData.LinesDistance[0])} entfernt,
                        also bekommt es den Rating {stopDistance}. Das ist {stopLine}-linie{stopStatement}.</p>
                    <h5>Schritt 4:</h5>
                    <p> Als letztes wird der Gewichtemuster angewendet. Man addiert die Ratings miteinander:
                        (Bibliothek){bMuster[0]} + (Krankenhaus){bMuster[1]} + (jede Kategorie) jeweilige gewicht.
                        Dann werden alle gewichte zusammen addiert {bMuster.join(' + ')} = {sum}. Jetzt muss man nur
                        noch den Gesamtrating durch den Gesamtgewicht dividieren.
                    </p>
                    <h5>Ergebniss:</h5>
                    <p>
                        Der Gesamtrating für die Adresse is {ResultData.AverageRating}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ExplainView;