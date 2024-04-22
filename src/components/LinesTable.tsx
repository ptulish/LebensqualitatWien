import React from 'react';
import '../styles/LinesTable.css'
import ResultData from "../Data/ResultData"; // Importieren der Styles

function formatDistance(distanceStr: string): string {
    var distance = parseFloat(distanceStr.replace(',', '.')); // Ersetze ',' durch '.', um eine korrekte Umwandlung zu gewährleisten

    if (isNaN(distance)) {
        return distanceStr;
    }

    if (distance < 1) {
        return (distance * 1000).toFixed(2) + " Meter";
    } else {
        return (distance).toFixed(2) + " KM";
    }
}

function LinesTable() {
    var lines = ResultData.Lines;
    var distances = ResultData.LinesDistance;
    return (
        <div style={{overflowY: 'auto', overflowX: 'hidden' ,width: '100%', height: '100%'}} >
            <h1 className="table-header">Näherste öffentliche Verkehrstmittel:</h1>
            <table className="lines-table">
                <tbody>
                {lines.map((line, index) => (
                    <tr key={index}>
                        <td style={{maxWidth: '1vw'}}>{line}</td>
                        <td >{formatDistance(distances[index])}</td> {/* Verwende die formatDistance-Funktion */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export default LinesTable;