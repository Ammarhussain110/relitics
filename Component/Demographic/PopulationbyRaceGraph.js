import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


class PopulationbyRaceGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: this.props.percent,
            options: {
                labels: this.props.race,
                colors: ['#1F78B4', '#46A1D6', '#12608E', '#68AED6', '#E8F2FF', '#073652', '#22292E'],
                chart: {
                    width: 380,
                    type: 'donut',
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'bottom',
                    horizontalAlign: 'left',
                    fontSize: '16'
                },
                responsive: [{
                    breakpoint: 750,
                    options: {
                        plotOptions: {
                            pie: {
                                expandOnClick: false,
                                dataLabels: {
                                    minAngleToShowLabel: 360
                                },
                                donut: {
                                    size: '55%',
                                    background: 'transparent',
                                    labels: {
                                        show: false,
                                    }
                                },
                            }
                        }
                    },
                }],
                plotOptions: {
                    pie: {
                        customScale: 1.5,
                        startAngle: 0,
                        endAngle: 360,
                        expandOnClick: true,
                        offsetX: 0,
                        offsetY: 0,
                        customScale: 1,
                        dataLabels: {
                            offset: 0,
                            minAngleToShowLabel: '60'
                        },
                        donut: {
                            size: '55%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '15px',
                                    color: 'black',
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    fontWeight: 600,
                                },
                                value: {
                                    show: true,
                                    fontSize: '15px',
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    fontWeight: 400,
                                },
                                total: {
                                    show: true,
                                    label: 'Race',
                                    fontSize: '16px',
                                    textWrap: true,
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    fontWeight: 300,
                                    color: 'black',
                                }
                            }
                        },
                    }
                }
            },


        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.percent !== prevProps.percent || this.props.race !== prevProps.race ) {
    console.log("last", this.props)
            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.race
                }
            }
            this.setState({
                series: this.props.percent,
                options: b
            })
    
        }
    }

    render() {
        return (
            <div id="chart" className='mx-auto'>
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={'100%'} />
            </div>
        );
    }
}

export default PopulationbyRaceGraph