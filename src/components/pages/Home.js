import React from "react";
import useFetch from "../scripts/useFetch";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeaderboardComponent from "../elements/Leaderboard";


const Home = () => {

    const { error, isPending, data: leaderboard } = useFetch(`http://localhost:8080/api/leaderboard/`, "Leaderboard")


    return (
        <div>
        {leaderboard &&
            <div>
                <h1>LEAGUE OF Gaming</h1>
                {/*<p>{JSON.stringify(leaderboard, null, 4)}</p>*/}
                <br/>
                <Container fluid>
                    <Row>
                        <Col><LeaderboardComponent leaderBoardData={leaderboard} listIndex={0}/></Col>
                        <Col><LeaderboardComponent leaderBoardData={leaderboard} listIndex={1}/></Col>
                        <Col><LeaderboardComponent leaderBoardData={leaderboard} listIndex={2}/></Col>
                        <Col><LeaderboardComponent leaderBoardData={leaderboard} listIndex={3}/></Col>
                        <Col><LeaderboardComponent leaderBoardData={leaderboard} listIndex={4}/></Col>
                        <Col><LeaderboardComponent leaderBoardData={leaderboard} listIndex={5}/></Col>
                        <Col><LeaderboardComponent leaderBoardData={leaderboard} listIndex={6}/></Col>
                        <Col><LeaderboardComponent leaderBoardData={leaderboard} listIndex={7}/></Col>
                    </Row>
                </Container>
            </div>
        }
        </div>
    );
};

export default Home;