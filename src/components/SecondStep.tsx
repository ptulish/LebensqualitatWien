import "../styles/EplainAlgorithmPage.css"
import {ReactNode, useState} from "react";
import {CloseButton} from "react-bootstrap";
import DataWorker from "../Data/DataWorker";

function SecondStep(){
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuContent, setMenuContent] = useState<ReactNode>('');

    const handleButtonClick = (group: any) => {
        let biblCount:string = "-1";
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
        if(group == "distance"){
            var content = (<div className="distance-table">
                <table>
                    <thead>
                    <th>Kategorie</th>
                    <th>Distanzbewertung </th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Bibliothek</td>
                        <td>
                            <tr>
                                <th>&lt; 1 KM</th>
                                <th>&lt; 2 KM</th>
                                <th>&lt; 3 KM</th>
                                <th>&lt; 4 KM</th>
                                <th>&lt; 8 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Krankenhaus</td>
                        <td>
                            <tr>
                                <th>&lt; 1 KM</th>
                                <th>&lt; 2 KM</th>
                                <th>&lt; 3 KM</th>
                                <th>&lt; 4 KM</th>
                                <th>&lt; 8 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Behindertparkplätze</td>
                        <td>
                            <tr>
                                <th>&lt; 90 Meter</th>
                                <th>&lt; 160 Meter</th>
                                <th>&lt; 500 Meter</th>
                                <th>&lt; 1 KM</th>
                                <th>&lt; 2 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Arzt</td>
                        <td>
                            <tr>
                                <th>&lt; 200 Meter</th>
                                <th>&lt; 400 Meter</th>
                                <th>&lt; 1 KM</th>
                                <th>&lt; 1.8 KM</th>
                                <th>&lt; 3 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Kindergarten</td>
                        <td>
                            <tr>
                                <th>&lt; 400 Meter</th>
                                <th>&lt; 800 Meter</th>
                                <th>&lt; 1.9 KM</th>
                                <th>&lt; 3 KM</th>
                                <th>&lt; 5 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Museen</td>
                        <td>
                            <tr>
                                <th>&lt; 1KM</th>
                                <th>&lt; 2KM</th>
                                <th>&lt; 3KM</th>
                                <th>&lt; 4KM</th>
                                <th>&lt; 8KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Musikschulen</td>
                        <td>
                            <tr>
                                <th>&lt; 400 Meter</th>
                                <th>&lt; 800 Meter</th>
                                <th>&lt; 1.9 KM</th>
                                <th>&lt; 3 KM</th>
                                <th>&lt; 5 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Grünzonen</td>
                        <td>
                            <tr>
                                <th>&lt; 200 Meter</th>
                                <th>&lt; 400 Meter</th>
                                <th>&lt; 1 KM</th>
                                <th>&lt; 1.8 KM</th>
                                <th>&lt; 3 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Polizeistellen</td>
                        <td>
                            <tr>
                                <th>&lt; 400 Meter</th>
                                <th>&lt; 800 Meter</th>
                                <th>&lt; 1.9 KM</th>
                                <th>&lt; 3 KM</th>
                                <th>&lt; 5 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Schwimmbad</td>
                        <td>
                            <tr>
                                <th>&lt; 1KM</th>
                                <th>&lt; 2KM</th>
                                <th>&lt; 3KM</th>
                                <th>&lt; 4KM</th>
                                <th>&lt; 8KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Öffentliche Verkehrsmittel</td>
                        <td>
                            <tr>
                                <th>&lt; 90 Meter</th>
                                <th>&lt; 160 Meter</th>
                                <th>&lt; 500 Meter</th>
                                <th>&lt; 1 KM</th>
                                <th>&lt; 2 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Schulen</td>
                        <td>
                            <tr>
                                <th>&lt; 200 Meter</th>
                                <th>&lt; 400 Meter</th>
                                <th>&lt; 1 KM</th>
                                <th>&lt; 1.8 KM</th>
                                <th>&lt; 3 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td>Universitäten</td>
                        <td>
                            <tr>
                                <th>&lt; 400 Meter</th>
                                <th>&lt; 800 Meter</th>
                                <th>&lt; 1.9 KM</th>
                                <th>&lt; 3 KM</th>
                                <th>&lt; 5 KM</th>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>4</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>)
            setMenuContent(content);
            setMenuVisible(true);
            return;
        }

        switch (group) {
            case "alone":
                secondHeader = "Anzahl";
                biblCount = DataWorker.AloneCounts[0].toString();
                clinCount = DataWorker.AloneCounts[1].toString();
                dParkCount = DataWorker.AloneCounts[2].toString();
                docCount = DataWorker.AloneCounts[3].toString();
                chilCount = DataWorker.AloneCounts[4].toString();
                museCount = DataWorker.AloneCounts[5].toString();
                mussCount = DataWorker.AloneCounts[6].toString();
                parkCount = DataWorker.AloneCounts[7].toString();
                PoliceStationCount = DataWorker.AloneCounts[8].toString();
                poolCount = DataWorker.AloneCounts[9].toString();
                offCount = DataWorker.AloneCounts[10].toString();
                schCount = DataWorker.AloneCounts[11].toString();
                uniCount = DataWorker.AloneCounts[12].toString();
                break;
            case "student":
                secondHeader = "Anzahl";
                biblCount = DataWorker.StudentCounts[0].toString();
                clinCount = DataWorker.StudentCounts[1].toString();
                dParkCount = DataWorker.StudentCounts[2].toString();
                docCount = DataWorker.StudentCounts[3].toString();
                chilCount = DataWorker.StudentCounts[4].toString();
                museCount = DataWorker.StudentCounts[5].toString();
                mussCount = DataWorker.StudentCounts[6].toString();
                parkCount = DataWorker.StudentCounts[7].toString();
                PoliceStationCount = DataWorker.StudentCounts[8].toString();
                poolCount = DataWorker.StudentCounts[9].toString();
                offCount = DataWorker.StudentCounts[10].toString();
                schCount = DataWorker.StudentCounts[11].toString();
                uniCount = DataWorker.StudentCounts[12].toString();
                break;
            case "family":
                secondHeader = "Anzahl";
                biblCount = DataWorker.FamilyCounts[0].toString();
                clinCount = DataWorker.FamilyCounts[1].toString();
                dParkCount = DataWorker.FamilyCounts[2].toString();
                docCount = DataWorker.FamilyCounts[3].toString();
                chilCount = DataWorker.FamilyCounts[4].toString();
                museCount = DataWorker.FamilyCounts[5].toString();
                mussCount = DataWorker.FamilyCounts[6].toString();
                parkCount = DataWorker.FamilyCounts[7].toString();
                PoliceStationCount = DataWorker.FamilyCounts[8].toString();
                poolCount = DataWorker.FamilyCounts[9].toString();
                offCount = DataWorker.FamilyCounts[10].toString();
                schCount = DataWorker.FamilyCounts[11].toString();
                uniCount = DataWorker.FamilyCounts[12].toString();
                break;
            case "disabled":
                secondHeader = "Anzahl";
                biblCount = DataWorker.DisabledCounts[0].toString();
                clinCount = DataWorker.DisabledCounts[1].toString();
                dParkCount = DataWorker.DisabledCounts[2].toString();
                docCount = DataWorker.DisabledCounts[3].toString();
                chilCount = DataWorker.DisabledCounts[4].toString();
                museCount = DataWorker.DisabledCounts[5].toString();
                mussCount = DataWorker.DisabledCounts[6].toString();
                parkCount = DataWorker.DisabledCounts[7].toString();
                PoliceStationCount = DataWorker.DisabledCounts[8].toString();
                poolCount = DataWorker.DisabledCounts[9].toString();
                offCount = DataWorker.DisabledCounts[10].toString();
                schCount = DataWorker.DisabledCounts[11].toString();
                uniCount = DataWorker.DisabledCounts[12].toString();
                break;
            case "young-couple":
                secondHeader = "Anzahl";
                biblCount = DataWorker.YoungCoupleCounts[0].toString();
                clinCount = DataWorker.YoungCoupleCounts[1].toString();
                dParkCount = DataWorker.YoungCoupleCounts[2].toString();
                docCount = DataWorker.YoungCoupleCounts[3].toString();
                chilCount = DataWorker.YoungCoupleCounts[4].toString();
                museCount = DataWorker.YoungCoupleCounts[5].toString();
                mussCount = DataWorker.YoungCoupleCounts[6].toString();
                parkCount = DataWorker.YoungCoupleCounts[7].toString();
                PoliceStationCount = DataWorker.YoungCoupleCounts[8].toString();
                poolCount = DataWorker.YoungCoupleCounts[9].toString();
                offCount = DataWorker.YoungCoupleCounts[10].toString();
                schCount = DataWorker.YoungCoupleCounts[11].toString();
                uniCount = DataWorker.YoungCoupleCounts[12].toString();
                break;
            case "pensioneur":
                secondHeader = "Anzahl";
                biblCount = DataWorker.PensioneurCounts[0].toString();
                clinCount = DataWorker.YoungCoupleCounts[1].toString();
                dParkCount = DataWorker.YoungCoupleCounts[2].toString();
                docCount = DataWorker.YoungCoupleCounts[3].toString();
                chilCount = DataWorker.YoungCoupleCounts[4].toString();
                museCount = DataWorker.YoungCoupleCounts[5].toString();
                mussCount = DataWorker.YoungCoupleCounts[6].toString();
                parkCount = DataWorker.YoungCoupleCounts[7].toString();
                PoliceStationCount = DataWorker.YoungCoupleCounts[8].toString();
                poolCount = DataWorker.YoungCoupleCounts[9].toString();
                offCount = DataWorker.YoungCoupleCounts[10].toString();
                schCount = DataWorker.YoungCoupleCounts[11].toString();
                uniCount = DataWorker.YoungCoupleCounts[12].toString();
                break;
        }

        var content = (<div className="distance-table">
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

    return (<div className="step-content">
        <h1 style={{margin: '0 auto 0 6%'}}>
            Schritt 2
        </h1>
        <div className="step-content-exp">
            <p>Hier werden die Nähersten Objekten von jede Kategorie gefunden</p>
            <p>Die Ausgewählte Gruppe hat einen Einfluss auf die Anzahl von Objekten, die in jeder Kategorie gesucht
                werden</p>
            <p>Gleich aus der nähersten Objekten wird die Note ausgerechnet:</p>
            <p>Es wird auf die Distanz geschaut und dann die Note gegeben. Für jede Kategorie gibt es eigenes Muster wie die Distanz bewertet sein sollte</p>
            <p>Unten können Sie auf jeweilige Gruppe drücken um zu sehen, wie viele Objekte aus jeweilige Kategorie genommen wird</p>
            <div className="buttons-place">
                <button className="group-button" onClick={() => handleButtonClick('alone')}>Alleinwohnen</button>
                <button className="group-button" onClick={() => handleButtonClick('student')}>Student</button>
                <button className="group-button" onClick={() => handleButtonClick('young-couple')}>Pärchen</button>
                <button className="group-button" onClick={() => handleButtonClick('family')}>Familie</button>
                <button className="group-button" onClick={() => handleButtonClick('pensioneur')}> Rentner</button>
                <button className="group-button" onClick={() => handleButtonClick('disabbled')}>Behinderte</button>


            </div>
            <button className="distance-button" onClick={() => handleButtonClick('distance')}>Distanzbewertung</button>
        </div>
        {menuVisible && (
            <div className="menu-overlay">
                <div className="menu-content">
                    <CloseButton onClick={() => handleCloseMenu()} className="count-button"></CloseButton>
                    <p>{menuContent}</p>
                </div>
            </div>
        )}
    </div>);
}

export default SecondStep;
