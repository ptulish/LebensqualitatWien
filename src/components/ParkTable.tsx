import ResultData from "../Data/ResultData";
import "../styles/ParkTable.css"
import DrinkImage from "../Assets/icons8-drinking-fountain-24 (1).png"
import PlayImage from "../Assets/icons8-playground-24.png"
import DistanceImage from "../Assets/icons8-ruler-24.png"
import DogImage from "../Assets/icons8-dog-24.png"

function formatDistance(distance: number): string {
    if (distance < 1) {
        return (distance * 1000).toFixed(0) + " Meter";
    } else {
        return (distance).toFixed(2) + " KM";
    }
}

function formatBoolean(bool: boolean): string {
    return bool ? "Ja" : "Nein";
}

function ParkTable(){

    return (
            <div className="table-container">
                <table className="park-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th><img src={DrinkImage} alt={`Image Trinkbrunnen`}/></th>
                        <th><img src={DogImage} alt={`Image Hundezone`}/></th>
                        <th><img src={PlayImage} alt={`Image Playground`}/></th>
                        <th><img src={DistanceImage} alt={`Image Distance`}/></th>
                    </tr>
                    </thead>
                    <tbody>
                    {ResultData.ParkNames.map((name, index) => (
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{formatBoolean(ResultData.ParkDrinks[index])}</td>
                            <td>{formatBoolean(ResultData.ParkPlay[index])}</td>
                            <td>{formatBoolean(ResultData.ParkDogs[index])}</td>
                            <td>{formatDistance(ResultData.ParkDistances[index])}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>
    );
}

export default ParkTable;