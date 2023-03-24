import axios from "axios";
import Joi, { boolean, object } from "joi";
import React, { useState } from "react";
import { toast } from "react-toastify";
import cookie from "react-cookies"
import styles from './Login.module.css'
import { useNavigate } from "react-router-dom";

export const Login = ({setToken}) => {
  const navigate=useNavigate();
  let [user, setUser] = useState({
  
    email: "",
    password: "",
  });

  let [error, setError] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    // let value=e.target.value;
    // let myUser=user;
    // myUser['email']=value;
    // setUser(myUser);
    // console.log(user);

    const { id, value } = e.target;
    setUser({ ...user, [id]: value });

    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "edu"] } })
        .required(),

      password: Joi.string().min(3).required(),
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

  const onSubmit = async (e)=>{

    e.preventDefault()
    let err=true;
    if (Object.keys(error).length===0){
      
      const {data}=await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signin',user);
      if (data.message==="success"){
        err=false;
      // localStorage.setItem('token',data.token);
      
      cookie.save('token' , data.token);
      setToken(data.token);
     
      navigate("/home");

      }
    }
    if (err){
      toast.error("login failed");
    }
    else{
      toast.success("Welcome");

    }
    
  }

  return (
    <div className=" container mt-5 w-50 mb-5">
      
      <form onSubmit={onSubmit} className="card d-flex flex-column align-items-center bg-secondary" style={{height:60+'vh'}}>
      <div className="d-flex justify-content-center mb-3">
        <img className={styles.imgReg} src="/assets/img/login.png" alt="account pic" />
        </div>
        <div className="form-group">

        

          <input
            onChange={onChange}
            type="email"
            className="form-control my-3"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {error['email']?.length>0?
          <div className="alert alert-danger">

            {error['email']}

          </div>
          : null
          }
        </div>
        <div className="form-group">
          <input
            onChange={onChange}
            type="password"
            className="form-control my-3"
            id="password"
            placeholder="Password"
          />
           {error['password']?.length>0?
          <div className="alert alert-danger">

            {error['password']}

          </div>
          : null
          }
        </div>

        <button type="submit" id={styles.btn} className="btn btn-primary  ">
          Submit
        </button>
      </form>
    </div>
  );
};
