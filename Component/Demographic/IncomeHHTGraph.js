
import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class IncomeHHTGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Households',
                color: '#1F78B4',
                data: this.props.houseHolds
            },
            {
                name: 'Families',
                color: '#3594CB',
                data: this.props.Married
            },
            {
                name: 'MarriedFamilies',
                color: '#5EB5E8',
                data: this.props.marriedFamilies
            },
            {
                name: 'NonFamilies',
                color: '#0B486C',
                data: this.props.nonFamlies
            }],
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },
                    type: 'bar',
                    height: 550,
                    toolbar: {
                        show: false,
                    },
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize: '16',
                    offsetY: 10,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '80%'
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },
                tooltip: {
                    shared: true,
                    intersect: false
                },

                grid: {
                    show: false,
                },
                xaxis: {
                    labels: {
                        rotate: 330,
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    },
                    categories: this.props.income,
                },
                yaxis: {
                    show: 'true',
                    labels: {
                        rotate: 330,
                        style: {
                            colors: ['#555'],
                            fontSize: '10px',
                        },
                    },
                    categories: this.props.income,
                },
            },

        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.houseHolds !== prevProps.houseHolds || this.props.Married !== prevProps.Married || this.props.marriedFamilies !== prevProps.marriedFamilies || this.props.nonFamlies !== prevProps.nonFamlies) {
            console.log("graphh", this.props)
            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.income
                },
                yaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.income
                }
            }
            var c = [{
                name: "House Holds",
                data: this.props.houseHolds,
                color: '#0F74AF'
            }, {
                name: "Married",
                data: this.props.Married,
                color: '#5EB5E8'
            }, {
                name: "Non Famlies",
                data: this.props.nonFamlies,
                color: '#5EB5E8'
            }, {
                name: "Married Famlies",
                data: this.props.marriedFamilies,
                color: '#5EB5E8'
            }

            ]
            this.setState({
                series: c,
                options: b
            })

        }
    }

    render() {
        return (


            <div id="chart" className='p-5'>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={550} />
            </div>
        );
    }
}

export default IncomeHHTGraph