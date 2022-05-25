import React from 'react';
import PopulationGraph from './PopulationGraph';

export default function Population(props) {
    return (
        <div className='card my-4'>
            <div className='w-50'>
                <p className='fs-30 mb-0 Gothic_3D'>Population</p>
                {/* <p className='fs-30 mb-0 Gothic_3D'>887,232</p> */}
                <p className='fs-30 mb-0 Gothic_3D'>{props?.population[9]}</p>
            </div>
            <PopulationGraph population={props.population} populationDate={props.populationDate}/>
            <div className='row container gx-5 my-3'>
                <div className='col-sm-12 col-md-6 bg_light btn_tags d-inline-flex py-4'>
                    <span className='fs-16 Bold'>State</span>
                    <span className='ms-auto fs-16'>Indiana</span>
                </div>
                <div className='col-sm-12 col-md-6 bg_light btn_tags d-inline-flex py-4'>
                    <span className='fs-16 Bold'>Growth Since 2010</span>
                    <span className='ms-auto fs-16'>8.14%</span>
                </div>
                <div className='col-sm-12 col-md-6 btn_tags d-inline-flex py-4'>
                    <span className='fs-16 Bold'>County</span>
                    <span className='ms-auto w-50 fs-16'>
                        <p className='text-end'>Hamilton County</p>
                        <p className='text-end'>Marion County</p>
                    </span>
                </div>
                <div className='col-sm-12 col-md-6 btn_tags d-inline-flex py-4'>
                    <span className='fs-16 Bold'>Rank in State</span>
                    <span className='ms-auto fs-16'>1st</span>
                </div>
                <div className='col-sm-12 col-md-6 bg_light btn_tags d-inline-flex py-4'>
                    <span className='fs-16 Bold'>Land Area (mi²)</span>
                    <span className='ms-auto fs-16'>361.6 sq mi</span>
                </div>
                <div className='col-sm-12 col-md-6 bg_light btn_tags d-inline-flex py-4'>
                    <span className='fs-16 Bold'>Rank in Country</span>
                    <span className='ms-auto fs-16'>16th</span>
                </div>
                <div className='col-sm-12 col-md-6 btn_tags d-inline-flex py-4'>
                    <span className='fs-16 Bold'>Density (mi²)</span>
                    <span className='ms-auto fs-16'>2,453.80/sq mi</span>
                </div>
                <div className='col-sm-12 col-md-6 btn_tags d-inline-flex py-4'>
                    <span className='fs-16 Bold'>Metro Population</span>
                    <span className='ms-auto fs-16'>2,118,880</span>
                </div>
                <div className='col-sm-12 col-md-6 bg_light btn_tags d-inline-flex py-4'>
                    <span className='fs-16 Bold'>2020 Growth Rate</span>
                    <span className='ms-auto fs-16'>0.62%</span>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}
