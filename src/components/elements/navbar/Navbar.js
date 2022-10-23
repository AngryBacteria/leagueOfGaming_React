import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";
import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router";

import githubIcon from "./GitHub-Mark-Light-64px.png"


const GenNavbar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        navigate(`/summoner/${searchTerm}`);
    };


    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="/">League of Gaming</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/data">Data</Nav.Link>
                        <Nav.Link href="/chart">Chart</Nav.Link>
                    </Nav>
                    <Nav className="re-auto">
                        <Nav.Link href="https://github.com/AngryBacteria">
                            <Image src={githubIcon} style={{width : 35}}></Image>
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default GenNavbar;