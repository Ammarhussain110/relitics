import React from 'react'
import HouseholdTypesGraph from './HouseholdTypesGraph'
import HouseholdTypesTable from './HouseholdTypesTable'

export default function HouseholdTypes(props) {
    console.log("vvcv", props)
    return (
        <div className='row card my-4'>
            <div className='row'>
                <div className='col-sm-12 col-md-5'>
                    <div className=''>
                        <p className='fs-30 mb-0 Gothic_3D'>Household types</p>
                        <span className='d-inline-flex'>
                            <p className='fs-30 me-3 my-auto'>51.1%</p>
                            <p className='fs-15 my-auto'>Rate of Home Ownership</p>
                        </span>
                        <div className='paginetion_none'>
                            <HouseholdTypesTable table={props.data} owner={props.owner} renter={props.renter}/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-7'>
                    <div>
                        <p className='fs-19 mb-0'>Renter vs Owner Occupied by Household Type</p>
                        <div>
                            <HouseholdTypesGraph owner={props.owner} type={props.type} renter={props.renter}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
