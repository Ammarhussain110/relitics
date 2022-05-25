import React from 'react'
import PopulationbyRaceGraph from './PopulationbyRaceGraph'
import PopulationbyRaceTable from './PopulationbyRaceTable'

export default function PopulationbyRace(props) {
    return (
        <div className='card'>
            <div className='row container gx-3 p-2'>
                <div className='col-sm-12 col-lg-7 my-auto'>
                    <div className='paginetion_none Income_table overflow-auto'>
                        <div className='d-flex justify-content-between px-5 text-light'>
                            <p className='fs-30 Gothic_3D mb-0'>Population by race</p>
                            <p className='fs-30 Gothic_3D mb-0'>Hispanic</p>
                            <p className='fs-30 Gothic_3D mb-0'>Non-Hispanic</p>
                        </div>
                        <PopulationbyRaceTable table={props.table} />
                    </div>
                </div>
                <div className='col-sm-12 col-lg-5 my-auto'>
                    <div className='bg-white brdr_card brdr mx-1'>
                        {props.race.length>0&& props.percent.length>0?<PopulationbyRaceGraph race={props.race} percent={props.percent} />:<></>}
                    </div>
                </div>
            </div>
        </div>
    )
}
