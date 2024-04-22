import "../styles/impressum-page.css"
import WienPanoImageForEplain from "../Assets/wien-panorama_fotolia.jpg";
import React from "react";

function ImpressumPage() {
    return (<div className="impressum-page" style={{backgroundImage: `url(${WienPanoImageForEplain})`}}>
        <div className="impressum-page-content">
            <div className="impressum-page-header">
                <h1> Impressum </h1>
            </div>
            <div className="impressum-page-container">
                <h3>Author: Pavels Tuliss</h3>
                <h3>Projekt gemacht für Fachhochschule Technikum Wien</h3>
                <h3>Email für Kontakt: if21b022@technikum-wien</h3>
                <h3>Distanzen in Diesem Algorithmus sind gerade Linie zwischen eingegebene Adresse und Objekten von Kategorien</h3>
            </div>
        </div>
    </div>)

}

export default ImpressumPage;