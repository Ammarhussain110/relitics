import React, { useEffect, useState } from 'react'
import Link from "next/link"
import blogData from './Data/BlogData';
import classes from "./Footer.module.css"
import GetData from '../Api/GetData';
import PostData from '../Api/PostData';

import { FaFacebook, FaPinterest, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Foter() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [categoriesVisible, setcategoriesVisible] = useState(3)

    const [settingErrors, setSettingErrors] = useState('');
    const [data, setData] = useState([]);

    // const uniqueCategories = [...new Set( blogData.map(obj => obj.category)) ];
    // console.log(uniqueCategories)
    useEffect(() => {
        const response = GetData.BlogCatagory();
        response.then(value => {
            // console.log('dfgh',value.data.categories)
            if (value) {
                setData(value?.data?.categories)
            }
        })
    }, [])

    const NewsLetter = e => {
        e.preventDefault();
        // nextStep();
        const res = PostData.CreateNewsLetter(email, settingErrors)
        res.then(value => {
            setSuccess(value.data.message)
        })
            .catch(error => {
                console.log("Error", error)
            })
    }
    return (
        <div>
            <hr className="mt-5" />
            <div className="container-fluid  p-0">
                <div className="row my-5">
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-3 col-sm-6">
                                <p className={classes.fontbold}>Categories</p>
                                <div>
                                    {data.slice(0, categoriesVisible).map((x, index) => {
                                        // console.log(x)
                                        return (
                                            <div key={Math.random()}>
                                                <Link href={`/BlogCategory/${x.name}`}>
                                                    <div>
                                                        <p className='fs-17 catagory'>{x.name}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>

                                {data.length > 3 && (
                                    categoriesVisible < data.length ? (
                                        <a className="text-decoration-none" onClick={(() => setcategoriesVisible(categoriesVisible + 4))} style={{ cursor: "pointer" }}>
                                            load More
                                        </a>
                                    ) : (
                                        <a className="text-decoration-none" onClick={(() => setcategoriesVisible(categoriesVisible - 4))} style={{ cursor: "pointer" }}>
                                            Show Less
                                        </a>
                                    )
                                )}
                            </div>


                            <div className="col-md-3 col-sm-6">
                                <Link href="/About">
                                    <a className={classes.fontbold}><p>About us</p></a>
                                </Link>
                                <Link href="/Terms">
                                    <a className={classes.footerp}><p>Terms of Use</p></a>
                                </Link>
                                <Link href="/Privacy">
                                    <a className={classes.footerp}><p>Privacy Policy</p></a>
                                </Link>
                                <Link href="/CokiePolicy">
                                    <a className={classes.footerp}><p>Cookie Policy</p></a>
                                </Link>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <p className={classes.fontbold}>Pages</p>
                                <Link href="/Blog">
                                    <a className={classes.footerp}><p>Articles</p></a>
                                </Link>
                                <Link href="/Contact">
                                    <a className={classes.footerp}>  <p>Contact</p></a>
                                </Link>
                                <Link href="/About">
                                    <a className={classes.footerp}>  <p>About Us</p></a>
                                </Link>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <p className={classes.fontbold}>Subscribe to our newsletter</p>
                                <form onSubmit={NewsLetter}>
                                    <p className="mx-auto Bold fs-16">Email</p>
                                    <input type="email" value={email} name="email"
                                        placeholder="Enter your Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control py-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    {settingErrors}
                                    <button type="submit" className={`btn py-3 mt-2 btn-lg fs-15 semi-bold w-100 btn-block ${classes.btninfo}`} >Subscribe</button>
                                    <p className='fs-19 mt-2 text-success'>{success}</p>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>


                <div className="container-fluid p-0">
                    <div className={classes.footercolor}>


                        <div className="row ">
                            <div className='container'>
                                <div className='row p-0 '>


                                    <div className="col-sm-6 mt-4">
                                    <p className="col-12 fs-15 Footer py-auto mb-1" style={{ color: "white", fontFamily: '"Poppins", sans-serif' }} >Web Design and Development by<Link href="https://bizzclan.com/" style={{ color: "white", fontFamily: '"Poppins", sans-serif' }} > BizzClan </Link></p>
                                        <p className="col-12 fs-15 Footer pb-3 py-auto  mb-1" style={{ color: "white", fontFamily: '"Poppins", sans-serif' }} >Copyright 2022 &copy; <Link href="/" style={{ color: "white", fontFamily: '"Poppins", sans-serif' }} >Reilitics</Link> </p>                                    </div>


                                    <div className="col-sm-6  ms-auto">
                                        <div className="float-end">
                                            <img className='mt-4' src={"/CircleFb.svg"} alt="facebook" />
                                            <img className="ms-3 mt-4" src={"/circlePinterest.svg"} alt="pinterest" />
                                            <img className="ms-3 mt-4" src={"/circleTwitter.svg"} alt="twitter" />
                                            <img className="ms-3 mt-4" src={"/circleLinkedin.svg"} alt="linkedin" />
                                            <img className="ms-3 mt-4" src={"/circleInstagram.svg"} alt="instagram" />
                                        </div>


                                    </div>
                                   
                                </div>
                            </div>
                            {/* <div className="pt-3 absolute-footer dark ">
                                       
                                    </div> */}

                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Foter