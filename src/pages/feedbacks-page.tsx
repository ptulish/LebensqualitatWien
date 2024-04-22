import FeedbacksImage from "../Assets/feedbacksImage.jpg"
import "../styles/feedbacks-page.css"
import React, {ReactNode, useState} from "react";
import ResultData from "../Data/ResultData";
import {Button, CloseButton, Col, Form, Row} from "react-bootstrap";

function FeedbacksPage(){
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuContent, setMenuContent] = useState<ReactNode>('');

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('0');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("Submitted: ", { email, name, comment, rating });
        setEmail('');
        setName('');
        setComment('');
        setRating('0');
    };

    const handleButtonClick = (group: any) => {

        var content = <div className="add-window">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required
                                      onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" required
                                      onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 form-comment" controlId="formGridAddress2">
                    <Form.Label>Kommentar:</Form.Label>
                    <Form.Control style={{height: '15vh'}} placeholder="Gut | Schlecht" required
                                  onChange={(e) => setComment(e.target.value)}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Rating</Form.Label>
                        <Form.Select defaultValue="Rating" required
                                     onChange={(e) => setRating(e.target.value)}>
                            <option value="0">Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

        setMenuContent(content);
        setMenuVisible(true); // Показываем меню
    };

    const handleCloseMenu = () => {
        setMenuVisible(false); // Скрываем меню
    };


    return (<div className="feedbacks-page" style={{backgroundImage: `url(${FeedbacksImage})`}}>
        <div className="feedbacks-image-container">
            <div className="feedbacks-image-content">
                <div className="feedbacks-header">
                    <h1 style={{textAlign: 'left'}}>Feedbacks</h1>
                    <Button onClick={() => handleButtonClick('add')}>Hinzufgen</Button>
                </div>
                <div className="feedbacks-container">
                    {ResultData.Feedbacks.map((feedback) => (
                        <div key={feedback.Id}
                             style={{marginBottom: '20px', border: '1px solid #ccc', padding: '10px'}}>
                            <div className="feedback-name">
                                <h4>{feedback.name.trim()}</h4>
                                <p>Rating: {feedback.Rating}</p>
                            </div>
                            <p>Email: {feedback.email}</p>
                            <p>Message: {feedback.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {menuVisible && (
            <div className="menu-overlay">
                <div className="menu-content">
                    <CloseButton onClick={() => handleCloseMenu()} className="count-button"></CloseButton>
                    <div>{menuContent}</div>
                </div>
            </div>
        )}
    </div>)
}

export default FeedbacksPage;