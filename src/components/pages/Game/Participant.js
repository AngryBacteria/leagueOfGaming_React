import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Participant = (props) => {

    const iconUrl = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/"
    const emptySP = "https://raw.communitydragon.org/latest/game/assets/spells/icons2d/summoner_empty.png"

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <div className="col">
                            <img width={25} src={emptySP}/>
                        </div>
                        <div className="col">
                            <img width={25} src={emptySP}/>
                        </div>
                    </div>
                    <div className="col-auto"><img width={50} src={iconUrl + props.data.championId + ".png"}/></div>
                    <div className="col-2"><a href={`/summoner/${props.data.summonerName}`}>{props.data.summonerName}</a></div>
                    <div className="col-1">{props.data.teamPosition}</div>
                    <div className="col-1">{props.data.kills}/{props.data.deaths}/{props.data.assists}</div>
                </div>
            </div>

        </div>
    );
};

export default Participant;