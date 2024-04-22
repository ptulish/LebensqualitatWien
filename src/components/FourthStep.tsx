import DataWorker from "../Data/DataWorker";
import React, {ReactNode, useState} from "react";
import {CloseButton} from "react-bootstrap";

function FourthStep() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuContent, setMenuContent] = useState<ReactNode>('');

    const handleButtonClick = (group: any) => {
        let biblCount:string = "";
        let clinCount:string = "";
        let dParkCount: string = "";
        let docCount: string = "";
        let chilCount: string = "";
        let museCount: string = "";
        let mussCount: string = "";
        let parkCount: string = "";
        let PoliceStationCount: string = "";
        let poolCount: string = "";
        let offCount: string = "";
        let schCount: string = "";
        let uniCount: string = "";
        let secondHeader: string = "";

        switch (group) {
            case "alone":
                secondHeader = "Anzahl";
                biblCount = DataWorker.AloneWeigths[0].toString();
                clinCount = DataWorker.AloneWeigths[1].toString();
                dParkCount = DataWorker.AloneWeigths[2].toString();
                docCount = DataWorker.AloneWeigths[3].toString();
                chilCount = DataWorker.AloneWeigths[4].toString();
                museCount = DataWorker.AloneWeigths[5].toString();
                mussCount = DataWorker.AloneWeigths[6].toString();
                parkCount = DataWorker.AloneWeigths[7].toString();
                PoliceStationCount = DataWorker.AloneWeigths[8].toString();
                poolCount = DataWorker.AloneWeigths[9].toString();
                offCount = DataWorker.AloneWeigths[10].toString();
                schCount = DataWorker.AloneWeigths[11].toString();
                uniCount = DataWorker.AloneWeigths[12].toString();
                break;
            case "student":
                secondHeader = "Anzahl";
                biblCount = DataWorker.StudentWeigths[0].toString();
                clinCount = DataWorker.StudentWeigths[1].toString();
                dParkCount = DataWorker.StudentWeigths[2].toString();
                docCount = DataWorker.StudentWeigths[3].toString();
                chilCount = DataWorker.StudentWeigths[4].toString();
                museCount = DataWorker.StudentWeigths[5].toString();
                mussCount = DataWorker.StudentWeigths[6].toString();
                parkCount = DataWorker.StudentWeigths[7].toString();
                PoliceStationCount = DataWorker.StudentWeigths[8].toString();
                poolCount = DataWorker.StudentWeigths[9].toString();
                offCount = DataWorker.StudentWeigths[10].toString();
                schCount = DataWorker.StudentWeigths[11].toString();
                uniCount = DataWorker.StudentWeigths[12].toString();
                break;
            case "family":
                secondHeader = "Anzahl";
                biblCount = DataWorker.FamilyWeigths[0].toString();
                clinCount = DataWorker.FamilyWeigths[1].toString();
                dParkCount = DataWorker.FamilyWeigths[2].toString();
                docCount = DataWorker.FamilyWeigths[3].toString();
                chilCount = DataWorker.FamilyWeigths[4].toString();
                museCount = DataWorker.FamilyWeigths[5].toString();
                mussCount = DataWorker.FamilyWeigths[6].toString();
                parkCount = DataWorker.FamilyWeigths[7].toString();
                PoliceStationCount = DataWorker.FamilyWeigths[8].toString();
                poolCount = DataWorker.FamilyWeigths[9].toString();
                offCount = DataWorker.FamilyWeigths[10].toString();
                schCount = DataWorker.FamilyWeigths[11].toString();
                uniCount = DataWorker.FamilyWeigths[12].toString();
                break;
            case "disabled":
                secondHeader = "Anzahl";
                biblCount = DataWorker.DisabledWeigths[0].toString();
                clinCount = DataWorker.DisabledWeigths[1].toString();
                dParkCount = DataWorker.DisabledWeigths[2].toString();
                docCount = DataWorker.DisabledWeigths[3].toString();
                chilCount = DataWorker.DisabledWeigths[4].toString();
                museCount = DataWorker.DisabledWeigths[5].toString();
                mussCount = DataWorker.DisabledWeigths[6].toString();
                parkCount = DataWorker.DisabledWeigths[7].toString();
                PoliceStationCount = DataWorker.DisabledWeigths[8].toString();
                poolCount = DataWorker.DisabledWeigths[9].toString();
                offCount = DataWorker.DisabledWeigths[10].toString();
                schCount = DataWorker.DisabledWeigths[11].toString();
                uniCount = DataWorker.DisabledWeigths[12].toString();
                break;
            case "young-couple":
                secondHeader = "Anzahl";
                biblCount = DataWorker.YoungCoupleWeigths[0].toString();
                clinCount = DataWorker.YoungCoupleWeigths[1].toString();
                dParkCount = DataWorker.YoungCoupleWeigths[2].toString();
                docCount = DataWorker.YoungCoupleWeigths[3].toString();
                chilCount = DataWorker.YoungCoupleWeigths[4].toString();
                museCount = DataWorker.YoungCoupleWeigths[5].toString();
                mussCount = DataWorker.YoungCoupleWeigths[6].toString();
                parkCount = DataWorker.YoungCoupleWeigths[7].toString();
                PoliceStationCount = DataWorker.YoungCoupleWeigths[8].toString();
                poolCount = DataWorker.YoungCoupleWeigths[9].toString();
                offCount = DataWorker.YoungCoupleWeigths[10].toString();
                schCount = DataWorker.YoungCoupleWeigths[11].toString();
                uniCount = DataWorker.YoungCoupleWeigths[12].toString();
                break;
            case "pensioneur":
                secondHeader = "Anzahl";
                biblCount = DataWorker.PensioneurWeigths[0].toString();
                clinCount = DataWorker.PensioneurWeigths[1].toString();
                dParkCount = DataWorker.PensioneurWeigths[2].toString();
                docCount = DataWorker.PensioneurWeigths[3].toString();
                chilCount = DataWorker.PensioneurWeigths[4].toString();
                museCount = DataWorker.PensioneurWeigths[5].toString();
                mussCount = DataWorker.PensioneurWeigths[6].toString();
                parkCount = DataWorker.PensioneurWeigths[7].toString();
                PoliceStationCount = DataWorker.PensioneurWeigths[8].toString();
                poolCount = DataWorker.PensioneurWeigths[9].toString();
                offCount = DataWorker.PensioneurWeigths[10].toString();
                schCount = DataWorker.PensioneurWeigths[11].toString();
                uniCount = DataWorker.PensioneurWeigths[12].toString();
                break;
        }

        let content: JSX.Element = (<div className="distance-table">
            <table>
                <thead>
                <th>Kategorie</th>
                <th>{secondHeader}</th>
                </thead>
                <tbody>
                <tr>
                    <td>Bibliothek</td>
                    <td>{biblCount}</td>
                </tr>
                <tr>
                    <td>Krankenhaus</td>
                    <td>{clinCount}</td>
                </tr>
                <tr>
                    <td>Behindertparkplätze</td>
                    <td>{dParkCount}</td>
                </tr>
                <tr>
                    <td>Arzt</td>
                    <td>{docCount}</td>
                </tr>
                <tr>
                    <td>Kindergarten</td>
                    <td>{chilCount}</td>
                </tr>
                <tr>
                    <td>Museen</td>
                    <td>{mussCount}</td>
                </tr>
                <tr>
                    <td>Musikschulen</td>
                    <td>{museCount}</td>
                </tr>
                <tr>
                    <td>Grünzonen</td>
                    <td>{parkCount}</td>
                </tr>
                <tr>
                    <td>Polizeistellen</td>
                    <td>{PoliceStationCount}</td>
                </tr>
                <tr>
                    <td>Schwimmbad</td>
                    <td>{poolCount}</td>
                </tr>
                <tr>
                    <td>Öffentliche Verkehrsmittel</td>
                    <td>{offCount}</td>
                </tr>
                <tr>
                    <td>Schulen</td>
                    <td>{schCount}</td>
                </tr>
                <tr>
                    <td>Universitäten</td>
                    <td>{uniCount}</td>
                </tr>
                </tbody>
            </table>
        </div>);

        setMenuContent(content);
        setMenuVisible(true); // Показываем меню
    };

    const handleCloseMenu = () => {
        setMenuVisible(false); // Скрываем меню
    };

    return (
        <div className="step-content">
            <h1 style={{margin: '0 auto 0 6%'}}>
                Schritt 4
            </h1>
            <div className="step-content-exp">
                <p>Hier ist der Rating von jede Kategorie ist schon berechnet. Also bleibt nur die Gesamtnote zu
                    bekommen</p>
                <p>Wieder jede Gruppe hat eigene Gewichtsmuster. Das heißt, dass alle Kategorien werden nicht gleichen
                    gewicht beim Gesamtnote haben.</p>
                <p>Unten können Sie auf jeweilige Gruppe clicken, um den Gewichtmuster zu sehen</p>
                <div className="buttons-place">
                    <button className="group-button" onClick={() => handleButtonClick('alone')}>Alleinwohnen</button>
                    <button className="group-button" onClick={() => handleButtonClick('student')}>Student</button>
                    <button className="group-button" onClick={() => handleButtonClick('young-couple')}>Pärchen</button>
                    <button className="group-button" onClick={() => handleButtonClick('family')}>Familie</button>
                    <button className="group-button" onClick={() => handleButtonClick('pensioneur')}> Rentner</button>
                    <button className="group-button" onClick={() => handleButtonClick('disabbled')}>Behinderte</button>
                </div>
                <br/>
                <p>Nachdem das ausgerechnet wird, bekommt man die Gesamtnote</p>
            </div>
            {menuVisible && (
                <div className="menu-overlay">
                    <div className="menu-content">
                        <CloseButton onClick={() => handleCloseMenu()} className="count-button"></CloseButton>
                        <p>{menuContent}</p>
                    </div>
                </div>
            )}
        </div>

    )
}

export default FourthStep;