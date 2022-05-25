import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

class EduAttainmentGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "Female",
                    data: this.props.feMale,
                    color: '#5EB5E8',
                },
                {
                    name: "Male",
                    data: this.props.male,
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
                        columnWidth: '100%',
                        height:'2'
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize: '20',
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
                            fontSize: '13px',
                        },
                    }
                },
                xaxis: {
                    show: true,
                    categories: this.props.grade,
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '13px',
                        },
                        rotate: 330,
                    }
                },
            },
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.male !== prevProps.male || this.props.feMale !== prevProps.feMale) {
console.log("eduva", this.props)
            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.grade
                }
            }
            var c = [
                {
                    name: "Female",
                    data: this.props.feMale,
                    color: '#5EB5E8',
                },
                {
                    name: "Male",
                    data: this.props.male,
                    color: '#0B486C',
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
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} />
            </div>
        );
    }
}

export default EduAttainmentGraph