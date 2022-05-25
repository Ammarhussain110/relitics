import React, { useState, useEffect } from 'react'
import Dashnav from '../../Component/Dashnav';
import { getEventByFav } from '../../Component/Data/RentalGrowthData';
import Sidebar from '../../Component/SideNavbar';
import FavCard from '../../Component/FavCard';
import GetData from '../../Api/GetData';
import DeleteData from "../../Api/DeleteData"
import {message} from "antd"


function MyFavourite() {
    const [visible, setVisible] = useState(9);
    const [favourite, setFavourite] = useState([]);

    const loadMore = () => {
        setVisible(old => old + 4)
    }
    const loadLess = () => {
        setVisible(old => old - 4)
    }
    const getFavourites = () => {
        // alert('3')
        const response = GetData.getFavourite();
        response.then(value => {
            console.log(value)
            setFavourite(value.data.favoriteRegions);
            console.log(value.data.notess)
            // setLoading(false)

            //   setLoading(false);
        })
    }
    
 const DeleteFavrts = (id) => {
    const response = DeleteData.DeleteFavourite(id);
    response.then(value => {
// alert('1')
      console.log(value)
      if (value) {
        //   alert('2')
    message.success('Removed Successgully')
        getFavourites()

      }
      //   setLoading(false);
    })
      .catch(err => {
        console.log(err)
      })
  }
    useEffect(() => {
        getFavourites()
    }, [])
    // const event = getEventByFav();
    if (!favourite) {
        return <h1 className='text-center mt-5'>No Favourites Found</h1>
    }
    else if (favourite) {
        return (
            <>
                <div className="d-inline-flex w-100">
                    <Sidebar />

                    <div style={{ width: "inherit" }}>
                        <Dashnav />
                        <div className='container mx-auto mt-3 px-md-5 Table' >
                            <p className='fs-40 Gothic_3D'>My Favourites</p>
                            <div className='row my-4 g-4'>
                                {favourite.slice(0, visible).map((fav, index) => {
                                    return (
                                        < FavCard key={index}
                                        DeleteFavrt={DeleteFavrts}
                                            city={fav.regionName} 
                                            id={fav.regionID}/>
                                    )
                                })}
                            </div>
                            <div className="text-center my-3">
                                {favourite.length > 12 && (
                                    visible < favourite.length ? (
                                        <button className="bg_theme brdr text-white no_brdr" onClick={loadMore} style={{ cursor: "pointer" }}>
                                            load More
                                        </button>
                                    ) : (
                                        <button className="bg_theme brdr text-white no_brdr" onClick={loadLess} style={{ cursor: "pointer" }}>
                                            Show Less
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>)
    }
}
export default MyFavourite;
 // <div className="text-center my-4">
                                //     <button className="bg_theme brdr text-white no_brdr " onClick={loadMore} style={{ cursor: "pointer" }}>
                                //         load More
                                //     </button>
                                // </div>