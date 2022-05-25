import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import classes from "../Component/Navbar.module.css"
import Link from "next/link"

function Dashnav() {
  const router = useRouter();
  const [user, setUser] = useState('')
  const [notificationOPen, setNotificationOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  useEffect(() => {

    if (typeof window !== 'undefined') {

      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [typeof window])

  const Logout = () => {
    localStorage.clear();
    window.location.href = '/';
  }

  function notificationExpand() {
    setNotificationOpen(true);
  }
  function notificationClose() {
    setNotificationOpen(false);
  }
  function dashboardExpand() {
    setDashboardOpen(true);
  }
  function dashboardClose() {
    setDashboardOpen(false);
  }

  return (
    <div className={classes.dashNavColor}>
      <div className="container mx-auto">
        <div className="row ms-0">
          <div className="col-12 ms-0 p-0 m-0">
            <nav className="navbar navbar-expand-lg navbar-light p-0 bordr">
              <div className="container-fluid p-0">
                <button className="navbar-toggler py-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-lg-0">
                    <Link href="/" ><div className={`nav-link fs-15  ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/" ? "active" : null}`}>
                      Home</div>
                    </Link>
                    <Link href="/#Prices" ><div className={`nav-link fs-15 ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/" ? "active" : null}`}>
                      Pricing</div></Link>
                    <Link href="/About" ><div className={`nav-link  fs-15 ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/About" ? "active" : null}`}>
                      About us</div></Link>
                    <Link href="/Blog" ><div className={`nav-link fs-15 ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/Blog" ? "active" : null}`}>
                      Articles</div></Link>
                    <Link href="/Contact" ><div className={`nav-link fs-15 ${classes.NavBtnPadding + ' ' + classes.navbarText} ${router.pathname == "/Contact" ? "active" : null}`}>
                      Contact</div></Link>
                    <details className="dropdown text-white my-auto">
                      <summary role="button">
                        <span className="button">
                          <img src={'/NotificationNav.svg'} className={`mx-3 text-lg-start noti-w py-md-4 ${classes.notiBtn}`} style={{ objectFit: 'contain' }} />
                        </span>
                      </summary>
                      <ul>
                        <li>
                          <div className='d-inline-flex w-100 px-3 brdr_btm1'>
                            <img src='./notificationImg.png' style={{ width: "20%" }} alt='img' />
                            <p className='my-auto fs-14 light_font ms-3'>ksajhdi soakf sjka akjdn s</p>
                          </div>
                        </li>
                        <li>
                          <div className='d-inline-flex w-100 px-3 brdr_btm1'>
                            <img src='./notificationImg.png' style={{ width: "20%" }} alt='img' />
                            <p className='my-auto fs-14 light_font ms-3'>ksajhdi soakf sjka akjdn s</p>
                          </div>
                        </li>
                        <li>
                          <div className='d-inline-flex w-100 px-3 brdr_btm1'>
                            <img src='./notificationImg.png' style={{ width: "20%" }} alt='img' />
                            <p className='my-auto fs-14 light_font ms-3'>ksajhdi soakf sjka akjdn s</p>
                          </div>
                        </li>
                        <li>
                          <div className='d-inline-flex w-100 px-3 brdr_btm1'>
                            <img src='./notificationImg.png' style={{ width: "20%" }} alt='img' />
                            <p className='my-auto fs-14 light_font ms-3'>ksajhdi soakf sjka akjdn s</p>
                          </div>
                        </li>
                        <Link href="/Notifications">
                          <div className='fs-15 text-center bluetxt'>show full notifications</div>
                        </Link>
                      </ul>
                    </details>

                    <details className="dropdown text-white my-auto">
                      <summary role="button">
                        <span className={`d-flex button rounded-pill name-bg my-sm-2 my-md-auto ${classes.profileBtn}`}>
                          <img src={user?.image} className='rounded_img' style={{ width: '4.6rem' }} />
                          <p className="text-white my-auto px-sm-0 ps-md-3 pe-md-5 fs-15">{user?.username}</p>
                        </span>
                      </summary>
                      <ul>
                        <li>
                          <Link href="/Dashboard" >
                            <div className="d-inline-flex w-100 px-3 py-4 brdr_btm1">
                              <img src={"/editLogo_black.svg"} className='mx-3 my-auto' /><p className='fs-14 ms-3 mb-0'>My Dashboard</p>
                            </div></Link>
                        </li>
                        <li>
                          <Link href="/EditProfile" >
                            <div className="d-inline-flex w-100  px-3 py-4 brdr_btm1">
                              <img src={"/editLogo_black.svg"} className='mx-3 my-auto' /><p className='fs-14 ms-3 mb-0'>Edit Profile</p>
                            </div></Link>
                        </li>
                        <li>
                          <Link href="/MyFavourites" >
                            <div className="d-inline-flex w-100  px-3 py-4 brdr_btm1">
                              <img src={"/heart_black.svg"} className='mx-3 my-auto' /><p className='fs-14 ms-3 mb-0'>My Favourites</p>
                            </div></Link>
                        </li>
                        <li>
                          <Link href="/Notifications" >
                            <div className="d-inline-flex w-100  px-3 py-4 brdr_btm1">
                              <img src={"/bell_black.svg"} className='mx-3 my-auto' /><p className='fs-14 ms-3 mb-0'>Notifications</p>
                            </div></Link>
                        </li>
                        <li>
                          <Link href="" >
                            <div className="d-inline-flex w-100  px-3 py-4 brdr_btm1"  onClick={Logout}>
                              <img src={"/Logout_black.svg"} className='mx-3 my-auto' /><p className='fs-14 ms-3 mb-0'>Log Out</p>
                            </div></Link>
                        </li>
                      </ul>
                    </details>
                  </ul>
                  {/* <img className="p-2 rounded-pill" src="Path 188.png" alt="" /> */}
                </div>
              </div>
            </nav>
          </div>
        </div >
      </div >
    </div >
  )
}
export default Dashnav
