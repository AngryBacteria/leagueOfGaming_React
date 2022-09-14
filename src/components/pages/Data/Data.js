import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";

const Data = () => {

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
        </div>
    );
};

export default Data;