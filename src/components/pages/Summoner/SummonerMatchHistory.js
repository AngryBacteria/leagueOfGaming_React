import React from 'react';

const MatchHistory = (props) => {

    const iconUrl = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/"

    return (
        <div>
            <h1>Match History</h1>
            {props.dataSummoner.gamesList.map( game => {

                if (game.win)
                    return(
                        <div className={"historyVictory"}>
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
                        </div>
                    )

                else
                    return(
                        <div className={"historyDefeat"}>
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
                        </div>
                    )
            })
            }
        </div>
    );
};

export default MatchHistory;
