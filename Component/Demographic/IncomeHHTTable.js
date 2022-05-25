import React from 'react'
import 'antd/dist/antd.css';
import { Table, Button, Space, Select, message } from 'antd';
import GetData from '../../Api/GetData';
import { Spin } from 'antd';

class IncomeHHTTable extends React.Component {
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
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Median',
                dataIndex: 'median',
            },
            {
                title: 'Mean',
                dataIndex: 'mean',
            },
        ];
        const data = [
            {
                key: '1',
                name: 'Households',
                median: '60.90 %',
                mean: '60.90%',
            },
            {
                key: '2',
                name: 'Families',
                median: '28.55%',
                mean: '28.55%',
            },
            {
                key: '3',
                name: 'Married Families',
                median: '3.47%',
                mean: '3.47%',
            },
            {
                key: '4',
                name: 'Non Families',
                median: '3.44%',
                mean: '3.43%',
            },
        ];
        return (
            <>
                {this.state.loading ? (
                    <div className='text-center mt-5'><Spin /></div>

                ) : (
                    <>
                        <div >
                            {console.log("nnnn", this.props)}
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
export default IncomeHHTTable