import React from 'react'

export const Login = () => {
  return (
    <div className="card container">
  <form className='d-flex flex-column'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit" className="btn btn-primary w-25 ">Submit</button>
</form>
</div>


  )
}
