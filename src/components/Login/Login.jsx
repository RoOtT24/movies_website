import Joi from 'joi';
import React, { useState } from 'react'

export const Login = () => {

  let [user,setUser]=useState({

    email:'',
    password:''

  });

  let [error,setError]=useState({

      email:'',
      password:''

    });

const onChange=(e)=>{

  // let value=e.target.value;
  // let myUser=user;
  // myUser['email']=value;
  // setUser(myUser);
  // console.log(user);

  
  const {id,value}=e.target;
setUser({...user,[id]:value});
console.log(user);

const schema = Joi.object({

  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'edu'] } }),

  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

})


} 


  return (
    <div className="card container">
  <form className='d-flex flex-column'>
  <div className="form-group">
   
    <input onChange={onChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
  
  </div>
  <div className="form-group">
  
    <input onChange={onChange} type="password" className="form-control" id="password" placeholder="Password" />
  </div>
  
  <button type="submit" className="btn btn-primary w-25 ">Submit</button>
</form>
</div>


  )
}
