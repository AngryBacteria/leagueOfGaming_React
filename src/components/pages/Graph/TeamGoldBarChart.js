import React, {useState} from 'react';
import Chart from "react-apexcharts";
import useFetch from "../../scripts/useFetch";
import {useParams} from "react-router-dom";
import {apiBaseURL} from "../../scripts/Helper";

const MyCharts = (props) => {

    const { data: timeLineData, isPending: isPendingTimeLine, error: errorTimeLine } = useFetch(`${apiBaseURL()}/api/game/riot/timeline/${props.gameurl}`, "TimeLine")

    const teamGoldDifferenceArray = [];
    if (timeLineData){
        for (let i=0; i < timeLineData.teamGoldDifferenceArray.length; i++) {
            teamGoldDifferenceArray.push(timeLineData.teamGoldDifferenceArray[i]);
        }
    }

    let state = {

        series: [{
            name: "Team1-Team2",
            data: teamGoldDifferenceArray
        }],
        options: {

            chart: {
                type: 'bar',
                height: 350,
                foreColor: '#ffffff',
                toolbar: {
                    show : false
                }
            },
            plotOptions: {
                bar: {
                    colors: {
                        ranges: [{
                            from: -999999,
                            to: 0,
                            color: '#F15B46'
                        }, {
                            from: 0,
                            to: 999999,
                            color: '#19c1fe'
                        }]
                    },
                    columnWidth: '80%',
                }
            },
            dataLabels: {
                enabled: false,
            },

            yaxis: {
                title: {
                    text: 'Gold Difference',
                },
            },

            xaxis: {
                title: {
                    text: 'Minute',
                },
                categories: teamGoldDifferenceArray.map((gold, index) => index)
            },
        },


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
                <Chart options={state.options} series={state.series} type="bar" />
            }
        </div>
    )
}

export default MyCharts;