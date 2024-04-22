import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, Container, Dropdown, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import ResultData from "../Data/ResultData";
import {Feedback} from "../Data/Feedback";

const Header: React.FC = () => {
    let navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [dropdownTitle, setDropdownTitle] = useState('Kategorie');
    const [showErrorSelItem, setShowErrorSelItem] = useState(false);
    const [showErrorInput, setShowErrorInput] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleStats: React.MouseEventHandler<HTMLElement> = (event) => {
        console.log('Navigation link clicked');
        fetch('http://api:5062/api/stats', {method: 'GET'})
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                ResultData.BibliothekCount = data.BibliotheksCount;
                ResultData.ClinicCount = data.ClinicsCount;
                ResultData.DisParkCount = data.DisParkCount;
                ResultData.DoctorsCount = data.DoctorsCount;
                ResultData.KindergartdensCount = data.KindergartdensCount;
                ResultData.MuseumsCount = data.MuseumsCount;
                ResultData.MusicSchoolsCount = data.MusikSchoolsCount;
                ResultData.ParksCount =  data.ParksCount;
                ResultData.PoliceStationsCount = data.PoliceCount;
                ResultData.PoolsCount = data.PoolCount;
                ResultData.SchoolsCount = data.SchoolsCount;
                ResultData.StopsCount = data.StopsCount;
                ResultData.UniversitiesCount = data.UnisCount;
                navigate('/stats');

                console.log(data)
            })
            .catch(error => {
                console.error('Fehler:', error);
                console.log("hello");
            });
    }

    const handleFeedback: React.MouseEventHandler<HTMLElement> = (event) => {
        console.log('Navigation link clicked');
        fetch('http://localhost:5062/api/feedbacks', {method: 'GET'})
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                if (response.status == 209){
                    return "keine Feedbacks";
                }
                return response.json();
            })
            .then(data => {
                if (data == "keine Feedbacks"){
                    navigate("/feedbacks")
                    return;
                } else {
                    ResultData.Feedbacks = data.map((obj: { Id: number; Name: string; Email: string; Comment: string; Rating: number; }) => new Feedback(obj.Id, obj.Name, obj.Email, obj.Comment, obj.Rating));
                    navigate("/feedbacks")
                }
            })
            .catch(error => {
                console.error('Fehler:', error);
            });
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const addressPattern = /^[a-zA-ZäöüßÄÖÜ-]+(?:\s[a-zA-ZäöüßÄÖÜ-]+)*\s\d{1,2}(?:-\d{1,2})?$/;
        if (!addressPattern.test(searchQuery.trim())) {
            GetErrorMessageWrongInput();
            return;
        }

        if (!selectedItem) {
            GetErrorMessageNoSelItem();
            return;
        }

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
                console.log(data)
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
        setShowErrorSelItem(false);
        setShowErrorInput(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <header className="App-header">
                <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{height:'6vh', verticalAlign: 'middle'}}>
                    <Container fluid>
                        <Navbar.Brand href="/">Lebensqualitat in Wien</Navbar.Brand>
                        <Form className="d-flex" style={{ width: '40%' }} onSubmit={handleSearch}>
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
                                style={{ maxHeight: '5vh' }}
                                navbarScroll
                            >
                                <NavDropdown title="Algorithmus" id="navbarScrollingDropdownAlg">
                                    <NavDropdown.Item href="/alg-explain">
                                        Algorithmus
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action7">
                                        Mach dein eigenes Algorithmus
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/" className='nav-link-class'>Starterseite</Nav.Link>
                                <Nav.Link className='nav-link-class' onClick={handleStats}>Über Wien</Nav.Link>

                                <NavDropdown title="Sonstiges" id="navbarScrollingDropdownSon">
                                    <NavDropdown.Item onClick={handleFeedback}>
                                        Feedbacks
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/impressum">
                                        Impressum
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
};

export default Header;
