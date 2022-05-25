import React from 'react';
import Link from 'next/link'


function FavCard(props) {
    return (<>
        <div className='col-lg-3 col-md-4 col-6'>
            <div className='bg-dash brdr p-4 hover'>
                <div className='d-flex'>
                    <img src='./filledHeart.svg' onClick={()=>props.DeleteFavrt(props.id)} className='ms-auto icon-w' />
                </div>
                <Link href={`/MarketStats/${props.id}`} >

                <div className='text-center my-3'>
                    <img src='./bx-stats.svg' className='my-2' />
                    <p className='fs-18'>{props.city}</p>
                </div>
                </Link>
            </div>
        </div>
    </>);
}

export default FavCard;
