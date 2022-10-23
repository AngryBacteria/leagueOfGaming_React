import React from "react";
import useFetch from "../scripts/useFetch";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeaderboardComponent from "../elements/Leaderboard";
import {apiBaseURL} from "../scripts/Helper";


const Home = () => {

    const { error, isPending, data: leaderboard } = useFetch(`${apiBaseURL()}/api/leaderboard/`, "Leaderboard")


    return (
        <div>
            {error &&
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            }
            {isPending &&
                <button className="btn btn-Secondary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            }
            {leaderboard &&
            <div>
                <h1>LEAGUE OF Gaming</h1>
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