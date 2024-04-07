import React, {Component} from "react";
import {Button, Container, Form, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import wienPanoram from '../Assets/R.jpg';

export default class WienPanoImage extends Component {
    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: `url(${wienPanoram})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw',
                    height: '100vh', // Adjust this value as needed
                    display: 'flex', // Use flexbox to center content
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center', // Center vertically
                }}>
                    {/* Content div on the image */}
                    <div style={{
                        position: 'absolute', // Positioned absolutely relative to its nearest positioned ancestor
                        left: '60%', // 20% from the left side of the container
                        bottom: '60%', // 20% from the bottom of the container
                        color: 'white', // Text color
                        textAlign: 'left', // Align text to the left
                    }}>
                        <h1 style={{ color: "red"}}>Lebensqualotät in Wien</h1>
                        <p style={{ color: "red"}}>Erfahre über das Lebensqualität an veschiedenen Adressen in Wien</p>
                    </div>
                </div>

            </div>
    )
        ;
    }
}