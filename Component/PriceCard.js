import React, { useEffect, useState } from 'react'
import GetData from "../Api/GetData";
import Link from "next/link"



const PriceCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const response = GetData.AllPackeges();
        console.log(response)
        response.then(value => {
            console.log(value)
            if(value){
          setData((value?.data?.packages.reverse()));
          

        }
        })
      }, [])
    return (
        <>
        
            {data.map((each, index) => {
                return (
                        <div className="col-lg-4 col-md-6 my-5 mx-auto" key={Math.random()}>
                            <div className=" zoom d-flex text-center h-100 Card-color flex-column shadow p-3 brdr" >
                                <div className='px-3' style={{ flex: "1 1 auto" }}>
                                    <p className="fs-30-normal Gothic_3D  my-auto ">{each.name}</p>
                                    <div className="text-center w-75 price-border div-color edge px-4  mx-auto">
                                        <p className="my-auto Gothic_3D fs-40" >{each.price}</p>
                                        <p className="mt-2 fs-22 Gothic_3D mb-0" >{each.packageType}</p>
                                        <div className="price-line my-5 mx-auto"></div>
                                        {each.options.map(eachOption=>{
                                            return(
                                                <div className="d-flex mt-3" key={eachOption}>
                                                    <img src={"check-circle-fill.png"} className="img-fluid" style={{ objectFit: "contain" }} alt="..." />
                                                    <p className="my-auto ms-2 fs-15" >{eachOption}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <Link href="/SignUp" >
                                    <button type="button" className="btn btn_width btnYelow zoom buy-color mb-5 fs-15 mt-5">Register Now</button></Link>
                                </div>
                            </div>

                        </div>
                )
            })}

        </>
    )
}

export default PriceCard
