import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Navbar from '../../Component/Navbar';
import Foter from '../../Component/Footer';
import Categories from '../../Component/Categories';
import LatestPosts from '../../Component/LatestPosts';
import GetData from '../../Api/GetData';
import { Spin } from 'antd';




const BlogDetail = () => {
  const router = useRouter();
  const [event, setEvent] = useState('');
  const [loading, setLoading] = useState(true);

  const eventId = router.query.id
  const date = new Date()
  var options = { month: "short", year: "numeric", day: "numeric" };
  const fullDate = date.toLocaleDateString("en-US", options);

  useEffect(() => {
    setLoading(true)
    const response = GetData.BlogDetail(eventId);
    response.then(value => {
      setEvent(value?.data?.article);
      setLoading(false)
      console.log(value?.data?.article)
      //   setLoading(false);
    })
  }, [eventId]);


  if (loading) {
    return (
      <div className='text-center mt-5'>
        <Spin />
      </div>
    )
  }

  else if (!loading && !event) {
    return <h1 className='text-center mt-5'>No Blog Found</h1>
  }
  else if (eventId && event) {
    return (
      <div>
        <Navbar />
        <div className='container mt-2'>

          <div className='row'>
            <div className='col-md-8'>
              <div className='blog-shadow p-5'>
                {/* <a className='text-link pointer-cursor fs-13 Bold'>{event.category}</a> */}
                <h2 className='mb-0 fs-40'>{event.title}</h2>
                <div className='blog-line my-3'></div>
                <p className='fs-13'>Posted on {fullDate} by Admin</p>
                <div className='text-center mb-3'>
                  <img className='m-2 hover' src={"/facebook-rect.svg"} />
                  <img className='m-2 hover' src={"/linkedin-square.svg"} />
                  <img className='m-2 hover' src={"/twitter-square.svg"} />
                  <img className='m-2 hover' src={"/pinterest-square.svg"} />
                  <img className='m-2 hover' src={"/gmail.svg"} />
                  <img className='m-2 hover' src={"/copylink_.png"} />
                </div>
                <img src={event.image} className='w-100 mt-2' />
                <p className='mt-3 fs-17'>{event.detail}</p>
                {/* <div className='text-center'>
                  <img className='m-2 hover' src={"/facebook_.png"} />
                  <img className='m-2 hover' src={"/linkedin_.png"} />
                  <img className='m-2 hover' src={"/twitter-square.png"} />
                  <img className='m-2 hover' src={"/pinterest-square.png"} />
                  <img className='m-2 hover' src={"/gmail.png"} />
                  <img className='m-2 hover' src={"/copylink_.png"} />
                </div> */}
                  <div className='text-center mb-3'>
                  <img className='m-2 hover' src={"/facebook-rect.svg"} />
                  <img className='m-2 hover' src={"/linkedin-square.svg"} />
                  <img className='m-2 hover' src={"/twitter-square.svg"} />
                  <img className='m-2 hover' src={"/pinterest-square.svg"} />
                  <img className='m-2 hover' src={"/gmail.svg"} />
                  <img className='m-2 hover' src={"/copylink_.png"} />
                </div>
              </div>
              
            </div>
            <div className='col-md-4 mt-5 ps-5'>
              <div className='blog-left px-3'>
                <p className='fs-30 Gothic_3D'>ABOUT</p>
                <div className='blog-line my-3'></div>
                <p className='mt-2 fs-16'>We keep you update with the latest news and information in  the Apple world. Everything you are looking for related to Mac, iMac and iPhone.</p>
                <p className='fs-30 Gothic_3D'>LATEST POSTS</p>
                <div className='blog-line my-3'></div>
                <div className="my-3">
                  <LatestPosts />
                </div>
                <div className="mt-3">
                  <p className='fs-30 Gothic_3D'>Catagories</p>
                  <div className='blog-line my-3'></div>
                  <Categories />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Foter />
      </div>
    )
  }
}

export default BlogDetail