import ResultData from "./ResultData";

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
    return <div  style={{
        marginTop: '3vh',
        textAlign: 'center',
        verticalAlign: 'middle',
        alignItems: "end",
        fontSize: '40px',
        backgroundColor: "transparent",
        height: 'auto',
        width: 'auto',

    }}>
        <h1>{Street}</h1>
        <h2>{District}</h2>
    </div>;
}

export default Address;
