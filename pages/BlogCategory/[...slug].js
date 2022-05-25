import React from 'react'
import { useRouter } from "next/router";
import Navbar from '../../Component/Navbar';
import { getEventByCategory } from '../../Component/Data/BlogData'
import Pagination from '../../Component/BlogPagination';
import LatestPosts from '../../Component/LatestPosts';
import Foter from '../../Component/Footer';
import Categories from '../../Component/Categories';

function CategorisedBlogDetail() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    
    const router = useRouter();

    const eventCategory = router.query.slug ? router.query.slug[0] : '';
    const event = getEventByCategory(eventCategory);
    if (eventCategory && !event) {
        return <h1 className='text-center mt-5'>No Blog Found</h1>
    }
    else if (eventCategory && event) {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <div className='row gx-5'>
                        <div className='col-sm-8'>
                            <div className='row mt-5'>
                                <p className='fs-30 Gothic_3D text-center col-12'>CATEGORY ARCHIVES: {eventCategory} </p>
                                <Pagination data={event} className='col-sm-6' perpage='6' />
                            </div>

                        </div>


                        <div className='col-md-4 mt-5'>
                            <div className=' px-3'>
                                <p className='fs-30 Gothic_3D'>ABOUT</p>
                                <div className='blog-line my-3'></div>
                                <p className='mt-2 fs-16'>We keep you update with the latest news and information in  the Apple world. Everything you are looking for related to Mac, iMac and iPhone.</p>
                                <p className='fs-30 Gothic_3D'>LATEST POSTS</p>
                                <div className='blog-line my-3'></div>
                                <div className="mt-3">
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
    return (
        <div>
            <p>Loading</p>
        </div>
    )
}


export default CategorisedBlogDetail
