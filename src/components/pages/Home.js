import React from "react";
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

const now = 60;

const Home = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://dd.b.pvp.net/3_11_0/set5/en_us/img/cards/05BC041T1.png"/>
                <Card.Body>
                    <Card.Title>This is Poppy</Card.Title>
                    <Card.Text>She is a stupid hoe</Card.Text>
                </Card.Body>
            </Card>

            <ProgressBar now={now} label={`${now}%`} />
        </div>
    );
};

export default Home;