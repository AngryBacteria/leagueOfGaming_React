import React from "react";
import Chart from "react-apexcharts";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const About = () => {

    const state = {

        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        options: {
            chart: {
                type: 'polarArea',
            },
            stroke: {
                colors: ['#fff']
            },
            fill: {
                opacity: 0.8
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };

    return (
        <div>
            <h1>
                This is a test website for me to learn various aspects of
                being a web dev
            </h1>
            <div>
            <Chart options={state.options} series={state.series} type="polarArea" />
            </div>
        </div>

    );
};

export default About;