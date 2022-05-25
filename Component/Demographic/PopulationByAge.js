import React from 'react';
import PopulationByAgeGraph from './PopulationByAgeGraph';

export default function PopulationByAge(props) {
    return (
        <div className='card p-0 my-4'>
            <div className='w-50 p-5'>
                <p className='fs-30 mb-0 Gothic_3D'>Population by age</p>
            </div>
            {props.male.length > 0 && <PopulationByAgeGraph male={props.male} feMale={props.feMale} age={props.age} lowest={props.lowest} highest={props.highest} />}
            <div className='bluebtn brdr-btm m-1'>
                <div className='container row g-5 my-4'>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <p className='fs-30 Gothic_3D'>Median Age</p>
                        <div className='d-flex justify-content-between text-center'>
                            <div className=''>
                                <img src={'/people.svg'} />
                                <p className='fs-18'>Total</p>
                                <p className='fs-29'>{props.totalMedian}</p>
                            </div>
                            <div className=''>
                                <img src={'/people.svg'} />
                                <p className='fs-18'>Male</p>
                                <p className='fs-29'>{props.maleMedian}</p>
                            </div>
                            <div className=''>
                                <img src={'/people.svg'} />
                                <p className='fs-18'>Female</p>
                                <p className='fs-29'>{props.femaleMedian}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <p className='fs-30 Gothic_3D'>Age Dependency</p>
                        <div className='d-flex flex-column'>
                            <span className='d-inline-flex'>
                                <p className='fs-15 my-auto'>Age Dependency Ratio</p>
                                <p className='fs-30 my-auto ms-auto'>{props.AgeDepend}</p>
                            </span>
                            <span className='d-inline-flex'>
                                <p className='fs-15 my-auto'>Old Age Dependency Ratio</p>
                                <p className='fs-30 my-auto ms-auto'>{props.OldAgeDepend}</p>
                            </span>
                            <span className='d-inline-flex'>
                                <p className='fs-15 my-auto'>Child Dependency Ratio</p>
                                <p className='fs-30 my-auto ms-auto'>{props.ChildAgeDepend}</p>
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-4'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-6 col-lg-12'>
                                <p className='fs-30 Gothic_3D'>Sex Ratio</p>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='fs-17 Bold'>Female</p>
                                        <p className='fs-17'>447,554</p>
                                        <p className='fs-17'>51.77%</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='fs-17 Bold'>Male</p>
                                        <p className='fs-17'>447,554</p>
                                        <p className='fs-17'>51.77%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-12'>
                                <p className='fs-30 Gothic_3D'>Adults</p>
                                {/* <p className='fs-15'>There are 651,238 adults, (105,185 of whom are seniors) in Indianapolis.</p> */}
                                <p className='fs-15'>There are {props.tltAdlt} adults, (105,185 of whom are seniors).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
