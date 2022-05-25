import React from 'react';
import Sidebar from '../../Component/SideNavbar';import { useRouter } from "next/router";

import Dashnav from '../../Component/Dashnav';
import SecondNavbar from '../../Component/secondNavbar';
import Demographic from '../../Component/Demographic';


export default function Demographi() {
    
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
                    <Demographic />
                </div>
            </div>
        </div>
    </div>;
}
