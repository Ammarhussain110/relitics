import React from 'react';
import UnemploymentRateGraph from './UnemploymentRateGraph';
import EmploymentSectorsGraph from './EmploymentSectorsGraph';
import GraphData from "../../Api/Grapgh";
import { useEffect } from 'react';
import { useRouter } from "next/router";


export default function EconomicGraphs(props) {

    const router = useRouter();

    const eventId = router.query.id
    useEffect(() => {
        // unEmployment()
    }, [props.region])



    //    const unEmployment = () => {
    //         const response = GraphData.unEmployment(props.region);
    //         response.then(value => {
    //             if (value) {
    //                 let data1 = []
    //                 let data2 = []
    //                 for (const key in value.data.Data) {
    //                     data1.push(key)
    //                     data2.push(value.data.Data[key]);
    //                 }

    //                 // setInventryDate(data1)
    //                 // setInventry(data2)

    //             }
    //         })
    //     }
    return (
        <>
            <div className='card p-3 bg_light'>
                <div className='card my-4'>
                    <div className='w-50'>
                        <p className='fs-30 mb-0 Gothic_3D'>Unemployment rate</p>
                    </div>
                    <div>
                        <UnemploymentRateGraph employmentDate={props.employmentDate} unEmploymentData={props.unEmploymentData} />
                    </div>
                </div>
            </div>

            <div className='card p-3 bg_light'>
                <div className='d-block col-6'>
                    <label className='bluetxt fs-13'>Select State</label>
                    <select className="form-control form-select form-control-sm" onChange={props.onChange} value={props.region}>
                        {props.regionName?.states?.map((state) => {
                            return (
                                <option value={state}>{state}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='card my-4'>
                    <div className='d-lg-inline-flex w-100'>
                        <div className='w-50'>
                            <p className='fs-30 mb-0 Gothic_3D'>Employment sectors at state level</p>
                        </div>

                    </div>
                    <div>
                        <EmploymentSectorsGraph sector={props.sector} sectorDate={props.sectorDate} />
                    </div>
                </div></div>
        </>
    )
}
