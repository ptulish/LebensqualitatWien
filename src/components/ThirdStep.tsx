function ThirdStep(){
    return (
        <div className="step-content">
            <h1 style={{margin: '0 auto 0 6%'}}>
                Schritt 3
            </h1>
            <div className="step-content-exp">
                <p>Jedoch zwei Kategorien brauchen eine schwierige Bewertung: Grünzonen und öffentliche Verkehrsmittel</p>
                <br/>
                <p>Grünzonen:</p>
                <p> Hier wird noch angeschaut ob der Park die Hundezone, Spielplatz und Trinkbrunnen hat. Wenn eine oder mehrere getroffen werden, wird das den Rating von Park vergrössert.
                    Auch die Fläche hat einen Einfluss auf die Rating</p>
                <br/>
                <p>Öffentliche Verkehrsmittel</p>
                <p>Hier wird es geprüft, was für eine Verkehrsmittel ist es. Wenn es eine U-Bahn Station in der Nähe ist, wird das den Rating von der Haltestelle verbessern.</p>
            </div>
        </div>
    )
}

export default ThirdStep;