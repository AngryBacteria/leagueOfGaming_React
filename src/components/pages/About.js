import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AngryBacteriaPNG from "../readmePictures/AngryBacteria1600.png"
import Image from "react-bootstrap/Image";

const About = () => {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col sm={8}>
                    <Image src={AngryBacteriaPNG} style={{width: 200}}></Image>
                    <Image src={AngryBacteriaPNG} style={{width: 200}}></Image>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col sm={8}>
                    <Image src={AngryBacteriaPNG} style={{width: 200}}></Image>
                </Col>
            </Row>
        </Container>
    );
};

export default About;