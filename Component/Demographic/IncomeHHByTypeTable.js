import React from 'react'
import 'antd/dist/antd.css';
import { Table, Button, Space, Select, message } from 'antd';
import GetData from '../../Api/GetData';
import { Spin } from 'antd';

class IncomeHHByTypeTable extends React.Component {
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
            if (value) {
                this.setState({
                    data: value?.data?.rentalGrowth,
                    totalPages: value?.data?.pages,
                    loading: false
                })
            }
        })
    }

    render() {
        const columns = [
            {
                title: 'Type',
                dataIndex: 'type',
            },
            {
                title: 'Count',
                dataIndex: 'count',
            },
            {
                title: 'Average Size',
                dataIndex: 'avgSize',
            },
            {
                title: 'Owned',
                dataIndex: 'owned',
            },
        ];
        const data = [
            {
                key: '1',
                type: 'All',
                count: '29,660',
                avgSize: '60.90',
                owned: '60.90',
            },
            {
                key: '2',
                type: 'Female',
                count: '29,660',
                avgSize: '28.55',
                owned: '28.55',
            },
            {
                key: '3',
                type: 'Male',
                count: '29,660',
                avgSize: '3.47',
                owned: '3.47',
            },
            {
                key: '3',
                type: 'Married',
                count: '29,660',
                avgSize: '3.47',
                owned: '3.47',
            },
            {
                key: '4',
                type: 'Non Family',
                count: '29,660',
                avgSize: '3.43',
                owned: '3.43',
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
export default IncomeHHByTypeTable