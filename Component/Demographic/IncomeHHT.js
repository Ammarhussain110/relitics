import React from 'react'
import IncomeHHTGraph from './IncomeHHTGraph'
import IncomeHHTMMGraph from './IncomeHHTMMGraph'
import IncomeHHTTable from './IncomeHHTTable'

export default function IncomeHHT(props) {
    return (
        <div className='card my-4'>
            <div className='w-50'>
                <p className='fs-30 mb-0 Gothic_3D'>Income by household type</p>
            </div>
            <IncomeHHTGraph houseHolds={props.houseHolds} Married={props.Married} nonFamlies={props.nonFamlies} marriedFamilies={props.marriedFamilies} income={props.income}/>
            <div className='row container p-5 my-5'>
                <div className='col-sm-12 col-lg-5 my-auto'>
                    <div className='paginetion_none Income_table overflow-auto'>
                        <IncomeHHTTable table={props.table}/>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-7 my-auto'>
                    <div>
                        <IncomeHHTMMGraph mean={props.mean} name={props.name} median={props.median} />
                    </div>
                </div>
            </div>
        </div>
    )
}
