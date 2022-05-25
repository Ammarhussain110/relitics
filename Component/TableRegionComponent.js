import React, { useState, useEffect } from 'react'
import Link from 'next/link'


const TableRegionComponent = (props) => {

    const [isFavourite, setIsFavourite] = useState(false)


    useEffect(() => {
        if (props.favourites.some(el => el.regionID === props.record._id)) {
            setIsFavourite(true)
        }
    }, [props.favourites])

    const DeleteFavrt = (id) => {
        setIsFavourite(false)
        props.DeleteFavrt(id)
    }

    const AddFavourite = (id) => {
        setIsFavourite(true)
        props.AddFavourite(id)
    }
    return (
        <>
            <div className='d-flex my-auto hover w-100 p-1 hover_Bold pointer-cursor'>
                <Link href={`/MarketStats/${props.record.regionID}`} >
                    <p className='my-auto me-auto'>
                        {props.record.region}
                    </p>
                </Link>
                {isFavourite ?
                    <img src='./filledHeart.svg' onClick={() => DeleteFavrt(props.record._id)} className='ms-auto my-auto' />
                    : <img src='./unfilledHeart.svg' onClick={() => AddFavourite(props.record)} className='ms-auto' />
                }
            </div>
        </>
    );
}

export default TableRegionComponent;
