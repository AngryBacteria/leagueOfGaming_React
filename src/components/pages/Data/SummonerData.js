import React from 'react';
import useFetch from "../../scripts/useFetch";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";

const SummonerData = () => {

    const { error, isPending, data: summoners } = useFetch(`http://localhost:8080/api/summoner/`, "Summoner")

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose data
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/data/summoners">Summoners</Dropdown.Item>
                    <Dropdown.Item href="/data/games">Games</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {
                isPending &&
                <button className="btn btn-Secondary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading Summoners...
                </button>
            }
            {
                error &&
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            }

            <h1>
                Summoner Data
            </h1>
            <Table bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Level</th>
                    <th>Puuid</th>
                </tr>
                </thead>
                <tbody>
                {summoners && summoners.map( summoner => {
                    return(

                        <tr key={summoner.name}>
                            <td>{summoner.id}</td>
                            <td>{summoner.name}</td>
                            <td>
                                <img src={summoner.pictureURL} width={50}/>
                            </td>
                            <td>{summoner.summonerLvL}</td>
                            <td>{summoner.puuid}</td>
                        </tr>
                    )
                })
                }
                </tbody>
            </Table>
        </div>
    );
};

export default SummonerData;
