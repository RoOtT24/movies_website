import Joi from "joi";
import React, { useState } from "react";

export const Login = () => {
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

  return (
    <div className="card container">
      <form className="d-flex flex-column">
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

        <button type="submit" className="btn btn-primary w-25 ">
          Submit
        </button>
      </form>
    </div>
  );
};
