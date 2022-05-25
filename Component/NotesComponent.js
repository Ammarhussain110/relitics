import Link from "next/link"
import GetData from '../Api/GetData';
import React, { useEffect, useState } from 'react'
import DeleteData from '../Api/DeleteData'
import { Spin } from 'antd';




export default function NotesComponent() {
    const [visible, setVisible] = useState(3);
    const [loading, setLoading] = useState(true);

    const [notes, setNotes] = useState([]);
    const loadMore = () => {
        setVisible(old => old + 4)
    }
    const loadLess = () => {
        setVisible(old => old - 4)
    }

    const getNotes = () => {
        const response = GetData.AllNotes();
        response.then(value => {
            console.log(value)
            setNotes(value.data.notes);
            setLoading(false)

            //   setLoading(false);
        })
    }
    useEffect(() => {
        getNotes()
    }, [])
    const DeleteNote = (id) => {
        const response = DeleteData.DeleteNote(id);
        response.then(value => {

            console.log(value)
            getNotes()
            //   setLoading(false);
        })
    }
    return (
        <>
            {loading ? (
                <div className="spinner-border mx-auto" role="status">
              </div>
            ) : (
                <>
                    {
                        notes.slice(0, visible).map((x) => {
                            return (
                                <div className='col-lg-3 col-md-4 col-6'>
                                    <div className='bg-dash brdr d-flex flex-column h-100 overflow-hidden'>
                                        <div className='d-inline-flex w-100 mt-2 p-3' style={{ flex: "1 1 auto" }}>
                                            <p className='fs-18 Bold greyBlack w-75'>{x.title}</p>
                                            <img onClick={() => DeleteNote(x._id)} src='/deleteIcon.svg' className='mb-auto ms-auto' />
                                        </div>
                                        <p className='fs-16 p-3'>{
                                            x.detail?.length > 25
                                                ? x.detail.substring(0, 60) + '.....'
                                                : x.detail
                                        }</p>
                                        <div className='d-inline-flex bg-lightBlue bottom_radius w-100'>
                                            <button className='btn btn-lg py-3 w-50'>
                                                <Link href={`/ShowNotes/${x._id}`} className='pointer-cursor'><img src='/eyeIcon.svg' /></Link>
                                            </button>
                                            <button className='btn btn-lg py-3 w-50'>
                                                <Link href={`/EditNotes/${x._id}`} className='pointer-cursor'><img src='/edit_Icon.svg' /></Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>)
                        }


                        )
                    }
                    < div className="text-center mt-5">

                        {notes.length > 1 && (
                            visible < notes.length ? (
                                <button className="bg_theme brdr text-white no_brdr" onClick={loadMore} style={{ cursor: "pointer" }}>
                                    load More
                                </button>
                            ) : (
                                <button className="bg_theme brdr text-white no_brdr" onClick={loadLess} style={{ cursor: "pointer" }}>
                                    Show Less
                                </button>
                            )
                        )}

                    </div>
                </>
            )
            }
        </>
    )
}
