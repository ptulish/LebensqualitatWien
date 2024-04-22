import ResultData from "../Data/ResultData";
import RatingImageSmall from "./RatingImageSmall";
import "../styles/RatingTable.css"

function getColorByRating(rating: string) {
    const numRating = parseFloat(rating);
    if (numRating >= 3.9) {
        return '#90EE90';
    } else if (numRating >= 2.5) {
        return '#FFD700'; // Золотисто-жёлтый
    } else if (numRating >= 1.5) {
        return '#D8BFD8'; // Светло-сиреневый
    } else {
        return '#FFA07A'; // Светло-оранжевый
    }
}
function formatRating(rating: string) {
    const numericRating = parseFloat(rating);
    return numericRating.toFixed(1);
}



const RatingTable: React.FC = () => {
    const ratingValues = [
        ['Bibliotheken', ResultData.BibliothekRating],
        ['Karnkenhäuser', ResultData.ClinicRating],
        ['Behindertparkplätze', ResultData.DisParkRating],
        ['Ärzte', ResultData.DoctorRating],
        ['Kindergarten', ResultData.KinderGartenRating],
        ['Museen', ResultData.MuseumRating],
        ['Musikschulen', ResultData.MusikSchoolRating],
        ['Parken', ResultData.ParkRating],
        ['Polizeistellen', ResultData.PoliceStationRating],
        ['Schwimmbäder', ResultData.PoolRating],
        ['Öffentliche Verkersmittel', ResultData.PublicTransportRating],
        ['Schulen', ResultData.SchoolRating],
        ['Universitäten', ResultData.UniversityRating],
    ];
    let color: string;

    // Разделяем массив на строки для таблицы
    const rows = [];
    for (let i = 0; i < ratingValues.length; i += 3) {
        rows.push(ratingValues.slice(i, i + 3));
    }

    return (
        <table>
            <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map(([ratingKey, ratingValue], cellIndex) => (
                        ratingValue !== "-1" ? (
                            <td key={cellIndex}>
                                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', verticalAlign: 'middle'}}>
                                    <span><RatingImageSmall number={ratingKey}/>{ratingKey}: </span>
                                    <span style={{color: getColorByRating(ratingValue)}} className="rating">{formatRating(ratingValue)}</span>
                                </div>
                            </td>
                        ) : null // Пропускаем ячейку, если ratingValue равно "-1"
                    ))}
                    {/* Добавляем пустые ячейки, если строка короче остальных */}
                    {Array.from({ length: 3 - row.filter(item => item[1] !== "-1").length }).map((_, emptyCellIndex) => (
                        <td key={`empty-${emptyCellIndex}`} />
                    ))}
                </tr>
            ))}

            </tbody>
        </table>
    );
};

export default RatingTable;
