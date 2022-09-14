import React from "react";
import {useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card';

const LorCard = () => {
    const {cardCode} = useParams()

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://dd.b.pvp.net/3_11_0/set5/en_us/img/cards/${cardCode}.png`} />
                <Card.Body>
                    <Card.Title>{cardCode}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LorCard;