import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class IncomeHHTMMGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "Mean",
                    data: this.props.mean,
                    color: '#5EB5E8',
                },
                {
                    name: "Median",
                    data: this.props.median,
                    color: '#0B486C',
                }
            ],
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: false,
                    },
                },
                fill: {
                    opacity: 1
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        columnWidth: '100%'
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize: '16',
                    offsetY: 10,
                },
                dataLabels: {
                    enabled: false
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
                yaxis: {
                    show: true,
                    labels: {
                        rotate: 330,
                        style: {
                            colors: ['#555555'],
                            fontSize: '14px',
                        },
                    }
                },
                xaxis: {
                    show: true,
                    categories: this.props.name,
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                        rotate: 330,
                    }
                },
            },
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.mean !== prevProps.mean || this.props.median !== prevProps.median) {
            { console.log('dcd', this.props) }

            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.name
                }
            }
            var c = [{
                name: "Mean",
                data: this.props.mean,
                color: '#0F74AF'
            },
            {
                name: "Median",
                data: this.props.median,
                color: '#0B486C'
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

export default IncomeHHTMMGraph