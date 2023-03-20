import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styles from './Register.module.css'

export const Register = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    password:'',
    cPassword:'',
  })
  
  const [errors, setErrors] = useState({ // will have values initially to disable submit button
    name:'',
    email:'',
    password:'',
    cPassword:'',
  })

  const onSubmit = async (e)=>{
    /*
      inputs: ActionEvent
      function: Sends the inputs to the backend and raise errors if there are any, if not switch to login
      output: none
      */
    e.preventDefault()
    const {data} = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup',inputs)
    if(data.message === 'success'){
      navigate('/login')
      toast.success('Confirm Your Email Then Login');
    }
    else{
      // handle errors
      toast.error('There is an error in your data!, try again');
      // const value = data.err[0][0].message ;
      // setErrors({...errors , [data.err[0][0].path[0]]:value});
    }
  }
///////////////////////////////////////

  const validationSchema = ()=> {
    /*
      inputs: none
      function: creates a validation schema using JOI
      output: The schema of validation
      */
    return Joi.object({
      name: Joi.string()
          .alphanum()
          .min(3)
          .max(30)
          .required(),
  
      password: Joi.string()
          .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  
      cpassword: Joi.any().valid(inputs.password).required().messages({
        "any.only":"Does not match password"
        }).required(),
  
      email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ['com', 'edu'] } }).required()
  })
  
  }
    const validateInput = (name, value)=>{
      /*
      inputs: (name) of the input field, value on it
      function: validate tha value based on validation schema
      output: The validation errors if there is any
      */
      return validationSchema().extract(name).validate(value);
    }
///////////////////////////////////////
  const onChange = (e)=>{
    /*
      inputs: ActionEvent
      function: set the values in the inputs and raise the errors if there is any
      output: none
      */
    const {name, value} = e.target;
    setInputs({...inputs , [name]:value});
    const validation = validateInput(name, value);
    if(validation.error){
      setErrors({...errors, [name]: validation.error})
    }
    else {
      let errs = {...errors};
      delete errs[name]
      setErrors({...errs})
    }
  }
///////////////////////////////////////

  return (
    <form onSubmit={onSubmit} className="container text-center mt-5 w-50">
      
      <div className="card p-5 bg-secondary">
      <div className="d-flex justify-content-center mb-3">
        <img className={styles.imgReg} src="/assets/img/login.png" alt="account pic" />
        </div>
      
      <div className="form-group my-3">
        
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          onChange={onChange}
        />
        </div>
      <div className="form-group my-3">
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter email"
          onChange={onChange}
        />

      </div>
      <div className="form-group my-3">
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter Password"
          onChange={onChange}
        />
      </div>
      
      <div className="form-group my-3">
        <input
          type="password"
          className="form-control"
          id="cPassword"
          name="cPassword"
          placeholder="Confirm Your Password"
          onChange={onChange}
        />
      </div>

    <div>
      <input type="submit" id={styles.btn} className={Object.keys(errors).length>0? "btn btn-primary disabled w-25 mt-3" : "btn btn-primary mt-3 w-25" } />
      </div>
      </div>
    </form>
  );
}
