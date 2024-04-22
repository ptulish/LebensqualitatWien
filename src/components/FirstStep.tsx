import image from "../Assets/wien-panorama_fotolia.jpg"
import ratingImageSmall from "./RatingImageSmall";
import "../styles/EplainAlgorithmPage.css"

function FirstStep(){

    return (
        <div className="step-content">
            <h1 style={{margin: '0 auto 0 6%'}}>
                Schritt 1
            </h1>
            <div className="step-content-exp">
                <p>Erster Schritt ist die Adressen- und Gruppeneingabe in die Form auf der Webseite</p>
                <p>Die Adresse wird in Coordinaten umgewandelt</p>
                <br/><br/>
                <p>Bitte geben Sie eine Adresse ein und whlen Sie die Gruppe.</p>
                <p>Adresse darf innerhalb von Stadt Wien sein</p>
                <p>Es gibt sechs Gruppen: Aleinwohnen, Student, Pärchen, Familie, Rentner und Behinderte</p>
                <p>Die Gruppe hat grössten Einfluss auf die Benotung</p>
            </div>
        </div>
    )
}

export default FirstStep;