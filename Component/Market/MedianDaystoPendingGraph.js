import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class MedianDaystoPendingGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "Rental Growth",
                    data: this.props.pending,
                    color: '#0F74AF'
                }
            ],
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false,
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    fontSize: '16'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                yaxis: {
                    show: true,
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: this.props.pendingDate,
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
            },
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.pending !== prevProps.pending || this.props.pendingDate !== prevProps.pendingDate) {

            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.pendingDate
                }
            }
            var c = [{
                name: "Series 1",
                data: this.props.pending,
                color: '#0F74AF'
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
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        );
    }
}

export default MedianDaystoPendingGraph