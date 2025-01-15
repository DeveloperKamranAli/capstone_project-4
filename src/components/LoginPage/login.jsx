import React from "react"; 
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import RegisterImg from "../../assets Pic/Register-header-img.svg";

const Login = () => {
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (data.mail === storedEmail && data.password === storedPassword) {
      localStorage.setItem("isLoggedIn", true);
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Box className="d-flex justify-content-center mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column align-items-center mx-2 shadow-lg p-3 mb-5 bg-body rounded"
      >
        <Box>
          <img className="img-fluid mb-3" src={RegisterImg} alt="" />
        </Box>

        <input
          className="outline-B rounded-2 py-1 w-75 mb-3"
          {...register("mail", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email",
            },
          })}
          placeholder="Enter Email"
        />
        {errors.mail && <p role="alert">{errors.mail.message}</p>}

        <input
          className="outline-B rounded-2 py-1 w-75 mb-3"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Enter Password"
        />
        {errors.password && <p role="alert">{errors.password.message}</p>}

        <input
          className="outline-B rounded-2 py-1 w-75 background-color text-white"
          type="submit"
        />
      </form>
    </Box>
  );
};

export default Login;


