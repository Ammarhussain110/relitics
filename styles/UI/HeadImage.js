import React from 'react';
import classes from './HeadImage.module.css'

const HeadImage = (props) => {
    return (
        <div className={`${classes.head}`}>{props.children}
            <div className='container'>
                <div className={`Gothic_3D fs-70 py-auto ${classes.text}`}>{props.header}</div>
            </div>
        </div>
    )
}
export default HeadImage