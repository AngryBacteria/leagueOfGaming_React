import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useFetch from "../../scripts/useFetch";
import Participant from "./Participant";
import Container from 'react-bootstrap/Container';
import MyCharts2 from "../Graph/TeamGoldBarChart";
import {apiBaseURL} from "../../scripts/Helper";


const Game = () => {

    const {gameurl} = useParams()
    const { data: gameData, isPending: isPendingGame, error: errorGame } = useFetch(`${apiBaseURL()}/api/game/riot/gameid/${gameurl}`, "Summoner stats")

    const [team1String, setTam1String] = useState("");
    const [team2String, setTam2String] = useState("");

    useEffect(() => {
        if (gameData){
            if (gameData.info.teams[0].win){
                setTam1String("VICTORY")
                setTam2String("DEFEAT")
            }
            else {
                setTam2String("VICTORY")
                setTam1String("DEFEAT")
            }
        }
    }, [gameData]); // dependency. Only calls the hook on first render and change of this variable

    return (
        <div>
            {errorGame &&
                <div className="alert alert-danger" role="alert">
                    {errorGame}
                </div>
            }
            {gameData &&
                <div>
                    <Container>
                        <h1>GAME {gameurl}</h1>
                        <h1 style={{color : "#19c1fe"}}>Team 1 {team1String}</h1>
                        <Participant data={gameData.info.participants[0]}/>
                        <Participant data={gameData.info.participants[1]}/>
                        <Participant data={gameData.info.participants[2]}/>
                        <Participant data={gameData.info.participants[3]}/>
                        <Participant data={gameData.info.participants[4]}/>

                        <h1 style={{color : "#F15B46"}}>Team 2 {team2String}</h1>
                        <Participant data={gameData.info.participants[5]}/>
                        <Participant data={gameData.info.participants[6]}/>
                        <Participant data={gameData.info.participants[7]}/>
                        <Participant data={gameData.info.participants[8]}/>
                        <Participant data={gameData.info.participants[9]}/>
                        <br/>
                        <br/>
                        <h1>Gold Difference Graph</h1>
                        <MyCharts2 gameurl={gameurl}/>
                    </Container>
                </div>
            }
        </div>
    );
};

export default Game;