// import Chart from 'react-apexcharts'
import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class ApexMedianChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'List price',
                    data: this.props.list,
                    color: '#E027A0'
                },
                {
                    name: 'Sales price',
                    data: this.props.sales,
                    color: '#0F74AF'
                }],
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
                    formatter: function (value) {
                        return "$" + value;
                      },
                    labels: {
                        formatter: function (val, index) {
                            return '$' + val.toLocaleString();
                        },
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    },
                },
                xaxis: {
                    type: 'datetime',
                    categories: this.props.listDate,
                    labels: {
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    },
                },
            },
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.list !== prevProps.list || this.props.sales !== prevProps.sales) {
            console.log("poi", this.props)
            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.listDate
                }
            }
            var c = [{
                name: "List price",
                data: this.props.list,
                color: '#E027A0'
            }, {
                name: "Sales price",
                data: this.props.sales,
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

export default ApexMedianChart