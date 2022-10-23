import React from 'react';
import useFetch from "../../scripts/useFetch";
import {apiBaseURL} from "../../scripts/Helper";

const MatchHistory = (props) => {

    const iconUrl = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/"
    const { data: dataSummoner, isPending: isPendingSummoner, error : errorSummoner } = useFetch(`${apiBaseURL()}/api/summoner/name/${props.name}`, "Summoner")

    return (
        <div>
            {dataSummoner &&
            <div>
            <h1>Match History</h1>
            {dataSummoner.gamesList.map( game => {

                if (game.win)
                    return(
                        <div className={"historyVictory"}>
                            <a style={{textDecoration : "none"}} href={`/game/${game.gameURL}`}>
                            <p><img width={75} src={iconUrl + game.championID + ".png"}/>
                                &emsp;Victory (KDA {game.kills}/{game.deaths}/{game.assists})&emsp;|
                                &emsp;{new Date(game.gameEnd).toLocaleDateString()}&emsp;|
                                &emsp;{Math.round(game.gameDuration/60)} Minutes&emsp;|
                                &emsp;{game.queueType}&emsp;|
                                &emsp;{Math.round(game.teamDamagePercentage * 100)}% of team damage&emsp;|
                                &emsp;{game.neutralMinionsKilled + game.totalMinionsKilled} Farm&emsp;|
                                &emsp;{game.turretKills} Turret Kills&emsp;|
                                &emsp;{game.visionScore} Vision Score&emsp;|
                                &emsp;{game.gameURL}&emsp;|
                            </p>
                            </a>
                        </div>
                    )

                else
                    return(
                        <div className={"historyDefeat"}>
                            <a style={{textDecoration : "none"}} href={`/game/${game.gameURL}`}>
                            <p><img width={75} src={iconUrl + game.championID + ".png"}/>
                                &emsp;Defeat (KDA {game.kills}/{game.deaths}/{game.assists})&emsp;|
                                &emsp;{new Date(game.gameEnd).toLocaleDateString()}&emsp;|
                                &emsp;{Math.round(game.gameDuration/60)} Minutes&emsp;|
                                &emsp;{game.queueType}&emsp;|
                                &emsp;{Math.round(game.teamDamagePercentage * 100)}% of team damage&emsp;|
                                &emsp;{game.neutralMinionsKilled + game.totalMinionsKilled} Farm&emsp;|
                                &emsp;{game.turretKills} Turret Kills&emsp;|
                                &emsp;{game.visionScore} Vision Score&emsp;|
                                &emsp;{game.gameURL}&emsp;|
                            </p>
                            </a>
                        </div>
                    )
            })
            }
            </div>
            }
        </div>
    );
};

export default MatchHistory;
