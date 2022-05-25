import React, { useEffect, useState } from 'react'

import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import Price from './Price'
import Navbar from "../Component/Navbar"
import PersonalInfo from './PersonalInfo';
import Acount from '../Api/Acount'
import FreeModal from './FreeModal';
import Link from "next/link"

import CustomModal from './Modal';
import GetData from "../Api/GetData";
import { Spin } from 'antd';
import { each } from 'jquery';


const PersonalDetails = ({ handleStep, prevStep, nextStep, handleChange, handleDirectChange, values, props }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [errorModel, setErrorModel] = useState(false)
  const [succesModel, setSuccesModel] = useState(false)


  const Continue = (id, price) => {
    // e.preventDefault();
    handleDirectChange('price', price)
    handleDirectChange('pkgId', id)
    // props.SelectPrice(data)
    nextStep();
  }

  const handleErrors = (error) => {
    setError(error)
    setErrorModel(true)
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  useEffect(() => {
    const response = GetData.AllPackeges();
    console.log(response)
    response.then(value => {
      if (value) {
        setData(value.data.packages);

      }
      setLoading(false);
    })
  }, [])

  return (

    <div>
      <Navbar />


      <div className="container-fluid theme_bg p-5">
        <div className="py-5">
          <div className='mb-5'>
            <PersonalInfo
              values={values.step}
              handleStep={handleStep}
            />
          </div>
          <div className="container">
            <div className="col-sm-11 mt-3 mx-auto">
              <div className="row bg-pric brdr_div">
                <div className="uper-color p-4 mb-4">
                  <p className="text-white fs-40 Gothic_3D mb-0 p-4 ms-5">Select Package</p>

                </div>
                <div className="row bg-pric p-3">
                  {loading ? (<Spin />) : (
                    <>
                      {data.map(x => {
                        return (
                          <div className='col-sm-4 mx-auto'>
                            <Price
                              Continue={Continue}
                              Price={x.name}
                              Packages={x.packageType}
                              Amount={x.price}
                              Tags={x.options}
                              id={x._id} />
                          </div>
                        )
                      })}
                    </>
                  )}

                </div>
              </div>



            </div>
          </div>

          <CustomModal
            title="Succefull"
            isModalVisible={succesModel}
            handleOk={nextStep}
            closable={false}
          >
            <div className='p-5'>
              <p className='fs-22 text-white text-center p-5'>{success}</p>
              <div className='text-center'>
                <Link href="/Dashboard">
                  <button className='btn login-button fs-14 px-5 mx-auto'>View your dashboard</button></Link>
              </div>
            </div>
          </CustomModal>
          <CustomModal
            title="Error"
            isModalVisible={errorModel}
            handleOk={prevStep}
            handleClose={()=>setErrorModel(false)}
            closable={true}
          >
            {error}
          </CustomModal>
        </div>
      </div>
    </div>

  )
}

export default PersonalDetails