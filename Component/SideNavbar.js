import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"

import 'react-pro-sidebar/dist/css/styles.css';
import MaterialDesignSwitchh from "./Togle1";
import Membership from "./Data/MembershipData";
import $ from 'jquery';
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";


import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";


const Sidebar = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [user, setUser] = useState('')



  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const router = useRouter();
  const eventId = router.query.id
  const eventCategory = router.query.slug ? router.query.slug[0] : '';
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen = !isOpen
  }
  useEffect(() => {

    if (typeof window !== 'undefined') {

      setUser(JSON.parse(localStorage.getItem('user')))
      // function handleResize() {
      // Set window width/height to state
      if (window.innerWidth < 786) {
        setMenuCollapse(true)
      }
      // }
    }
  }, [typeof window])
  const Logout = () => {
    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <>
      <div id="header">
        <ProSidebar md collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu text-center" onClick={menuIconClick}>
              {menuCollapse ? (
                <img src={"/collapseIcon.svg"} style={{ width: '2.5rem' }} />
              ) : (
                <img src={'/collapseIcon.svg'} style={{ width: '2.5rem' }} />
              )}
            </div>
            <div className={`logotext text-center `} style={{ width: "inherit" }}>
              <img className="my-2 disp-none" src={'/logoImg_.svg'} />
              <img className="my-2 d-none display_block imgw" src={'/LogoOnly.png'} />
            </div>
            <div className="text-center my-3">
              <img src={user?.image} className="rounded_img Img_size" />
            </div>
            <Link href="/EditProfile">
              <div className="disp-none text-center mt-3">
                <p className={`text-white fs-18 mb-1 pointer-cursor ${router.pathname == "/EditProfile" ? "active" : null}`}>{user?.firstName} {user?.lastName}<img src={"/editLogo.png"} className="mb-1 mx-3" /></p>
              </div>
            </Link>
            <p className="fs-14 text-center disp-none">{user?.email}</p>
            {/* <span style={{ marginLeft: '8rem' }}>&#9660;</span> */}
          </SidebarHeader>
          <SidebarContent>
            <Menu className="fs-15" iconShape="square">
              <Link href="/Dashboard" className="dropdown-item">
                <MenuItem className={router.pathname == "/Dashboard" ? "active" : null} icon={<img src={'/Icon material-dashboard.png'} />}>Dashboard overview</MenuItem>
              </Link>
              <div className='ms-4'>
                <Link href="/Appreciation" className="dropdown-item">
                  <MenuItem className={router.pathname == "/Appreciation" ? "active" : null} icon={<img src={'/development.png'} />}>Market Appreciation</MenuItem>
                </Link>
                <Link href="/RentalGrowth" className="dropdown-item">
                  <MenuItem className={router.pathname == "/RentalGrowth" ? "active" : null} icon={<img src={'/chart.png'} />}>Rental Growth</MenuItem>
                </Link>
                <Link href="/MarketStats/102001" className="dropdown-item">
                  <MenuItem className={router.pathname.includes('MarketStats','Notes','DemographicStats','EconomicStats') ? "active" : 'text-white '} icon={<img src={'/bx-stats.png'} href="#" />}>Detail Statistics</MenuItem>
                </Link>
              </div>
              <Link href="/Resources" >
                <MenuItem className={router.pathname == "/Resources" ? "active" : null} icon={<img src={'/Icon material-attach-file.png'} />}>Resources</MenuItem>
              </Link>
              <Link href="/MyFavourites" >
                <MenuItem icon={<FaRegHeart />} className={router.pathname == "/MyFavourites" ? "active" : null}>
                  Favourite</MenuItem>
              </Link>
              <Link href="/MyNotes" >
                <MenuItem icon={<img src={'/Icon material-note.png'} />} className={router.pathname == "/MyNotes" ? "active" : null}>
                  My Notes</MenuItem>
              </Link>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem onClick={Logout} icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  )
}
export default Sidebar