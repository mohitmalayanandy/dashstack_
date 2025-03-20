import React from 'react'
import ReactApexChart from 'react-apexcharts';

const Customers = () => {
    const [state, setState] = React.useState({

        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 249
                            }
                        }
                    }
                }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },


    });
    return (
        <div className="m-5 p-5 bg-white rounded-xl shadow-md md:m-3 md:p-3 sm:m-2 sm:p-2">
            <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
        </div>
    )
}

export default Customers
