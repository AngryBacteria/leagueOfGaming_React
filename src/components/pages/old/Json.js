import React from "react";
import Cards from '../../../set5.json'
import Card from "react-bootstrap/Card";

const Json = () => {
    return (
        <div>
            <h1>
                Here content will be displayed from a json file
            </h1>
            <section style={{display : "flex", flexDirection : "row", justifyContent : "center", flexWrap : "wrap"}}>
            {
                Cards.map( card => {
                    return(
                    <div className="Box" key={card.cardCode} style={{margin : "auto", padding : 5}}>
                        <Card style={{ width: '12rem' }}>
                            <Card.Img variant="top" src={card.assets[0].gameAbsolutePath}/>
                            <Card.Body>
                                <Card.Title>{card.name}</Card.Title>
                                <Card.Text>{card.descriptionRaw}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    )
                })
            }
            </section>
        </div>
    );
};

export default Json;