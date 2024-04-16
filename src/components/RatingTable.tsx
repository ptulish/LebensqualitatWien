import ResultData from "./ResultData";

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
        ['Bibliothek Rating', ResultData.BibliothekRating],
        ['Clinic Rating', ResultData.ClinicRating],
        ['Disability Park Rating', ResultData.DisParkRating],
        ['Doctor Rating', ResultData.DoctorRating],
        ['Kindergarten Rating', ResultData.KinderGartenRating],
        ['Museum Rating', ResultData.MuseumRating],
        ['Music School Rating', ResultData.MusikSchoolRating],
        ['Park Rating', ResultData.ParkRating],
        ['Police Station Rating', ResultData.PoliceStationRating],
        ['Pool Rating', ResultData.PoolRating],
        ['Public Transport Rating', ResultData.PublicTransportRating],
        ['School Rating', ResultData.SchoolRating],
        ['University Rating', ResultData.UniversityRating],
    ];
    let color: string;

    // Разделяем массив на строки для таблицы
    const rows = [];
    for (let i = 0; i < ratingValues.length; i += 3) {
        rows.push(ratingValues.slice(i, i + 3));
    }

    return (
        <table style={{
            margin: '2%',
            width: '70%', /* Заполнение всего доступного пространства */
            borderCollapse: 'collapse',
            fontSize: '22px'
        }}>
            <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex} style={{
                    border: '0px solid white', // Удаление границ ячеек
                    textAlign: 'left', // Выравнивание текста по левому краю
                    padding: '8px'
                }}>
                    {row.map(([ratingKey, ratingValue], cellIndex) => (
                        ratingValue != "-1" ? (
                            <td key={cellIndex} style={{
                                border: '1px solid white', // Добавление границ ячеек
                                padding: '8px',
                                textAlign: 'left',
                                justifyContent: 'space-between',
                                width: 'auto'
                            }}>
                                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                    <span>{ratingKey}: </span>
                                    <span style={{color: getColorByRating(ratingValue)}}>{formatRating(ratingValue)}</span>
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
