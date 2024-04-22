import React from "react";
import { useLocation } from 'react-router-dom';
import "../styles/EplainAlgorithmPage.css"
import WienPanoImageForEplain from "../Assets/wien-panorama_fotolia.jpg"
import Carousel from 'react-bootstrap/Carousel';
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import FourthStep from "../components/FourthStep";
import FifthStep from "../components/FifthStep";


function ExplainAlgorithmPage() {
    const location = useLocation();
    return (
        <div className="explain-algorithm-page" style={{backgroundImage: `url(${WienPanoImageForEplain})`}}>
            <div className="explain-algorithm-page-content">
                <div className="explain-algorithm-page-header">
                    <h1> Algorithmus </h1>

                </div>
                <div className="explain-algorithm-page-carousel-container">
                    <Carousel interval={null}   prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}>
                        <Carousel.Item>
                            <div className="step-container">
                                <FirstStep />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="step-container">
                                <SecondStep/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="step-container">
                                <ThirdStep />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="step-container">
                                <FourthStep />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="step-container">
                                <FifthStep />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>


            </div>
        </div>
    )
}

export default ExplainAlgorithmPage;