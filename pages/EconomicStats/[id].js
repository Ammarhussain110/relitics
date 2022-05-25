import React from 'react';
import { useRouter } from "next/router";
import Sidebar from '../../Component/SideNavbar';
import Dashnav from '../../Component/Dashnav';
import SecondNavbar from '../../Component/secondNavbar';
import Economic from '../../Component/Economic';


export default function EconomicStats() {
    
    const router = useRouter();

    const eventId = router.query.id
     const eventCategory = router.query.slug ? router.query.slug[0] : '';
    return <div>
        <div className="d-inline-flex w-100">
            <Sidebar />
            <div style={{ width: "inherit" }}>
                <Dashnav />
                <SecondNavbar />
                <div className='container mx-auto p-4'>
                    <Economic id={eventId} />
                </div>
            </div>
        </div>
    </div>;
}
