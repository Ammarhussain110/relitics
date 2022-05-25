import React from 'react';

export default function BooksComponent(props) {
  return <div className='bg-white col-lg-2 col-md-4 col-6 d-flex flex-column h-100'>
    <div style={{ flex: "1 1 auto" }}  className=' hover'>
      <div className='text-center'>
        <img src={props.Imgsrc} className='w-100 overflow-hidden'/>
      </div>
      <div>
        <p className='mb-0 fs-13'>{props.title}</p>
        <p className='mb-0 fs-13'>{props.authur}</p>
        <p className='mb-0 fs-15 Bold'>{props.cost}</p>
        <div className=''>
          <button className='btn btn-Yelow brdr w-100 my-1'>View on Amazon</button>
        </div>
      </div>
    </div>
  </div>;
}

