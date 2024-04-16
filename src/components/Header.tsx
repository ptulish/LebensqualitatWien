import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Container, Dropdown, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {useSearchParams} from "react-router-dom";
import ResultData from "./ResultData";

interface AddressCheckResponse {
    isValid: boolean;
    message: string;
}


const Header: React.FC = () => {
    let navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [dropdownTitle, setDropdownTitle] = useState('Kategorie');
    const [showErrorSelItem, setShowErrorSelItem] = useState(false); // State to manage error visibility
    const [showErrorInput, setShowErrorInput] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const GetErrorMessageNoSelItem = () => {
        setShowErrorSelItem(true); // Activate the error state
    };


    const GetErrorMessageWrongInput = () => {
        setShowErrorInput(true);
        setErrorMessage('Ungültiges Format: Bitte geben Sie die Adresse im Format "[Straße] [Hausnummer]" ein.');
    };

    const GetErrorMessageFromServer405 = () => {
        setShowErrorInput(true);
        setErrorMessage('Die Adresse befindet sich nicht in Österreich!');
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('hello');

        // Validate address format
        const addressPattern = /^[a-zA-ZäöüßÄÖÜ-]+(?:\s[a-zA-ZäöüßÄÖÜ-]+)*\s\d+$/;
        if (!addressPattern.test(searchQuery.trim())) {
            GetErrorMessageWrongInput();
            return;
        }

        if (!selectedItem) {
            GetErrorMessageNoSelItem();
            return; // Early return to prevent further execution
        }

        // Reset error states when performing a successful search
        setShowErrorSelItem(false);
        setShowErrorInput(false);

        fetch('http://localhost:5062/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Address: searchQuery, UserGroup: selectedItem }),
        })
            .then(response => {
                if (!response.ok) {
                    GetErrorMessageFromServer405();
                    throw new Error(`Network error with status: ${response.status}, Message: ${response.statusText}`);
                }
                return response.text();// Verwende .text() hier
            })
            .then(data => {
                ResultData.UserGroupName = selectedItem;
                navigate('/search-result', { state: { data: data } });

            })
            .catch(error => {
                console.error('Fehler:', error);
            });

    };

    const handleSelect = (eventKey: string | null, event: React.SyntheticEvent<unknown>) => {
        setSelectedItem(eventKey || '');
        const selectedText = (event.target as HTMLElement).textContent;
        setDropdownTitle(selectedText || 'Wähle eine Option');
        setShowErrorSelItem(false); // Reset error state when a valid option is selected
        setShowErrorInput(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#">Lebensqualitat in Wien</Navbar.Brand>
                    <Form className="d-flex" style={{ width: '50%' }} onSubmit={handleSearch}>
                        <Form.Control
                            name="search"
                            type="search"
                            placeholder="Geben Sie eine Adresse ein...  [Strasse][Hausnummer]"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleInputChange}
                            style={{ backgroundColor: showErrorInput ? 'red' : undefined }}
                        />
                        <Form.Control.Feedback type="invalid" style={{ display: showErrorInput ? 'block' : 'none' }}>
                            {errorMessage}
                        </Form.Control.Feedback>
                        <Dropdown onSelect={handleSelect} style={{ }}>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ backgroundColor: showErrorSelItem ? 'red' : undefined, height: '500' }}>
                                {dropdownTitle}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="family">Familie</Dropdown.Item>
                                <Dropdown.Item eventKey="student">Student</Dropdown.Item>
                                <Dropdown.Item eventKey="alone">Aleinwohnen</Dropdown.Item>
                                <Dropdown.Item eventKey="young-couple">Young Couple</Dropdown.Item>
                                <Dropdown.Item eventKey="pensioneur">Rentner</Dropdown.Item>
                                <Dropdown.Item eventKey="invalid">Behinderte</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button type="submit" variant="outline-success" >Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Algorithmus" id="navbarScrollingDropdownAlg">
                                <NavDropdown.Item href="#action6">
                                    Algorithmus
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action7">
                                    Mach dein eigenes Algorithmus
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1" style={{textAlign: 'left'}}>Starterseite</Nav.Link>
                            <Nav.Link href="#action1" style={{textAlign: 'left'}}>Über Wien</Nav.Link>

                            <NavDropdown title="Sonstiges" id="navbarScrollingDropdownSon">
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
