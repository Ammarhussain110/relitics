import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Sidebar from '../../Component/SideNavbar';
import Dashnav from '../../Component/Dashnav';
import Link from "next/link"
import GetData from '../../Api/GetData';
import { Spin } from 'antd';

import UpdateData from '../../Api/UpdateData';
import { getEventById } from '../../Component/Data/NotesData';

export default function EditNotes() {
    const router = useRouter();
    const eventId = router.query.id
    const event = getEventById(eventId)
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [data, setData] = useState('')
    const [successMessage, setSuccessMessage] = useState('')


console.log(eventId)


    const getNote = () => {
        const response = GetData.showNotes(eventId);
        response.then(value => {

            console.log(value)
              setData(value.data.noteDetail);
              setTitle(value.data.noteDetail.title)
              setDetails(value.data.noteDetail.detail)

            //   console.log(value.data.notess)
            //   setLoading(false);
        })
    }
    useEffect(() => {
        if (eventId) {
        getNote()
        }
    }, [eventId])
    const editNote = (e) => {
        e.preventDefault()
        // nextStep();
        const res = UpdateData.EditNotes(eventId, title, details)
        res.then(value => {
            console.log('value', value.data)
            if (value.data.success) {
                setSuccessMessage(value.data.message)

            }

        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="d-inline-flex w-100">
                <Sidebar />
                <div style={{ width: "inherit" }}>
                    <Dashnav />
                    <div className='container mx-auto p-5'>
                        <p className='fs-40 Gothic_3D my-3'>My Notes</p>
                        {
                            eventId && !data ?
                            <div className="spinner-border text-center mt-5" role="status">
                          </div>
                                : <>
                                    <p className='fs-30 Gothic_3D my-3'>City State</p>
                                    <div className='div_grey p-5 notes_form'>
                                        <p className='fs-22 Bold greyBlack my-3'>Notes</p>
                                        <form className='row form' onSubmit={editNote} >
                                            <div className="form-group  my-2">
                                                <input
                                                    type="text"
                                                    required
                                                    autoComplete={false}
                                                    className='form-control'
                                                    value={title}
                                                    id="title"
                                                    name="title"
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    placeholder="Subject line/Title"
                                                />
                                            </div>
                                            <div className="form-group my-2">
                                                <textarea
                                                    type="text"
                                                    required
                                                    className='form-control'
                                                    rows={13}
                                                    name="details"
                                                    value={details}
                                                    id="details"
                                                    onChange={(e) => setDetails(e.target.value)}
                                                    placeholder="Add notes details"
                                                />
                                            </div>
                                            <div className='mx-auto text-center'>
                                                <p className='text-success fs-19'>{successMessage}</p>
                                                <button type='submit' className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Save</button>
                                                <button onClick={() => router.back()} className='btnYelow fs-16 brdr no_brdr py-3 px-5 mx-2'>Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
