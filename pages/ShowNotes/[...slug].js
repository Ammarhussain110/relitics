import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Sidebar from '../../Component/SideNavbar';
import Dashnav from '../../Component/Dashnav';
import Link from "next/link"
import GetData from '../../Api/GetData';
import { getEventById } from '../../Component/Data/NotesData';
import { Spin } from 'antd';





export default function EditNotes() {
    const [data, setData] = useState('')


    const router = useRouter();
    const eventId = router.query.slug
    const getNote = () => {
        const response = GetData.showNotes(eventId[0]);
        response.then(value => {

            console.log(value)
            setData(value.data.noteDetail);
            //   console.log(value.data.notess)
            //   setLoading(false);
        })
    }
    useEffect(() => {
        if (eventId) {
            getNote()
        }
    }, [eventId])
    return (
        eventId && !data ?

            <div className="spinner-border mx-auto" role="status">
            </div>
            : <>
                <div>
                    <div className="d-inline-flex w-100">
                        <Sidebar />
                        <div style={{ width: "inherit" }}>
                            <Dashnav />
                            <div className='container mx-auto p-5'>
                                <p className='fs-40 Gothic_3D my-3'>My Notes</p>
                                <p className='fs-30 Gothic_3D my-3'>{data?.city}</p>
                                <div className='p-5 card'>
                                    <p className='fs-22 Bold greyBlack my-3'>Notes</p>
                                    <p className='fs-17 my-4'>{data?.title}</p>
                                    <p className='fs-17'>{data?.detail}</p>
                                    <div className='mx-auto text-center'>
                                        <button onClick={() => router.back()} className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Back</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}
