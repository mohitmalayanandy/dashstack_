import React from 'react'
import ReactApexChart from 'react-apexcharts';

const SalesAnalytics = () => {
    const [state, setState] = React.useState({

        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
        }],
        options: {
            chart: {
                height: 350,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
            },
            title: {
                text: 'Radar Chart - Multi Series'
            },
            stroke: {
                width: 2
            },
            fill: {
                opacity: 0.1
            },
            markers: {
                size: 0
            },
            yaxis: {
                stepSize: 20
            },
            xaxis: {
                categories: ['2011', '2012', '2013', '2014', '2015', '2016']
            }
        },


    });
    return (
        <div className="m-2 p-2 bg-white rounded-xl shadow-md md:m-3 md:p-3 sm:m-2 sm:p-2">
            <ReactApexChart options={state.options} series={state.series} type="radar" height={350} />
        </div>
    )
}

export default SalesAnalytics
