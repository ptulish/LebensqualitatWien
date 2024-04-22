function FifthStep(){
    return (<div className="step-content">
        <h1 style={{margin: '0 auto 0 6%'}}>
            Allgemeine Formel
        </h1>
        <div className="step-content-exp">
            <p>Group = [ Alleinwohnende, Student, Familie, ... ]<br/>
            Kategories = [ Bibliothek, Krankenhaus, Schule, ... ]<br/>
            Weights = [ Alleinwohnende = [ 1, 2, 1, ... ], Student = [ 2, 1, 1 ], ...]<br/>
            Count = [ Alleinwohnende = [ Bibliothek = 3, Krankenhaus = 2, ...], Student = [ Bibliothek = 5, Krankenhaus = 2, ...], ... ]<br/>
            GetNextInstanceRating = suche nach Count Objekten der Kategorie und bei jedem Objekt die Rating von Distanz ausrechnen</p>
            <p>
                Für die Gruppe Student: <br/>
                foreach (kat in Kategories)<br/>
                Average += GetNextInstanceRatings(kat, Count[Student][kat]) * Weights[Student][kat]<br/>
                AverageCount += Weights[Student][kat]<br/>then<br/>
                AverageRating = average / AverageCount
            </p>
            <br/>
            <p>Die Werte die hier benutz werden sind nicht wirkliche Werten die dann in Algorithmus benutzt werden. Diese Werten
            können Sie beim 2 Schritt (Count) und beim 4 Schritt (Weights)</p>
        </div>
    </div>)
}

export default FifthStep;