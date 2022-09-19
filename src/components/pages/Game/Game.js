import React from "react";
import {useParams} from "react-router-dom";
import useFetch from "../../scripts/useFetch";
import Participant from "./Participant";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Game = () => {

    const {gameurl} = useParams()
    const { data: gameData, isPending: isPendingGame, error: errorGame } = useFetch(`http://localhost:8080/api/game/riot/gameid/${gameurl}`, "Summoner stats")

    return (

        <div>
            {gameData &&
                <div>
                    <Container>

                        <h1>
                            GAME {gameurl}
                            <br/>
                            {gameData.info.gameId}
                            <br/>
                        </h1>

                        <h1>Team 1</h1>
                        <Participant data={gameData.info.participants[0]}/>
                        <Participant data={gameData.info.participants[1]}/>
                        <Participant data={gameData.info.participants[2]}/>
                        <Participant data={gameData.info.participants[3]}/>
                        <Participant data={gameData.info.participants[4]}/>

                        <h1>Team 2</h1>
                        <Participant data={gameData.info.participants[5]}/>
                        <Participant data={gameData.info.participants[6]}/>
                        <Participant data={gameData.info.participants[7]}/>
                        <Participant data={gameData.info.participants[8]}/>
                        <Participant data={gameData.info.participants[9]}/>

                    </Container>
                </div>
            }
        </div>
    );
};

export default Game;