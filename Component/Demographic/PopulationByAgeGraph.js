
import { Component } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class PopulationByAgeGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Males',
                data: this.props.male,
                color: '#1F78B4',
            },
            {
                name: 'Females',
                data: this.props.feMale,
                color: '#2F97D3'
            }
            ],
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },
                    type: 'bar',
                    stacked: true,
                    height: 450,
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
                    fontSize: '16'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '100%',
                        // columnWidth: '100%',
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: { 
                    width: 2,
                    lineCap: 'round',
                    colors: ["#fff"]
                },
                grid: {
                    show: false,
                },
                yaxis: {
                    min: this.props.lowest,
                    max: this.props.highest,
                    title: {
                        text: 'Growth',
                    },
                    labels: {
                        rotate: 330,
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
                xaxis: {
                    categories: this.props.age,
                    labels: {formatter: function (val, index) {
                        return  val.toFixed();
                    },
                        style: {
                            colors: ['#555555'],
                            fontSize: '10px',
                        },
                    }
                },
                tooltip: {
                  shared: false,
                  x: {
                    formatter: function (val) {
                      return val
                    }
                  },
                  y: {
                    formatter: function (val) {
                      return Math.abs(val)
                    }
                  }
                },
                labels: {
                  formatter: function (val) {
                    return Math.abs(Math.round(val)) + "%"
                  }
                }
            },


        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.male !== prevProps.male || this.props.feMale !== prevProps.feMale) {
            {console.log('dcd', this.props)}

            var b = {
                ...this.state.options,
                xaxis: {
                    ...this.state.options.xaxis,
                    categories: this.props.age
                }
            }
            var c = [{
                name: "Male",
                data: this.props.male,
                color: '#0F74AF'
            },
            {
                name: "FeMale",
                data: this.props.feMale,
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

            <div id="chart" className='p-5'>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={500} />
            </div>
        );
    }
}

export default PopulationByAgeGraph