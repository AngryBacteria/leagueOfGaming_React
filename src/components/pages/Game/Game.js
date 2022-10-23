import React from "react";
import {useParams} from "react-router-dom";
import useFetch from "../../scripts/useFetch";
import Participant from "./Participant";
import Container from 'react-bootstrap/Container';
import MyCharts2 from "../Graph/MyCharts2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {apiBaseURL} from "../../scripts/Helper";


const Game = () => {

    const {gameurl} = useParams()
    const { data: gameData, isPending: isPendingGame, error: errorGame } = useFetch(`${apiBaseURL()}/api/game/riot/gameid/${gameurl}`, "Summoner stats")

    let team1String = ""
    let team2String = ""

    if (!isPendingGame && gameData.info.teams[0].win ){
        team1String = "Victory"
        team2String = "Defeat"
    }

    else if (!isPendingGame && !gameData.info.teams[0].win) {
        team2String = "Victory"
        team1String = "Defeat"
    }

    return (

        <div>
            {gameData &&
                <div>
                    <Container>

                        <h1>
                            GAME {gameurl}
                        </h1>

                        <h1>Team 1 {team1String}</h1>
                        <Participant data={gameData.info.participants[0]}/>
                        <Participant data={gameData.info.participants[1]}/>
                        <Participant data={gameData.info.participants[2]}/>
                        <Participant data={gameData.info.participants[3]}/>
                        <Participant data={gameData.info.participants[4]}/>

                        <h1>Team 2 {team2String}</h1>
                        <Participant data={gameData.info.participants[5]}/>
                        <Participant data={gameData.info.participants[6]}/>
                        <Participant data={gameData.info.participants[7]}/>
                        <Participant data={gameData.info.participants[8]}/>
                        <Participant data={gameData.info.participants[9]}/>

                        <MyCharts2 gameurl={gameurl}/>
                    </Container>
                </div>
            }
        </div>
    );
};

export default Game;