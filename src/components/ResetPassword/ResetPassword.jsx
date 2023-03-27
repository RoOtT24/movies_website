import axios from 'axios';
import Joi from 'joi';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../Login/Login.module.css'

const ResetPassword = () => {
    const {state} = useLocation()
    const {email} = state
    
    const navigate = useNavigate();
    let [user, setUser] = useState({
        newPassword: "",
        code:''
    });
  
    let [error, setError] = useState({
        newPassword: "",
        code:''
    });
  
    const onChange = (e) => {
      
      const { id, value } = e.target;
      setUser({ ...user, [id]: value });
  
      const schema = Joi.object({
        code: Joi.string().min(5)
          .required(),
          newPassword: Joi.string().min(8).required()
      });
  
      let valid = schema.extract(id).validate(value);
      if (valid.error) {
        //handle errors
        setError({
          ...error,
          [id]: valid.error.details[0].message.replace("value", id),
        });
      } else {
        //delete error
        let myError = error;
        delete myError[id];
        setError({ ...myError });
      }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let err = true
        if (Object.keys(error).length === 0) {
            const {data} = axios.patch('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/forgetPassword',{...user, email})
            if(data.message === 'success')
                err = false
          }
        
        if (err) {
          toast.error("Wrong Entry, Try again!");
        } else {
          toast.success("Login With Your New Password");
          navigate('/')
        }
      };

  return (
    <div className={`container ${styles.login}`}>
    <form
      onSubmit={onSubmit}
      className="card d-flex flex-column align-items-center bg-secondary"
      style={{ height: "max-content" }}
    >
      <div className="d-flex justify-content-center mb-3">
        <img
          className={styles.imgReg}
          src="/assets/img/login.png"
          alt="account pic"
        />
      </div>
      <div className="form-group d-flex justify-content-center w-100 flex-column flex-wrap align-items-center">
        <input
          onChange={onChange}
          type="text"
          className="form-control w-75 my-3"
          id="code"
          placeholder="Enter The Code"
        />
        {error["code"]?.length > 0 ? (
          <div className="alert alert-danger">{error["code"]}</div>
        ) : null}
        <input
          onChange={onChange}
          type="text"
          className="form-control w-75 my-3"
          id="newPassword"
          placeholder="Enter Your New Password"
        />
        {error["newPassword"]?.length > 0 ? (
          <div className="alert alert-danger">{error["newPassword"]}</div>
        ) : null}
      </div>

      <button
        type="submit"
        id={styles.btn}
        className="btn btn-primary mt-3 mb-5"
      >
        Next
      </button>
    </form>
  </div>
  )
}

export default ResetPassword;