import ResultData from "../Data/ResultData";
import "../styles/Address.css"

function capitalizeWords(str: string): string {
    return str
        .split(' ')
        .map((word) => {
            return word
                .split(/[-_]/)
                .map((part) => {
                    return part.charAt(0).toLocaleUpperCase() + part.slice(1).toLocaleLowerCase();
                })
                .join('-');
        })
        .join(' ');
}

function Address() {
    var Street = capitalizeWords(ResultData.Address);
    var District = capitalizeWords(ResultData.District);
    return <div className="address" >
        <div>
            <h1>{Street}</h1>
        </div>
        <div>
            <h2>{District}</h2>

        </div>
    </div>;
}

export default Address;
