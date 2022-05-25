import React from 'react'
import EduAttainmentGraph from './EduAttainmentGraph'
import EduAttainmentPieGraph from './EduAttainmentPieGraph'
import EduAttainmentTable from './EduAttainmentTable'

export default function EduAttainment(props) {
    {console.log(props)}
    return (
        <div className='card my-4'>
            <p className='fs-30 mb-0 Gothic_3D'>Educational attainment by sex (over 25)</p>
            <div>
                <EduAttainmentGraph male={props.male} feMale={props.feMale} grade={props.grade}/>
            </div>
            <div className='row container gx-3 my-5'>
                <div className='col-sm-12 col-lg-7 my-auto'>
                    <div className='paginetion_none Income_table overflow-auto'>
                        <EduAttainmentTable grade={props.grade} eduTableData={props.eduTableData} percentage={props.percentage}/>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-5 my-auto'>
                    {console.log('percentage>>>>', props.percentage)}
                    {props.grade.length>0&& props.percentage.length>0?<EduAttainmentPieGraph percentage={props.percentage} grade={props.grade} />:<></>}
                </div>
            </div>
        </div>
    )
}
