import React from 'react';
import './AboutUs.module.css';
import Navbar from '../../Component/Navbar'
import HeadImage from '../../styles/UI/HeadImage';
import Foter from '../../Component/Footer'

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <HeadImage header='ABOUT US' />
            <div className='container mb-5'>
            <div className="line_height  py-5 px-2 mx-auto">
                    <p className='fs-16'>
                        At REI Litics, we&#39;re a team of real estate professionals who developed this platform to help real estate investors with market research.  Armed with data and valuable insights, we&#39;ve brought everything together in one place, so you don&#39;t have to spend time jumping back and forth from platform to platform and website to website.
                    </p>
                    <p className='Gothic_3D fs-30'>
                        We wanted a tool that would give investors a bird&#39;s eye view of the top metro areas in the US.
                    </p>
                    <p className='fs-16'>
                        “Location, location, location” is a common mantra in real estate. And it&#39;s good advice—except for one thing: Most people have no idea how to pick the right location for their investment goals, or how to find good investment opportunities in a different state from where they live. We&#39;ve consolidated all the data to help you with the process.
                    </p>
                    <p className='Gothic_3D fs-30'>
                        We believe you can never have enough data, but it must be understandable.
                    </p>
                    <p className='fs-16'>
                        We believe that effective real estate investing requires multiple sources of useful data. Our excitement comes from constantly finding great sources of data and bringing them together in a digestible meaningful way to help you on your real estate investment research journey, all on one platform.
                    </p>
                    <p className='Gothic_3D fs-30'>
                        We&#39;RE EXCITED to share what we&#39;ve found.
                    </p>
                    <p className='fs-16'>
                        We have an abundance mindset. There are more than enough investment deals to go around and we believe what goes around, comes around – so that&#39;s why we&#39;re not afraid to share what we&#39;ve built.  We want everyone young and old, experienced and new to real estate, to feel empowered when it comes to researching locations to invest.
                    </p>
                    <p className='Gothic_3D fs-30'>
                        REI Litics is built on feedback.
                    </p>
                    <p className='fs-16'>
                        The REI Litics platform was developed for you, and we&#39;re constantly working to make it the best real estate investment research platform out there.  We&#39;re always open to feedback from our users and will do our best to add the latest and greatest features and tools to our products. This is just the beginning.
                    </p>
                    <p className='fs-16'>Welcome to REI Litics!</p>
                </div>
            </div>
            <Foter />
        </>
    )
}
export default AboutUs;