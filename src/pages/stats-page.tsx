import StatsImage from "../Assets/stats-image.jpg"
import "../styles/stats-page.css"
import ResultData from "../Data/ResultData";

function StatsPage(){
    return (
        <div className="stats-page" style={{backgroundImage: `url(${StatsImage})`}}>
            <div className="stats-image-container">
                <div className="stats-image-content">
                    <h1 style={{textAlign: 'left'}}>Wien in Zahlen</h1>
                    <div className="stats-text">
                        <p>In ganz Wien gibt es: </p>
                        <li>{ResultData.BibliothekCount} Bibliotheken</li>
                        <li>{ResultData.ClinicCount} Krankenhäuser</li>
                        <li>{ResultData.DisParkCount} Parkplätze für Behinderte</li>
                        <li>{ResultData.DoctorsCount} Ärzte</li>
                        <li>{ResultData.KindergartdensCount} Kindergrten</li>
                        <li>{ResultData.MuseumsCount} Museen</li>
                        <li>{ResultData.MusicSchoolsCount} Musikschulen</li>
                        <li>{ResultData.ParksCount} Grünzonen</li>
                        <li>{ResultData.PoliceStationsCount} Polizeistellen</li>
                        <li>{ResultData.PoolsCount} Schwimmbäder</li>
                        <li>{ResultData.StopsCount} Öffentliche Verkehrsmittel Haltestellen</li>
                        <li>{ResultData.SchoolsCount} Schulen</li>
                        <li>{ResultData.UniversitiesCount} Universitäten(Stellen)</li>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StatsPage;