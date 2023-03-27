import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../Login/Login.module.css";

export const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const [error, setError] = useState({
    // will have values initially to disable submit button
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const onSubmit = async (e) => {
    /*
      inputs: ActionEvent
      function: Sends the inputs to the backend and raise errors if there are any, if not switch to login
      output: none
      */
    e.preventDefault();
    const { data } = await axios.post(
      "https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup",
      inputs
    );
    if (data.message === "success") {
      navigate("/login");
      toast.success("Confirm Your Email Then Login");
    } else {
      // handle errors
      toast.error("There is an error in your data, try again!");
    }
  };
  ///////////////////////////////////////

  const validationSchema = () => {
    /*
      inputs: none
      function: creates a validation schema using JOI
      output: The schema of validation
      */
    return Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),

      password: Joi.string().min(8).required(),

      cPassword: Joi.any()
        .valid(inputs.password)
        .required()
        .messages({
          "any.only": "Does not match password",
        })
        .required(),

      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "edu"] } })
        .required(),
    });
  };
  const validateInput = (name, value) => {
    /*
      inputs: (name) of the input field, value on it
      function: validate tha value based on validation schema
      output: The validation errors if there is any
      */
    return validationSchema().extract(name).validate(value);
  };
  ///////////////////////////////////////
  const onChange = (e) => {
    /*
      inputs: ActionEvent
      function: set the values in the inputs and raise the errors if there is any
      output: none
      */
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    const validation = validateInput(name, value);
    if (validation.error) {
      setError({ ...error, [name]: validation.error });
    } else {
      let errs = { ...error };
      delete errs[name];
      setError({ ...errs });
    }
  };
  ///////////////////////////////////////

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
            type="text"
            className="form-control w-75 my-3"
            id="name"
            placeholder="Enter Your Name"
          />
          {error["name"]?.length > 0 ? (
            <div className="alert alert-danger">{error["name"]}</div>
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
        </div>
        <div className="form-group d-flex justify-content-center w-100 flex-column flex-wrap align-items-center">
          <input
            onChange={onChange}
            type="password"
            className="form-control w-75 my-3"
            id="cPassword"
            placeholder="cPassword"
          />
          {error["cPassword"]?.length > 0 ? (
            <div className="alert alert-danger">{error["cPassword"]}</div>
          ) : null}
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
