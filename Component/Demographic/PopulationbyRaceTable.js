import React from 'react'
import 'antd/dist/antd.css';
import { Table, Button, Space, Select, message } from 'antd';
import GetData from '../../Api/GetData';
import { Spin } from 'antd';

class PopulationbyRaceTable extends React.Component {
    state = {
        loading: true,
    };
    componentDidMount() {
        this.tableData(1)
    }

    tableData = (pageNo) => {
        const response = GetData.RentalGrowth(pageNo);
        console.log(response)
        response.then(value => {
            console.log('dfgh', value)
            this.setState({
                data: value?.data?.rentalGrowth,
                totalPages: value?.data?.pages,
                loading: false
            })
        })
    }

    render() {
        const columns = [
            {
                title: 'Race',
                dataIndex: 'race',
            },
            {
                title: 'Population',
                dataIndex: 'population',
            },
            {
                title: 'Percentage',
                dataIndex: 'percentage',
            },
        ];
        return (
            <>
                {this.state.loading ? (
                    <div className='text-center mt-5'><Spin /></div>

                ) : (
                    <>
                        <div >
                            <Table columns={columns}
                                size="middle"
                                pagination='false'
                                dataSource={this.props.table} />
                        </div>
                    </>
                )}
            </>
        );
    }
}
export default PopulationbyRaceTable