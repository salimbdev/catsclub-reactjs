import React, {useState, useEffect} from 'react';
import {Row, Col, Card, InputGroup, Nav, Form, Container, ListGroup, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import CatBreed from "../entity/CatBreed";



export default function SpaceView(props) {
    const [fields, setFields] = useState({ name: "", breed: "", birthdate:"", picture:"" });

    const [selectedCat, setSelectedCat] = useState(null);



    function displayCat(cat){
        setSelectedCat(cat);
    }


    return(
        <Container>
            <Row className="d-flex justify-content-center p-3 pt-5">
                <Card className="max-width-50-rem p-0">
                    <Card.Header className="text-center">Ajouter un chat</Card.Header>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Nom</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpName">
                                    <i className="fa fa-cat"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpName"
                                    placeholder="Veuillez entrer le nom de votre chat"
                                    value={fields.name}
                                    onChange={form => setFields({...fields, name: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Date de naissance</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpDate">
                                    <i className="fa fa-calendar"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="date"
                                    aria-describedby="inpDate"
                                    value={fields.birthdate}
                                    onChange={form => setFields({...fields, birthdate: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Race</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpBreed">
                                    <i className="fa fa-list"></i>
                                </InputGroup.Text>
                                <Form.Select
                                    aria-describedby="inpBreed"
                                    onChange={form => setFields({...fields, breed: form.target.value})}
                                >
                                    <option value="-">-</option>
                                    {Object.values(CatBreed).map(breed => (
                                        <option key={breed.value} value={breed.value}>{breed.displayName()}</option>
                                    ))}
                                </Form.Select>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Photo</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpPicture">
                                    <i className="fa fa-image"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    aria-describedby="inpPicture"
                                    placeholder="Veuillez entrer un lien de photo"
                                    value={fields.picture}
                                    onChange={form => setFields({...fields, picture: form.target.value})}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="pb-3 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} className="p-1 text-center">
                            <Nav.Link
                                className="btn bg-black w-100 text-white p-2"
                                onClick={() => props.addCat(fields.name, fields.breed, fields.birthdate, fields.picture)}
                            >
                                Ajouter un chat
                            </Nav.Link>
                        </Col>
                    </Row>
                </Card>
            </Row>
            <Row className="d-flex justify-content-center p-3 pt-5">
                <Card className="max-width-50-rem p-0">
                    <Card.Header className="text-center">Mes chats</Card.Header>
                    <Row className="pt-4 ps-3 pe-3">
                        <ListGroup>
                            {props.cats.map(cat => (
                                <ListGroup.Item key={cat.id}>
                                    <Button className="w-100" variant="secondary" onClick={() => displayCat(cat)}>{cat.name}</Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Row>
                    <Row className="d-flex justify-content-center flex-row p-3 pt-5 cat-display bg-light">
                        {selectedCat === null ? <p></p> :
                        <div>
                            <p>Race : <b>{new CatBreed(selectedCat.breed).displayName()}</b></p>
                            <p>Date de naissance : <b>{new Date(selectedCat.birthdate).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}</b></p>
                            <img src={selectedCat.picture} className="w-100" alt={new CatBreed(selectedCat.breed).displayName() + " " + selectedCat.name} />
                            <Button className="w-100 mt-3" variant="danger" onClick={() => {
                                props.deleteCat(selectedCat.id);
                                setSelectedCat(null);
                            }}>Supprimer</Button>
                        </div>}
                    </Row>
                </Card>
            </Row>
        </Container>

    )

}