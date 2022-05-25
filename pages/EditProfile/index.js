import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/SideNavbar';
import GetData from '../../Api/GetData';
import axios from "axios";




export default function EditProfile() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [image, setImage] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [sendImage, setSendImage] = useState('');
    const [userId, setUserId] = useState();
    const [sucessMessage, setSuccessMessage] = useState("");

    const handleChange = input => e => {
        if (input == "profilePic") {
            if (e.target.files[0]) {
                setProfileImage(URL.createObjectURL(e?.target?.files[0]))
                setSendImage(e?.target?.files[0])

            }
        }
    }



  
    useEffect(() => {
        const response = GetData.EditGet();
        console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                setFirstName(value.data.user.firstName);
                setLastName(value.data.user.lastName);
                setEmail(value.data.user.email);
                setPassword(value.data.user.password);
                setState(value.data.user.state);
                setCountry(value.data.user.country);
                setProfileImage(value.data.user.image);
                setUserId(value.data.user._id)

                console.log(value.data.user)

            }
        })
      }, [])
      const updateUser = (e) => {
        // alert('1')
        // const res = Acount.Registeration(values, handleErrors)
      e.preventDefault()  // res

        let formData = new FormData();

        formData.append("firstName", firstName)
        formData.append("lastName", lastName)
        formData.append("email", email)
        formData.append("state", state)
        formData.append("country", country)
        formData.append("image", sendImage)

        axios
            .put(`/users/${userId}`, formData)
            .then(value => {
                if(value.data.success==true){
                    setSuccessMessage('Profile Edited Successfully')

                }
                localStorage.removeItem('user')

                localStorage.setItem('user', JSON.stringify(value.data.data))
                // localStorage.setItem('token', value.data.token)

                console.log('Sign Up res', value)
                // setotpModal(true)

            })
            .catch(error => {
                console.log('er', error)
               


            })
    }
    

    return (
        <div className="d-inline-flex w-100">
            <Sidebar />
            <div style={{ width: "inherit" }}>
                <Dashnav />
                <form className='container mx-auto my-5 py-5' onSubmit={updateUser}>
                    
                    <div className=''>
                        <img src={profileImage} className='avatar-style' alt="" />
                        <input type="file" accept='jpg, png, jpeg' onChange={handleChange('profilePic')} id="img" className='d-none' />
                        <label htmlFor="img" className='btn UploadBtn fs-15 ms-3 my-2'>Upload</label>
                    </div>
                    <div className='row gx-5 py-5 my-5'>
                        <div className='col-md-6 col-sm-12'>
                            <div className="form-group my-4">
                                <label className='fs-17 mb-2'>First Name</label>
                                <input
                                    type="text"
                                    
                                    autoComplete={false}
                                    className='form-control'
                                    value={firstName}
                                    name="firstName"
                                    id="firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="form-group my-4">
                                <label className='fs-17 mb-2'>Email</label>
                                <input
                                    type="email"
                                    
                                    autoComplete={false}
                                    className='form-control'
                                    value={email}
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />

                            </div>
                            <div className="form-group my-4">
                                <label className='fs-17 mb-2'>State</label>
                                <input
                                    type="text"
                                    
                                    autoComplete={false}
                                    className='form-control'
                                    value={state}
                                    name="state"
                                    id="state"
                                    onChange={(e) => setState(e.target.value)}
                                    placeholder="State"
                                />
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <div className="form-group my-4">
                                <label className='fs-17 mb-2'>Last Name</label>
                                <input
                                    type="text"
                                    
                                    autoComplete={false}
                                    className='form-control'
                                    value={lastName}
                                    name="lastName"
                                    id="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Last Name"
                                />
                            </div>
                            {/* <div className="form-group my-4">
                                <label className='fs-17 mb-2'>Password</label>
                                <input
                                    type="password"
                                    required
                                    autoComplete={false}
                                    className='form-control'
                                    value={password}
                                    name="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                />
                            </div> */}
                            <div className="form-group my-4">
                                <label className='fs-17 mb-2'>Country</label>
                                <input
                                    type="text"
                                    
                                    autoComplete={false}
                                    className='form-control'
                                    value={country}
                                    name="country"
                                    id="country"
                                    onChange={(e) => setCountry(e.target.value)}
                                    placeholder="Country"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='text-success fs-20'>{sucessMessage}</p>
                            <button className='no_brdr fs-15 btn_width btnYelow' type='submit'>Change</button>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}
