import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { toast } from "react-toastify";
import cookie from "react-cookies";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = ({ setToken }) => {
  const navigate = useNavigate();
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

      password: Joi.string().min(8).required(),
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
      const saraha = await axios.post(
        "https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signin",
        user
      );

      const { data } = await axios.post(
        "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=d0cbf774321eda288e9defb5ec796daf"
      );
      if (data.success && saraha.data.message === "success") {
        err = false;

        console.log("success3");
        setToken(data.guest_session_id);
        cookie.save("guest_session_id", data.guest_session_id);
        navigate("/home");
      }
    }
    if (err) {
      toast.error("login failed");
    } else {
      toast.success("Welcome");
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
            type="email"
            className="form-control w-75 my-3"
            id="email"
            placeholder="Enter email"
          />
          {error["email"]?.length > 0 ? (
            <div className="alert alert-danger">{error["email"]}</div>
          ) : null}
        </div>
        <div className="form-group d-flex justify-content-center w-100 flex-column flex-wrap align-items-center">
          <input
            onChange={onChange}
            type="password"
            className="form-control w-75 my-3"
            id="password"
            placeholder="Password"
          />
          {error["password"]?.length > 0 ? (
            <div className="alert alert-danger">{error["password"]}</div>
          ) : null}
          <Link className={`mt-3 ${styles.forget}`} to='/forgetPassword'> <p>Did You Forget Your password ?</p>
          </Link>
        </div>

        <button
          type="submit"
          id={styles.btn}
          className="btn btn-primary mt-3 mb-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
