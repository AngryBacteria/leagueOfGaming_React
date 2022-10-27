import React, {useState} from 'react';
import Chart from "react-apexcharts";
import useFetch from "../../scripts/useFetch";
import {useParams} from "react-router-dom";
import {apiBaseURL} from "../../scripts/Helper";

const MyCharts = (props) => {

    console.log(props.gameurl)
    const { data: timeLineData, isPending: isPendingTimeLine, error: errorTimeLine } = useFetch(`${apiBaseURL()}/api/game/riot/timeline/${props.gameurl}`, "TimeLine")

    var teamGoldDifferenceArray = [];
    console.log("Fetched")
    if (timeLineData){
        for (var i=0; i< timeLineData.teamGoldDifferenceArray.length; i++) {
            teamGoldDifferenceArray.push(timeLineData.teamGoldDifferenceArray[i]);
        }
    }

    const series = [{
        type: 'area',
        name: "Team1-Team2",
        data: teamGoldDifferenceArray

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
            categories: teamGoldDifferenceArray.length,
            title: {
                text : "Minute",
                hideOverlappingLabels: true
            }
        },
        yaxis: {
            title: {
                text : "Gold Difference"
            }
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