import { React, useEffect, useState } from 'react';
import ApreciationTableComponent from '../ApreciationTableComponent'
import RentalTableComponent from '../RentalTableComponent'
import MedianGraph from './MarketPageGraph';
import GraphData from "../../Api/Grapgh"
import GetData from '../../Api/GetData'
import { useRouter } from "next/router";
import PostData from "../../Api/PostData"
import { message } from 'antd';


export default function Market(props) {
    const [rental, setRental] = useState([])
    const [Apprecation, setApprecation] = useState([])
    const [regionlst, setRegionlist] = useState([])
    const [sltdRegion, setSlectdRegion] = useState('')
    const [year, setYear] = useState('')
    const [region, setRegion] = useState('')
    const [id, setId] = useState('')
    function handleChangee(e) {
        setYear(e.target.value);
        // props.listPrice(e.target.value)
    }

    const regionUpdate = (id) => {
        const response = GraphData.RentalAprecation(id);
        response.then(value => {
            console.log('Rental Res', value)
            setId(value?.data?.Data?.appreciation.regionID)
            setRegion(value?.data?.Data?.appreciation.region)
            let data = []
            data.push(value?.data?.Data?.appreciation)
            setApprecation(data)
            let data1 = []
            data1.push(value?.data?.Data?.rental)
            setRental(data1)
        })
    }
    const AddFavourite = () => {
    const res = PostData.AddFavouriteStats(id, region)
    res.then(value => {
      console.log('value', value.data)
      if (value.data.success) {
        message.success('Added to favourites')
        // this.favourites()
      }
    })
      .catch(err => {
        console.log(err)
        // this.favourites()
      })
  }
  
    useEffect(() => {
        setSlectdRegion(props.id)
        GetRegion()
        regionUpdate(props.id)
    }, [props.id]);

    const GetRegion = () => {
        // setLoading(true)
        // console.log({eventId})
        const response = GetData.Region();
        response.then(value => {
            console.log('Region Res', value)
            setRegionlist(value.data.Regions)
        })
    }
    function handleChange(e) {
        console.log('Region>>>>', e.target.value)
        setSlectdRegion(e.target.value)
        regionUpdate(e.target.value)
    }
    const print = () => {

        var content = document.getElementsByClassName('Market_pg');
        var pri = document.getElementById('ifmcontentstoprint').contentWindow;
        pri.document.open();
        pri.document.write(content[0].innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }

    return (
        <div>

            <div className='d-flex my-3'>
                <div className='row w-25 my-auto'>

                    <div className='d-block col-8'>

                        <label className='bluetxt fs-13'>Select Region</label>
                        <select className="form-control form-select w-100 form-control-sm" onChange={handleChange} value={sltdRegion}>
                            {console.log('regionss', regionlst)}
                            {regionlst.map((each) => {
                                return (
                                    <>
                                        <option value={each.RegionID}>{each.RegionName}</option>
                                    </>

                                )


                            })}
                        </select>
                    </div>
                </div>
                <div className='ms-auto my-auto'>
                    <button onClick={() => window.open("https://www.zillow.com/")} className='btn bluebtn px-4 fs-14 m-1'  >Search properties on  Zillow </button>
                    <button className='btn bluebtn px-4 fs-14 m-1'>Add to Favourite <img src='/unfilledHeart1.svg' onClick={AddFavourite} className='ms-2 my-auto' /></button>
                    <button className='btn bluebtn px-4 fs-14 m-1' onClick={print}>Print and Download<img src={'/print.svg'} className='ms-2 my-auto' /></button>
                </div>
            </div>
            <div className='Market_pg'>
                <div className='d-lg-inline-flex'>
                    <div className='p-3 mx-2 paginetion_none bg_table'>
                        {console.log('Apprecation Data', Apprecation)}
                        {Apprecation ? <ApreciationTableComponent AppreciationData={Apprecation} /> : <p>Loading</p>}
                    </div>
                    <div className='p-3 mx-2 paginetion_none bg_table'>
                        <RentalTableComponent rental={rental} />
                    </div>
                </div>
                <div className='row w-25 my-auto'>

                    <div className='d-block col-8'>

                        <label className='bluetxt fs-13'>Select Year</label>
                        <select className="form-control text-center form-select form-control-sm" name="year" onChange={handleChangee} value={year}>
                            <option value="2018">All</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>
                </div>

                <div className=''>
                    <MedianGraph id={sltdRegion} year={year} />
                </div>
                <iframe id="ifmcontentstoprint"
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        display: 'none',
                    }}></iframe>
                <footer className='text-center text-black mt-5 fs-11'>
                    <p>DISCLAIMER - Data is provided “as is” via the Public Records API.</p>
                    <p>© Zillow, Inc. 2006-2020. Use is subject to Term of Use.</p>
                </footer>
            </div>
        </div>
    );
}
