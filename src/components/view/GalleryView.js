import React, {useState} from 'react';
import {Row, Col, Card, InputGroup, Nav, Form, Container, ListGroup, Button} from "react-bootstrap";
import CatBreed from "../entity/CatBreed";


export default function GalleryView(props) {
    const [selectedCat, setSelectedCat] = useState(null);
    const [selectedOwner, setSelectedOwner] = useState(null);

    function displayCat(cat){
        setSelectedCat(cat);
    }

    return(
        <Container>
            <Row className="d-flex justify-content-center p-3 pt-5">
                <Card className="max-width-50-rem p-0">
                    <Card.Header className="text-center">Autres propriétaires</Card.Header>
                    <Row className="pt-4 ps-3 pe-3">
                        <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Nom</output>
                        </Col>
                        <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inpName">
                                    <i className="fa fa-user"></i>
                                </InputGroup.Text>
                                <Form.Select
                                    aria-describedby="inpBreed"
                                    onChange={form => {
                                        setSelectedOwner(form.target.value);
                                        props.fetchOtherOwnerCats(form.target.value);
                                    }}
                                >
                                    <option value={null}>-</option>
                                    {props.otherOwner.map(owner => (
                                        <option key={owner.id} value={owner.id}>{owner.name + " " + owner.surname}</option>
                                    ))}
                                </Form.Select>
                            </InputGroup>
                        </Col>
                    </Row>
                </Card>
            </Row>
            <Row className="d-flex justify-content-center p-3 pt-5">
                {selectedOwner === null ? <p></p> :
                    <Card className="max-width-50-rem p-0">
                        <Card.Header className="text-center">Ses chats</Card.Header>
                        <Row className="pt-4 ps-3 pe-3">
                            <ListGroup>
                                {props.cats.map(cat => (
                                    <ListGroup.Item key={cat.id}>
                                        <Button className="w-100" variant="secondary" onClick={() => displayCat(cat)}>{cat.name}</Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Row>
                    </Card>
                }
                {selectedCat === null ? <p></p> :
                    <Row className="d-flex justify-content-center flex-row p-3 pt-5 cat-display">

                    <div>
                        <p>Race : <b>{new CatBreed(selectedCat.breed).displayName()}</b></p>
                        <p>Date de naissance : <b>{new Date(selectedCat.birthdate).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}</b></p>
                        <img src={selectedCat.picture} className="w-100" alt={new CatBreed(selectedCat.breed).displayName() + " " + selectedCat.name} />
                    </div>
                    </Row>
                }
            </Row>
        </Container>
    )

}