import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class HouseholdTypesGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "Owner",
                    data: this.props.owner,
                    color: '#0F74AF',
                },
                {
                    name: "Renter",
                    data: this.props.renter,
                    color: '#5EB5E8',
                }
            ],
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },
                    height: 350,
                    type: 'area',
                    stacked: true,
                    stackType: '100%',
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
                    position: 'bottom',
                    horizontalAlign: 'left',
                    fontSize: '16',
                    offsetY: 10,
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                grid: {
                    show: false,
                },
                yaxis: {
                    show: true,
                    labels: {
                        formatter: function (value) {
                            return value.toFixed(1) + "%";
                        },
                        rotate: 330,
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
                xaxis: {
                    show: true,
                    categories: this.props.type,
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                        // rotate: 330,
                    }
                },
            },
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.owner !== prevProps.owner || this.props.renter !== prevProps.renter) {

            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.type
                }
            }
            var c = [{
                name: "Owner",
                data: this.props.owner,
                color: '#0F74AF'
            }, {
                name: "Renter",
                data: this.props.renter,
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


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default HouseholdTypesGraph