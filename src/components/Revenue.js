import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Revenue = () => {
    const [state, setState] = React.useState({
          
        series: [
          {
            data: [0, -41, 35, -51, 0, 62, -69, 32, -32, 54, 16, -50],
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'area',
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          title: {
            text: 'Negative color for values less than 0',
            align: 'left',
          },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
          },
          stroke: {
            width: 0,
          },
          plotOptions: {
            line: {
              colors: {
                threshold: 0,
                colorAboveThreshold: '#0088ee',
                colorBelowThreshold: '#ff0000',
              },
            },
          }
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

export default Revenue;