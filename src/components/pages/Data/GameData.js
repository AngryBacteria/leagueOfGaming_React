import React from 'react';
import useFetch from "../../scripts/useFetch";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";

const GameData = () => {

    const { error, isPending, data: games } = useFetch(`http://localhost:8080/api/game/db/`, "Game")

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

            {isPending &&
                <button className="btn btn-Secondary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading Games...
                </button>
            }
            {error &&
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            }
            <h1>
                Game Data
            </h1>
            <Table bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Game URL</th>
                    <th>Queue Type</th>
                    <th>Team Damage Percentage</th>
                </tr>
                </thead>
                <tbody>
                {games && games.map( game => {
                    return(

                        <tr key={game.id}>
                            <td>{game.id}</td>
                            <td>{game.gameURL}</td>
                            <td>{game.queueType}</td>
                            <td>{game.teamDamagePercentage}</td>
                        </tr>

                    )
                })
                }
                </tbody>
            </Table>
        </div>
    );
};

export default GameData;
