import React from 'react';

export default function PodcastsComponent(props) {

  return <div className='col-lg-2 col-md-4 col-6 d-flex flex-column h-100'>
    <div style={{ flex: "1 1 auto" }}  className=' hover' >
      <div className='text-center overflow-hidden'>
        <img src={props.Imgsrc} className='w-100 overflow-hidden' />
      </div>
      <div className='px-2'>
        <p className='mb-0 fs-14 Bold'>{props.title}</p>
        <p className='mb-0 txt-yellow'>{props.showBy}</p>
      </div>
    </div>
  </div>;
}

