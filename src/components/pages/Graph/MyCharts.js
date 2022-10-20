import React, {useState} from 'react';
import Chart from "react-apexcharts";
import useFetch from "../../scripts/useFetch";
import {useParams} from "react-router-dom";

const MyCharts = () => {

    const { data: timeLineData, isPending: isPendingTimeLine, error: errorTimeLine } = useFetch(`http://localhost:8080/api/game/riot/timeline/EUW1_5998862549`, "TimeLine")

    var goldArrayTeam1 = [];
    var goldArrayTeam2 = [];
    console.log("Fetched")
    if (timeLineData){
        for (var i=0; i< timeLineData.team1GoldTimeLine.length; i++) {
            goldArrayTeam1.push(timeLineData.team1GoldTimeLine[i].gold);
            goldArrayTeam2.push(timeLineData.team2GoldTimeLine[i].gold);
        }
    }

    const series = [{
        type: 'line',
        name: "Team1",
        data: goldArrayTeam1

    }, {
        type: 'line',
        name: "Team2",
        data: goldArrayTeam2
    }];
    const options = { //data on the x-axis
        chart: {
            id: 'line-chart',
            animations: {
                enabled: false,
            },
            foreColor: '#ffffff',
            toolbar: {
                show : false
            }
        },

        tooltip:{
            enabled : true,
            theme: "light",
            fixed: {
                enabled: true,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0,
            },
        },

        xaxis: {
            categories: goldArrayTeam1.length
        }
    };

    return (
        <div>
            {errorTimeLine &&
                <div className="alert alert-danger" role="alert">
                    {errorTimeLine}
                </div>
            }
            {isPendingTimeLine &&
                <button className="btn btn-Secondary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            }
            {timeLineData &&
                <Chart
                    options={options}
                    series={series}
                    type="line"
                    width="650"
                />
            }
        </div>
    )
}

export default MyCharts;