import React from 'react';
import { useState } from "react";
import Router from 'next/router'


import classes from './ContactUs.module.css'
import EmailForm from '../../Component/ContactUS/EmailForm';
import Navbar from '../../Component/Navbar';
import Foter from '../../Component/Footer';
import MessageForm from '../../Component/ContactUS/MessageForm';
import HeadImage from '../../styles/UI/HeadImage';
import Acount from '../../Api/Acount';
const ContactUs = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    


    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        

    })
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })
    }



    const SendMessage = e => {
        e.preventDefault();
        // nextStep();
        const res = Acount.Contact(user, setError)
        res.then(value => {
            console.log(value)
            if(value.data.success){
            setSuccess("Your Message has been sent successfully!")
            Router.push('/ContactSuc')
            }
           

        })
            .catch(error => {
                console.log(error)
                
                

            })
    }
    return (
        <>
            <Navbar />
            <HeadImage header='REACH OUT TO US' />
            <div className="pb-5">
                <div className='container mb-5'>
                    <p className='fs-40 Gothic_3D Bold mt-5 mb-0'>We&#39;d love to hear from you</p>
                    <p className='fs-18 mb-0'>Use the form below to get in touch with us.</p>
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-12 my-5 px-5 py-3 card border_1">
                            <MessageForm
                                // handleChange={handleChange}
                                user={user}
                                handleChange={getUserData}
                                messagee={SendMessage}
                                success={success}
                            />
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 my-5 px-5">
                            <EmailForm />
                        </div>
                    </div>
                </div>
                {success}
            </div>
            <Foter />
        </>
    )
}
export default ContactUs;