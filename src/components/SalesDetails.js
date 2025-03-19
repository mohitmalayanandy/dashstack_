import React from "react";
import ReactApexChart from 'react-apexcharts';

const SalesDetails = () => {

    const [state, setState] = React.useState({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    });

    return (
        <div className="m-5 p-5 bg-white rounded-xl shadow-md md:m-3 md:p-3 sm:m-2 sm:p-2">
            <h2 className="text-lg font-semibold mb-4">Sales Details</h2>
            <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                    <ReactApexChart options={state.options} series={state.series} type="area" height={300} />
                </div>
            </div>
        </div>
    );
};

export default SalesDetails;