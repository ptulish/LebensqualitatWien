import ResultData from "../Data/ResultData";
import "../styles/AverageRating.css"

function formatRating(rating: string) {
    const numericRating = parseFloat(rating);
    return numericRating.toFixed(1);
}

function getColorByRating(rating: string) {
    const numRating = parseFloat(rating);
    if (numRating >= 3.9) {
        return '#90EE90';
    } else if (numRating >= 2.5) {
        return '#FFD700';
    } else if (numRating >= 1.5) {
        return '#D8BFD8';
    } else {
        return '#FFA07A';
    }
}

function AverageRating() {
    var rating =formatRating(ResultData.AverageRating);
    return (
        <div className="div-container">
            <h1 style={{color: getColorByRating(rating)}} className="avg-rating" >{rating}</h1>
        </div>
    )
}

export default AverageRating;