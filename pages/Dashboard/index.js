import React, { useState, useEffect } from "react";
import Link from "next/link"
import Sidebar from "../../Component/SideNavbar";
import MaterialDesignSwitch from "../../Component/Togle1";
import Membership from "../../Component/Data/MembershipData";
import Dashnav from "../../Component/Dashnav";
import withAuth from "../../Component/Auth";
import "react-pro-sidebar/dist/css/styles.css";
import GraphData from '../../Api/Grapgh'
import Router from 'next/router'




const Dashboard = () => {
  const [region, setRegion] = useState([])
  const [regionlist, setRegionlist] = useState([])

  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  let firstName = JSON.parse(localStorage.getItem('user')).firstName;
  const Region = () => {
    const response = GraphData.marketRegion();
    console.log(response)
    response.then(value => {
      console.log('Regions>?>?', value)
      if (value) {
        setRegionlist(value.data.Regions);

      }
    })
  }
  useEffect(() => {
    Region()

  }, []);
  function handleChange(e) {
    setRegion(e.target.value);
    // Router.push(`/MarketStats/${e.target.value}`);



  }


  return (
    <>
      <div className="d-inline-flex w-100">
        <Sidebar />
        <div style={{ width: "inherit" }}>
          <Dashnav />
          <div className='container mx-auto mt-3 px-md-5'>
            <p className="fs-40 Gothic_3D">Hi {firstName}</p>
            <p className="fs-16">Welcome back to your dashboard</p>
            <div className="row g-5">
              <div className="col-lg-7 px-0">
                <div className="bg-dash p-5">
                  <p className="fs-30 mb-0 Gothic_3D">Compare Regions</p>
                  <p className="fs-16 greyBlack">Let&#39;s start by finding you a region of interest.</p>
                  <div className="row">
                    <Link href={"./Appreciation"}>
                      <div className="col-sm-12 col-md-6 p-3 ps-0">
                        <div className="bg-white text-center p-3 Hover pointer-cursor brdr_card brdr">
                          <img src={'/development1.svg'} />
                          <p className="my-3 fs-18 Bold greyBlack">Market Appreciation</p>

                        </div>
                      </div>
                    </Link>
                    <Link href={"./RentalGrowth"}>
                      <div className="col-sm-12 col-md-6 p-3">
                        <div className="bg-white text-center p-3 Hover pointer-cursor brdr_card brdr">
                          <img src={'/chart1.svg'} />
                          <p className="my-3 fs-18 Bold greyBlack">Rental Growth</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {Membership.map(mem => {
                  return (
                    <>
                      <div className="bg-dash mt-3 p-5">
                        <p className="fs-30 Gothic_3D">Membership Details</p>
                        <div className="bg-white p-5">
                          <p className="fs-16 greyBlack">Membership Package</p>
                          <div className="d-flex mt-3">
                            <p className=" fs-20 Bold greyBlack">Paid</p>
                            <p className="ms-auto fs-22 Bold greyBlack">${mem.price}</p>
                          </div>
                          <div className="d-flex mt-1">
                            <p className="my-auto fs-16 greyBlack">Status</p>
                            <button className="btn ms-auto light-BlueBtn px-5 fs-14">{mem.status ? "active" : "not-active"}</button>
                          </div>
                          <div className="d-flex mt-2">
                            <p className="my-auto fs-16 greyBlack">Membership Renew date</p>
                            <p className="ms-auto my-auto fs-16 greyBlack">{mem.date}</p>
                          </div>
                          <div className="d-flex mt-2">
                            <div className="row w-100">
                              <div className="col-lg-4 d-flex brdr_card brdr">
                                <p className="my-auto fs-14 text-nowrap greyBlack">Auto renew</p>
                                <div className="mt-2 ms-3">
                                  <MaterialDesignSwitch className='mt-3' /></div>
                              </div>
                              <div className="col-lg-8 p-0 text-end">
                                <button className="btn mx-2 ny-2 fs-14 opac px-4 btnYelow">Upgrade</button>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className="col-lg-5">
                <div className="bg-dash p-5">
                  <p className="fs-30 Gothic_3D mb-0">Region Details</p>
                  <p className="fs-16 greyBlack">Want to jump straight into details?</p>
                  <div className="bg-white text-center mx-auto p-5">
                    <p className="fs-18 greyBlack" style={{ fontWeight: "medium" }}>By Region detail Statistics</p>
                    <select className="form-control form-select form-control-sm" onChange={handleChange} value={region}>
                    <option value="">Select Region</option>
                      {regionlist.map((each) => {
                        return (
                          <option key={each.RegionID} value={each.RegionID}>{each.RegionName}</option>
                        )
                      })}
                    </select>
                    <div className="row mt-3 ">
                      {/* <div className="col-sm-12 col-md-8 px-0">
                        <input type="text" value={city} name="city"
                          placeholder="select city"
                          onChange={(e) => setCity(e.target.value)}
                          className="form-control dash-form  " id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div> */}
                      {/* <button className="btn w-50 fs-15 py-3 bluebtn brdr">Search</button> */}
                      <button
                        className="btn w-50 fs-15 py-3 bluebtn brdr"
                        onClick={()=>Router.push(`/MarketStats/${region}`)}
                        disabled={region?.length > 0 ? false : true}>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Dashboard);

