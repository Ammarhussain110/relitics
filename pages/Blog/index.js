import React, { useEffect, useState } from 'react'
import GetData from '../../Api/GetData'
import BlogCompnnent from '../../Component/BlogComponent'
import Pagination from '../../Component/BlogPagination'
import blogData from '../../Component/Data/BlogData'
import Navbar from '../../Component/Navbar'
import HeadImage from '../../styles/UI/HeadImage';
import Foter from '../../Component/Footer'
import { Spin } from 'antd';


const Blog = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        const response = GetData.BlogComponent();
        console.log(response)
        response.then(value => {
            if(value){
                setData(value.data.articles);
                console.log(value.data.articles)
                setLoading(false)

            }
     
        //   setLoading(false);
        })
      }, [])
    return (
        <>
            <Navbar />
            <HeadImage header='ARTICLES' />
            <div className='container'>
            {loading ? (
              <div className='text-center mt-5'><div className="spinner-border" role="status">
              
            </div></div>
              ) : (
                <>
                <div className='row my-3 gx-4 gy-3'>
                    <Pagination id={data._id} data={data} className='col-sm-4' perpage='9' />
                </div>
                </>
                )}
            </div>
            <Foter />

        </>
    )
}

export default Blog