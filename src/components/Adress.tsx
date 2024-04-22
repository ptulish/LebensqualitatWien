import ResultData from "../Data/ResultData";
import "../styles/Address.css"

function capitalizeWords(str: string): string {
    return str
        .split(' ') // Разделяем строку на слова
        .map((word) => {
            // Обрабатываем каждое слово отдельно
            return word
                .split(/[-_]/) // Разделяем слово на части, если оно содержит дефисы или нижние подчёркивания
                .map((part) => {
                    // Капитализируем каждую часть отдельно
                    return part.charAt(0).toLocaleUpperCase() + part.slice(1).toLocaleLowerCase();
                })
                .join('-'); // Соединяем части обратно с дефисами
        })
        .join(' '); // Соединяем слова обратно в строку
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
