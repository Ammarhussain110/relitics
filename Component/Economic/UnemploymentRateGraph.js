import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class UnemploymentRateGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "% of Population",
                    data: this.props.unEmploymentData,
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
                    show: true,
                    showForSingleSeries: true,
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
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return value.toFixed(2) + "%";
                        },
                        rotate: '330',
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    },
                },
                xaxis: {
                    type: 'datetime',
                    categories: this.props.employmentDate,
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
        if (this.props.unEmploymentData !== prevProps.unEmploymentData || this.props.employmentDate !== prevProps.employmentDate) {

            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.employmentDate
                }
            }
            var c = [{
                name: "% of Population",
                data: this.props.unEmploymentData,
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

export default UnemploymentRateGraph