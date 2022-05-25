import { Component, ComponentDidMount } from 'react';
import GraphData from '../../Api/Grapgh'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class SaleInventoryGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: "Series 1",

                    data: this.props.inventry,

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
                        formatter: function (value) {
                            return "$" + value;
                          },
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: this.props.inventryDate,
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
        if (this.props.inventry !== prevProps.inventry || this.props.inventryDate !== prevProps.inventryDate) {

            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.inventryDate
                }
            }
            var c = [{
                name: "Series 1",
                data: this.props.inventry,
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
                {/* {console.log(this.props)} */}
                {/* {this.props.inventaryYear} */}
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        );
    }
}

export default SaleInventoryGraph