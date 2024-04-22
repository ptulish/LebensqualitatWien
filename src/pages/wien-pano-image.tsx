import React, {Component} from "react";
import wienPanoram from '../Assets/R.jpg';

export default class WienPanoImage extends Component {
    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: `url(${wienPanoram})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '94vh',
                    alignItems: 'center',
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '60%',
                        bottom: '60%',
                        color: 'white',
                        textAlign: 'left',
                    }}>
                        <h1 style={{ color: "red"}}>Lebensqualität in Wien</h1>
                        <p style={{ color: "red"}}>Erfahre über das Lebensqualität an veschiedenen Adressen in Wien</p>
                    </div>
                </div>

            </div>
    )
        ;
    }
}