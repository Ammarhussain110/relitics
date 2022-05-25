import React from 'react'
import classes from "./Home.module.css"
import FeatureCard from '../../Component/FeatureCard'
import PriceCard from '../../Component/PriceCard'
import ReactPlayer from 'react-player'


const HomePage = () => {
    return (
        <div>
            <div className={classes.mainn}>
                <div className="container">
                    <div className="row default-padding">
                        <div className="col-sm-8 py-5">
                            <p className="text-white Gothic_3D fs-70">WE&#39;RE HERE TO SIMPLIFY THE MARKET RESEARCH</p>
                            <p className="text-white fs-17">Eliminate hours of pain-staking research with a single platform that has updated market, economic, and demographic data for the top metro markets across the United States.</p>
                            <a href='#Prices' className="mt-4"> <button type="button" className="btn fs-15 home-button hover">See Pricing</button></a>

                        </div>
                    </div>
                </div>
                {/* <NewPassword /> */}

            </div>
            <div className="container">
                <div className="row default-padding">
                    <div className="col-sm-6">
                        <p className='fs-40 Gothic_3D mb-4'>MAKE SMARTER DECISIONS</p>
                        <div className={`${classes.homeline} mb-3 mt-4`}></div>
                        <p className=" fs-17 pb-4">REI Litics offers an intuitive and easy-to-use dashboard to help you quickly compare data on the top metro markets across the U.S.</p>
                        <p className='fs-17 pb-4'>Imagine the time you&#39;ll save and the advantage you&#39;ll have with information on pricing, appreciation, rental returns, property taxes, demand, and other economic and demographic factors instantly available at your fingertips.</p>
                        <p className='fs-17 pb-4'>Our mission is simple - To create the most versatile market research platform available for real estate investors.  </p>
                    </div>
                    <div className="col-sm-6 my-5">
                        <ReactPlayer
                            className='react-player '
                            url='Videos/relitics.mp4'
                            width='100%'
                            height='100%'
                            controls={true}

                        />
                    </div>
                </div>

            </div>
            <div className={classes.mainn}>
                <div className="container">
                    <div className="row default-padding">
                        <p className="text-white Gothic_3D fs-40 mb-4">FEATURES</p>
                        <div className={`ms-2 ${classes.homeline1}`}> </div>
                        <p className={"fs-17 text-white mt-4"}>REI Litics is a comprehensive and complete collection of widely available data to help you narrow down your market when it comes to real estate investing. </p>
                        <div className="row mt-3">  <FeatureCard /></div>
                    </div>
                </div>

            </div>
            <div id='Prices' className="container mt-3">
                <div className="row default-padding">
                    <p className='fs-40 Gothic_3D mb-4'>PRICING</p>
                    <div className={`${classes.homeline} ms-2`}></div>
                    <p className=" fs-17 my-4">Pick the plan that works best for your needs. No contracts or long-term agreements. Use REI Litics as long as it&#39;s helpful to you and your goals.</p>
                    <PriceCard />
                </div>


            </div>
        </div>
    )
}

export default HomePage
