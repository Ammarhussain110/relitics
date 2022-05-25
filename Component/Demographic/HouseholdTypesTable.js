import React from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Space, Select, message } from 'antd';
import GetData from '../../Api/GetData';
import { Spin } from 'antd';



class HouseholdTypesTable extends React.Component {
    state = {
        loading: true,
    };
    componentDidMount() {
        this.tableData(1)
    }

    tableData = (pageNo) => {
        const response = GetData.RentalGrowth(pageNo);
        response.then(value => {
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
                title: 'Owner',
                dataIndex: 'owner',
            },
            {
                title: 'Renter',
                dataIndex: 'renter',
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
export default HouseholdTypesTable