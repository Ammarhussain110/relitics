import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Otp from './Otp';

const LoginModal = (props) => {
    const [email, setEmail]= useState('')
 
const handleOk =(e)=>{
    e.preventDefault();
    props.resetPasword(email)
}

const handleChange =(e)=>{
    setEmail(e.target.value)
}
 

  return (
    <>
      <Modal visible={props.isModalVisible} onOk={handleOk} className='modal-bg' onCancel={props.handleCancel} footer={false} closable={props.closable}>
       <p className='fs-25 text-white'>Enter your Email to get verifcation code</p>
       <form onSubmit={handleOk} >
       <input type="email" className="form-control" value={email} onChange={handleChange}/>
       <div className='text-center mt-3'>
       <button className='btn p-3 px-5 fs-22 email-buuton' type='submit'>Send</button>
       </div>
       </form>


      </Modal>
    </>
  );
};
export default LoginModal