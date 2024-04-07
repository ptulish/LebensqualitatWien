import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Container, Dropdown, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {useSearchParams} from "react-router-dom";

interface AddressCheckResponse {
    isValid: boolean;
    message: string;
}


const Header: React.FC = () => {
    let navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [dropdownTitle, setDropdownTitle] = useState('Kategorie');


    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("helo");
        event.preventDefault();

        // Hier würdest du deine fetch-Anfrage ausführen
        // Beispiel:
        fetch('http://localhost:5062/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: searchQuery, item: selectedItem }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerkfehler');
                }
                return response.text(); // Verwende .text() hier
            })
            .then(data => {
                console.log('here');
                console.log(data); // Sollte "Hallo von Server" ausgeben
                navigate('/search-result', { state: { data } });
            })
            .catch(error => {
                console.error('Fehler:', error);
            });

    };

    const handleSelect = (eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
        setSelectedItem(eventKey || '');
        const selectedText = (event.target as HTMLElement).textContent;
        setDropdownTitle(selectedText || 'Wähle eine Option');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#">Lebensqualitat in Wien</Navbar.Brand>
                    <Form className="d-flex" style={{ width: '30%' }} onSubmit={handleSearch}>
                        <Form.Control
                            name="search"
                            type="search"
                            placeholder="Geben Sie eine Adresse ein..."
                            className="me-2"
                            aria-label="Search"
                            onChange={handleInputChange}
                        />
                        <Dropdown onSelect={handleSelect}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {dropdownTitle}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="family">Familie</Dropdown.Item>
                                <Dropdown.Item eventKey="student">Student</Dropdown.Item>
                                <Dropdown.Item eventKey="alone">Aleinwohnen</Dropdown.Item>
                                <Dropdown.Item eventKey="pensioneur">Rentner</Dropdown.Item>
                                <Dropdown.Item eventKey="invalid">Behinderte</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{textAlign: 'left'}}>Starterseite</Nav.Link>
                            <Nav.Link href="#action2">Algorithmus</Nav.Link>
                            <NavDropdown title="Sonstiges" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">
                                    Feedback
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Ideen
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Impressum
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
