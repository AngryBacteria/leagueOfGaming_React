import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";

const LeaderboardComponent = (props) => {

    return (
        <div>
            <h2>{props.leaderBoardData[props.listIndex].leaderBoardName}</h2>
            {props.leaderBoardData[props.listIndex].nameAndValue.map( game => {
                return(
                    <div>
                        <a href={`/summoner/${game.name}`}>{game.name}</a>
                        <ProgressBar style={{height : 15, width : 300}}>
                            <ProgressBar variant="success" now={(game.value / game.maxValue)*100} label={game.value} key={1} />
                        </ProgressBar> <br/>
                    </div>
                )
            })
            }
        </div>
    );
};

export default LeaderboardComponent;
