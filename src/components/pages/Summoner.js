import React from "react";
import {useParams} from "react-router-dom";
import useFetch from "../scripts/useFetch";
import Card from "react-bootstrap/Card";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MatchHistory from "../elements/SummonerMatchHistory";




const Summoner = () => {

    const {name} = useParams()
    const { data: summonerStats, isPending: isPendingStats, error: errorStats } = useFetch(`http://localhost:8080/api/summoner/stats/name/${name}`, "Summoner stats")

    const { data: dataSummoner, isPending: isPendingSummoner, error : errorSummoner } = useFetch(`http://localhost:8080/api/summoner/name/${name}`, "Summoner")



    return (
        <div>
            <div>
            {errorStats &&
                <div className="alert alert-danger" role="alert">
                    {errorStats}
                </div>
            }
            {isPendingStats &&
                <button className="btn btn-Secondary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            }
            {summonerStats &&

                <div>
                    {/*<p>{JSON.stringify(summonerStats, null, 4)}</p>*/}

                    <Container fluid={true}>
                        <Row>
                            <Col sm={2}>
                                <Card style={{ width: '12rem', margin : '1rem'}}>
                                    <Card.Img variant="top" src={summonerStats.pictureURL}/>
                                    <Card.Body>
                                        <Card.Title>{summonerStats.name}</Card.Title>
                                        <Card.Text>
                                            Level : {summonerStats.summonerLvL} <br/>
                                            {summonerStats.wins}W {summonerStats.losses}L  {summonerStats.winrate}%<br/>
                                            <ProgressBar style={{height : 8}}>
                                                <ProgressBar variant="success" now={summonerStats.winrate} key={1} />
                                                <ProgressBar variant="danger" now={100-summonerStats.winrate} key={2} />
                                            </ProgressBar> <br/>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={5}>
                                <Card style={{margin : '1rem'}}>
                                    <Card.Body>
                                        <Card.Title>Record stats</Card.Title>
                                        <Card.Text>
                                            Longest time dead in one Game : {Math.round(summonerStats.longestTimeDead / 60)} minutes<br/>
                                            Longest Game : {Math.round(summonerStats.longestGame / 60)} minutes<br/>
                                            Shortest Game : {Math.round(summonerStats.shortestGame / 60)} minutes<br/><br/>

                                            Largest Crit : {summonerStats.largestCrit}<br/><br/>

                                            Most Kills in One Game : {summonerStats.mostKillsInOneGame}<br/>
                                            Most Assists in One Game : {summonerStats.mostAssistsInOneGame}<br/>
                                            Most Deaths in one Game : {summonerStats.mostDeathsInOneGame}<br/>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={5}>
                                <Card style={{margin : '1rem'}}>
                                <Card.Body>
                                    <Card.Title>Total Stats</Card.Title>
                                    <Card.Text>
                                        Buffs stolen : {summonerStats.totalBuffsStolen}<br/>
                                        Rift herald dances : {summonerStats.totalDancedWithRiftHerald}<br/>
                                        Time dead : {Math.round(summonerStats.totalTimeDead/60)} minutes<br/>
                                        Shield and heal : {summonerStats.totalHealAndShield}<br/>
                                        Skill shots hit : {summonerStats.totalSkillshotsHit}<br/>
                                        Skill shots dodged : {summonerStats.totalSkillshotsDodged}<br/><br/>

                                        Kills : {summonerStats.totalKills}<br/>
                                        Assists : {summonerStats.totalAssists}<br/>
                                        Deaths : {summonerStats.totalDeaths}<br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                }
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                {errorSummoner &&
                    <div className="alert alert-danger" role="alert">
                        {errorSummoner}
                    </div>
                }
                {dataSummoner &&
                    <MatchHistory dataSummoner={dataSummoner}/>
                }
            </div>
        </div>
    );
};

export default Summoner;
