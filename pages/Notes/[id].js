import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { useRouter } from "next/router";
import Dashnav from '../../Component/Dashnav';
import NotesData from '../../Component/Data/NotesData';
import NotesComponent from '../../Component/NotesComponent';
import SecondNavbar from '../../Component/secondNavbar';
import Sidebar from '../../Component/SideNavbar';
import GetData from '../../Api/GetData';

export default function Notes() {
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
                    <div className='container mx-auto p-5'>
                        <p className='fs-40 Gothic_3D my-3'>My Notes FOR City, state</p>
                        <div className='row gy-4'>
                            <div className='col-lg-3 col-md-4 col-6'>
                                <Link href="/EditNotes">
                                    <div className='bg-notes brdr d-flex flex-column h-100 pointer-cursor'>
                                        <div className='text-center my-auto'>
                                            <div className='my-5 py-5'>
                                                <img src='/addNotes_Icon.svg' />
                                                <p className='fs-18 Bold mt-3'>Add a Note</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <NotesComponent

                            />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
