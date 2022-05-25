import React from "react"
import { CSVLink } from "react-csv"
import 'antd/dist/antd.css';
import { Table, Button, Space, Select, message } from 'antd';
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/SideNavbar';
import GetData from '../../Api/GetData';
import { Spin, Tooltip } from 'antd';
import withAuth from '../../Component/Auth';
import PostData from "../../Api/PostData";
import DeleteData from "../../Api/DeleteData"
import TableRegionComponent from "../../Component/TableRegionComponent";


class Aprecation extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    data: [],
    currentPage: 1,
    totalPages: 1,
    favourite: [],
    loading: true,
    region: true,
    regionData: [],
    regionId: "",
    regions: "",
    dataa: false,
    dataRegion: []
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    if (pagination.current !== 1) {
      this.tableData(pagination.current)
    }


    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  handleChangee = (e) => {
    this.getRegionId(e.target.value)


    this.setState({

      regions: e.target.value

    })


  }

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  // setRegionSort = () => {
  //   this.setState({
  //     sortedInfo: {
  //       order: 'ascend',
  //       columnKey: 'Region',
  //     },
  //   });
  // };
  componentDidMount() {
    this.tableData(1)
    this.favourites()
    this.getRegion()
  }
  getRegionId = (region) => {
    const response = GetData.AprecationId(region);
    response.then(value => {
      console.log("VALUES:", value)
      if (value) {

        this.setState({
          dataRegion: value?.data?.allRecords,
          dataa: true,

          // totalPagess: value?.data?.pages,

        })




      }

    })
  }
  tableData = (pageNo) => {
    const response = GetData.Aprecation(pageNo);
    console.log(response)
    response.then(value => {
      console.log('dfgh', value)
      if (value) {
        this.setState({
          data: value?.data?.allRecords,
          totalPages: value?.data?.pages,
          loading: false
        })
      }
    })
  }
  print() {
    var content = document.getElementsByClassName('ant-table-content');
    var pri = document.getElementById('ifmcontentstoprint').contentWindow;
    pri.document.open();
    pri.document.write(content[0].innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  }

  favourites = () => {
    const response = GetData.Favourite();
    console.log(response)
    response.then(value => {
      console.log(value)
      if (value) {
        this.setState({
          favourite: value?.data?.favoriteRegions
        })
        console.log(value.data.favoriteRegions)
      }

    }

      //   setLoading(false);
    )
  }

  AddFavourite = (e) => {
    const res = PostData.AddFavouriteCity(e)
    res.then(value => {
      console.log('value', value.data)
      if (value.data.success) {
        message.success('Added to favourites')
        this.favourites()
      }

    })
      .catch(err => {
        console.log(err)
        this.favourites()
      })
  }
  getRegion = () => {
    const response = GetData.MarketRegion();
    response.then(value => {
      console.log("VALUE:", value)
      if (value) {

        let race = []
        for (let key in value.data.Data) {
          race.push(value.data.Data[key])
          this.setState({
            regionData: race,
            regionId: value.data.Data[key].ZILLOWSTATE
          })
        }

      }

    })
  }

  DeleteFavrt = (id) => {
    const response = DeleteData.DeleteFavourite(id);
    response.then(value => {

      console.log(value)
      if (value) {
        message.success('Remove from favourites')

        this.favourites()
      }
      //   setLoading(false);
    })
      .catch(err => {
        console.log(err)
        this.favourites()
      })
  }





  render() {
    // console.log('asdfgh', this.state)
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const Info = () => (<svg xmlns="http://www.w3.org/2000/svg" width="12.824" height="12.824" viewBox="0 0 14.824 14.824">
      <path id="info" d="M11.912,4.5a7.412,7.412,0,1,0,7.412,7.413A7.412,7.412,0,0,0,11.912,4.5Zm.756,11.535a.258.258,0,0,1-.258.258h-1a.258.258,0,0,1-.258-.258V11.248a.258.258,0,0,1,.258-.258h1a.258.258,0,0,1,.258.258Zm-.763-6.113a.9.9,0,0,1-.893-.9.9.9,0,0,1,1.8,0,.9.9,0,0,1-.9.9Z" transform="translate(-4.5 -4.5)" fill="#0f74af" />
    </svg>
    )
    const columns = [
      {
        title: 'REGION',
        info: "zxcvbn",
        fixed: 'left',
        key: 'region',
        width: '15%',
        onFilter: (value, record) => record.region.startsWith(value),
        filteredValue: filteredInfo.value || null,
        sortOrder: sortedInfo.columnKey === 'region' && sortedInfo.order,
        sorter: (a, b) => a.region.localeCompare(b.region),
        sortDirections: ['ascend', 'descend'],
        ellipsis: true,
        showSorterTooltip: false,
        render: (record, text, index) => <Tooltip placement="top" color='#E8F2FF' title='Click on any region for more information'>
          <div className="d-flex">
            <Button className="info_class" />
            <TableRegionComponent record={record} favourites={this.state.favourite} DeleteFavrt={this.DeleteFavrt} AddFavourite={this.AddFavourite} />
          </div>
        </Tooltip>
      },
      {
        title: () => {
          return <div className="text-uppercase">Overall Average Appreciation{' '}
            <Tooltip placement="top" color='#E8F2FF' title='Estimated average property appriciation 2018-present'>
              <Button className="info_class"><Info /></Button>
            </Tooltip></div>
        },
        bordered: true,
        render: (record, text, index) => <>{Math.round(record.avgGrowth * 100) / 100}%</>,
        key: 'avgGrowth',
        width: '15%',
        sorter: (a, b) => a.avgGrowth - b.avgGrowth,
        sortDirections: ['ascend', 'descend'],
        sortOrder: sortedInfo.columnKey === 'avgGrowth' && sortedInfo.order,
        showSorterTooltip: false,
        ellipsis: true,
      },
      {
        title: '2018',
        render: (record, text, index) => <>{Math.round(record.y2018 * 100) / 100}%</>,
        key: 'y2018',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.2018 || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.y2018 - b.y2018,
        sortDirections: ['ascend', 'descend'],
        sortOrder: sortedInfo.columnKey === 'y2018' && sortedInfo.order,
        showSorterTooltip: false,
        ellipsis: true,
      },
      {
        title: '2019',
        render: (record, text, index) => <>{Math.round(record.y2019 * 100) / 100}%</>,
        key: 'y2019',
        sorter: (a, b) => a.y2019 - b.y2019,
        sortDirections: ['ascend', 'descend'],
        sortOrder: sortedInfo.columnKey === 'y2019' && sortedInfo.order,
        showSorterTooltip: false,
        ellipsis: true,
      },
      {
        title: '2020',
        render: (record, text, index) => <>{Math.round(record.y2020 * 100) / 100}%</>,
        key: 'y2020',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.y2020 - b.y2020,
        sortDirections: ['ascend', 'descend'],
        sortOrder: sortedInfo.columnKey === 'y2020' && sortedInfo.order,
        showSorterTooltip: false,
        ellipsis: true,
      },
      {
        title: '2021',
        render: (record, text, index) => <>{Math.round(record.y2021 * 100) / 100}%</>,
        key: 'y2021',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.y2021 - b.y2021,
        sortDirections: ['ascend', 'descend'],
        sortOrder: sortedInfo.columnKey === 'y2021' && sortedInfo.order,
        showSorterTooltip: false,
        ellipsis: true,
      },
      {
        title: '2022',
        render: (record, text, index) => <>{Math.round(record.y2022 * 100) / 100}%</>,
        key: 'y2022',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.y2022 - b.y2022,
        sortDirections: ['ascend', 'descend'],
        sortOrder: sortedInfo.columnKey === 'y2022' && sortedInfo.order,
        showSorterTooltip: false,
        ellipsis: true,
      },
      {
        title: () => {
          return <div className="text-uppercase">Median Sale Price{' '}
            <Tooltip placement="top" color='#E8F2FF' title='Estimated median sales price of a property'>
              <Button className="info_class"> <Info /></Button>
            </Tooltip></div>
        },
        dataIndex: 'median',
        key: 'median',
        width: '11%',
        render: (record) => <>${record.toLocaleString(record.median)}</>,
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.median - b.median,
        sortDirections: ['ascend', 'descend'],
        sortOrder: sortedInfo.columnKey === 'median' && sortedInfo.order,
        showSorterTooltip: false,
        ellipsis: true,
      },
      {
        title: () => {
          return <div className="text-uppercase">Average State Property Tax{' '}
            <Tooltip placement="top" color='#E8F2FF' title='Estimated average property tax as a percent to property value (at State level)'>
              <Button className="info_class"> <Info /></Button>
            </Tooltip></div>
        },
        // dataIndex: 'avgTax',
        key: 'avgTax',
        width: '13%',
        render: (record, text, index) => <>{Math.round(record.avgTax * 100) / 100}%</>,
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.avgTax - b.avgTax,
        sortDirections: ['ascend', 'descend'],
        sortOrder: sortedInfo.columnKey === 'avgTax' && sortedInfo.order,
        showSorterTooltip: false,
        ellipsis: true,
      },
      {
        title: () => {
          return <div className="text-uppercase">Population{' '}
            <Tooltip placement="top" color='#E8F2FF' title='Estimated Population'>
              <Button className="info_class"> <Info /></Button>
            </Tooltip></div>
        },
        dataIndex: 'population',
        key: 'population',
        // filters: [
        //   { text: 'London', value: 'London' },
        //   { text: 'New York', value: 'New York' },
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        // comma: () => population.toLocaleString(),
        render: (record) => record.toLocaleString(record.population),
        showSorterTooltip: false,
        sorter: (a, b) => a.population - b.population,
        sortDirections: ['ascend', 'descend'],
        sortOrder: sortedInfo.columnKey === 'population' && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
        <div className="d-inline-flex w-100">
          <Sidebar />

          <div style={{ width: "inherit" }}>
            <Dashnav />
            {/* <div className='container'> */}
            <div className='container mx-auto mt-3 px-md-5' >
              <p className='fs-40 Gothic_3D'>Market Appreciation</p>
              <div className='d-flex my-3'>
                <div className='row w-25 my-auto'>
                  <div className='d-block col-6 p-0'>
                    <label className='bluetxt fs-13'>Select State</label>
                    <select className="form-control form-select form-control-sm" value={this.state.regions} onChange={this.handleChangee}  >

                      {this.state.regionData.map((state) => {
                        return (
                          <option key={Math.random()} value={state.ZILLOWSTATE}>{state.STATENAME}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <div className='ms-auto my-auto'>
                  <button className='btn bluebtn px-4 fs-14' onClick={this.print}>Print</button>
                  <CSVLink
                    filename={"Market_Appreciation_Table.csv"}
                    className='btn bluebtn px-4 fs-14 ms-2'
                    data={this.state.data}
                    onClick={() => {
                      message.success("The file is downloading...")
                    }}
                  >
                    Download CSV
                  </CSVLink>
                </div>
              </div>
              {this.state.loading ? (
                <div className='text-center mt-5'><Spin /></div>
              ) : (

                <div >
                  {this.state.dataa ?
                    // <Table columns={columns}
                    //   colors={['#123123', 'rgba(123,123,123,12)']}
                    //   averageDuplicates
                    //   inferBlanks
                    //   pagination={{ pageSize: 200, defaultCurrent: this.state.currentPage, total: this.state.totalPages * 200 }}
                    //   dataSource={this.state.dataRegion} onChange={this.handleChange}
                    //   scroll={{ x: 768 }}
                    // /> :
                    <Table columns={columns}
                      colors={['#123123', 'rgba(123,123,123,12)']}
                      averageDuplicates
                      inferBlanks
                      pagination={{ pageSize: 200, defaultCurrent: this.state.currentPage, total: this.state.totalPages * 200 }}
                      dataSource={this.state.data} onChange={this.handleChange}
                      scroll={{ x: 768 }}
                    />}


                  <iframe id="ifmcontentstoprint" style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    display: 'none',
                  }}></iframe>
                </div>
              )}
            </div>
          </div>
          {/* </div>    */}
        </div>
      </>
    );
  }
}
export default withAuth(Aprecation);