import React from 'react';
import { useRouter } from "next/router";
import Dashnav from '../../Component/Dashnav';
import SecondNavbar from '../../Component/secondNavbar';
import Sidebar from '../../Component/SideNavbar';
import Market from '../../Component/Market'
import withAuth from '../../Component/Auth'

const MarketStats = () => {
    const router = useRouter();
    

    const eventId = router.query.id
     const eventCategory = router.query.slug ? router.query.slug[0] : '';
        return (
            
            <div>
                <div className="d-inline-flex w-100">
                    <Sidebar />
                    <div style={{ width: "inherit" }}>
                        <Dashnav />
                        <SecondNavbar />
                        <div className='container mx-auto p-4'>
                            {eventId?<Market id={eventId}/>:<p>Loading...</p>}
                            
                        </div>
                    </div>
                </div>
            </div >
        )
    }
export default withAuth(MarketStats)
