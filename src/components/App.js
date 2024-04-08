import React, { useState, useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { myContext } from '../index';
import Welcome from './Welcome';
import ConnectionController from './controller/ConnectionController';
import SpaceController from './controller/SpaceController';
import GalleryController from "./controller/GalleryController";
import GlossaryController from "./controller/GlossaryController";

export default function App() {

    const [owner, setOwner] = useState(null);
    const [cats, setCats] = useState([]);
    const [allOwnersButSelf, setAllOwnersButSelf] = useState([]);


    function ownerName() {
        return owner !== null ? `${owner.name} ${owner.surname}` : "";
    }

    return (
       <myContext.Provider value={[owner, setOwner]}>
            <header className='d-flex justify-content-center align-items-center'>
                <h1>Cats<i className='ms-3 me-3 fa fa-paw text-goldenrod'></i>Club</h1>
            </header>

            <BrowserRouter>
            <Navbar
                className='mb-5'
                collapseOnSelect="true"
                bg='black'
                variant='dark'
                sticky='top'
                expand='md'
            >
                <Container>
                    <Navbar.Brand className='fst-italic'>{ownerName()}</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link as={Link} eventKey='1' to="/welcome">
                                <i className='fa fa-home me-2'></i>
                                Accueil
                            </Nav.Link>
                            <Nav.Link as={Link} eventKey='2' to="/space" hidden={owner === null}>
                                <i className='fa fa-user me-2'></i>
                                Mon espace
                            </Nav.Link>
                            <Nav.Link as={Link} eventKey='3' to="/gallery" hidden={owner === null}>
                                <i className='fa fa-users me-2'></i>
                                Galerie
                            </Nav.Link>
                            <Nav.Link as={Link} eventKey='4' to="/glossary" >
                                <i className='fa fa-book me-2'></i>
                                Glossaire
                            </Nav.Link>
                            <Nav.Link as={Link} eventKey='5' to="/connection" hidden={owner !== null}>
                                <i className='fa fa-key me-2'></i>
                                Connexion
                            </Nav.Link>
                            <Nav.Link as={Link} eventKey='6' to="/welcome" hidden={owner === null} onClick={() => {
                                setOwner(null);
                            }}>
                                <i className='fa fa-unlock me-2'></i>
                                Déconnexion
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <article>
                <Container>
                    <Routes>
                        <Route exact path="/" element={<Welcome />} />
                        <Route exact path="/welcome" element={<Welcome />} />
                        <Route exact path="/connection" element={<ConnectionController />} />
                        <Route exact path="/space" element={<SpaceController cats={cats} setCats={(data) => setCats(data)} />} />
                        <Route exact path="/glossary" element={<GlossaryController />} />
                        <Route exact path="/gallery" element={<GalleryController
                            cats={cats}
                            setCats={(data) => setCats(data)}
                            allOwnersButSelf={allOwnersButSelf}
                            setAllOwnersButSelf={(data) => setAllOwnersButSelf(data)}
                        />} />
                    </Routes>
                </Container>
            </article>
            </BrowserRouter>

            <footer className='d-flex justify-content-center align-items-center'>
                <h6>Cats Club - 2024</h6>
            </footer>
       </myContext.Provider>
    );
}

