import { PayPalButton } from "react-paypal-button-v2";
import React, { useState, useEffect } from "react";
import GetData from "../Api/GetData";
import Link from "next/link"
import Acount from "../Api/Acount";
import CustomModal from "./Modal";
import axios from "axios";
import PersonalInfo from "./PersonalInfo";
import Navbar from "./Navbar";
import OtpModal from "./Login/Otp";

const Payment = ({ handleStep, prevStep, nextStep, handleChange, values }) => {
    const [clientId, setClientId] = useState('')
    const [succesModel, setSuccesModel] = useState(false)
    const [success, setSuccess] = useState('')
    const [errorModal, setErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [otpModal, setotpModal] = useState(false)
    const [reset, setReset] = useState("")
    const [OtpError, setOtpError] = useState("")





    useEffect(() => {
        const response = GetData.GetMerchantId();
        response.then(value => {
            console.log(value)
            setClientId(value.data.clientID);
        })
    }, [])

    useEffect(() => {
        if (values.price == 0) {
            SignUp()
        }
    }, [values.price]);


    const SignUp = () => {
        // alert('1')
        // const res = Acount.Registeration(values, handleErrors)
        // res

        console.log({ values })
        let formData = new FormData();

        formData.append("firstName", values.firstName)
        formData.append("lastName", values.familyName)
        formData.append("username", values.username)
        formData.append("country", values.country)
        formData.append("state", values.state)
        formData.append("DOB", values.DOB)
        formData.append("phone", values.phone)
        formData.append("image", values.sendImage)
        formData.append("packageID", values.pkgId)
        formData.append("email", values.email)
        formData.append("password", values.password)

        axios
            .post("/users", formData)
            .then(value => {
                console.log(value)
                setSuccess(value.data.message)
                // localStorage.setItem('user', JSON.stringify(value.data.user))
                // localStorage.setItem('token', value.data.token)

                console.log('Sign Up res', value)
                setotpModal(true)

            })
            .catch(error => {
                console.log('error', error.response)
                setErrorModal(true)
                setErrorMessage(error.response.data.message)


            })
    }

    
    const verifyOtp = (otp) => {
        setReset('')
        const res = Acount.verifyOtp(values.email, otp, setOtpError)
        res.then(value => {
            console.log('value', value.data)
            if (value.data.success) {
                setSuccesModel(true)
            }

        })
            .catch(err => {
                console.log(err)
            })

    }
    const ResendOtp = () => {
        // nextStep();
        // setEmail(email)
        const res = Acount.EnterEmail(values.email)
        res.then(value => {
            console.log('value', value.data)
            setReset(value.data.message)
    
        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
        <Navbar />

            {clientId ?
                <div className="App">
                    <div className="container-fluid theme_bg p-5">
                        <div className="py-5">
                            <div className='mb-5'>
                                <PersonalInfo
                            values={values.step}
                        handleStep={handleStep}
                                />
                                
                            </div>
                            <div className="container">
                                <div className="col-sm-8 mt-3 mx-auto">
                                    <div className="row bg-pric brdr_div">
                                        <div className="uper-color p-4 mb-4">
                                            <p className="text-white fs-40 Gothic_3D mb-0 p-4 ms-5">Payment</p>

                                        </div>
                                        <div className="row bg-pric p-3 "></div>

                                            <div className="text-center">

                                        <PayPalButton
                                            shippingPreference="NO_SHIPPING"
                                            amount={values.price}
                                            className="mt-5"
                                            options={{
                                                clientId: clientId
                                            }}
                                            onSuccess={(details, data) => {
                                                console.log("Details---------->", details);
                                                console.log("Data------------->", data);
                                                SignUp()
                                            }
                                            }


                                        />
                                        </div>
                                    </div>
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
                            <p className='fs-22 text-white text-center p-5'>Your Account Has Been Created Succefully</p>
                            <div className='text-center'>
                                <Link href="/Login">
                                    <button className='btn login-button fs-14 px-5 mx-auto'>Login Now</button></Link>
                            </div>
                        </div>
                    </CustomModal>
                    <CustomModal
                        title="Succefull"
                        isModalVisible={errorModal}
                        setErrorModal={setErrorModal}
                        handleOk={nextStep}
                        closable={false}
                    >
                        <p className="text-white fs-22">  {errorMessage} </p>
                    </CustomModal>
                    {console.log('OTPP',OtpError)}
                    <OtpModal 
                    isModalVisible={otpModal}
                    verifyOtp={verifyOtp}
                    OtpError={OtpError}
                    closable={false}
                    Resend={ResendOtp}
                    otp={reset}
                    title="Verify your Email"
                    />
                </div> : <p>Loading....</p>}

        </>
    );

};

export default Payment;


