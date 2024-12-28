import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// img assets
import RegisterImg from "../../assets Pic/Register-header-img.svg";

export default function Register() {
  const navigate = useNavigate(); // Initialize useNavigate

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("userfirstName", data.firstName);
    localStorage.setItem("userEmail", data.mail);
    localStorage.setItem("userPassword", data.password);
    
    console.log("User registered:", data);
    navigate("/LoginPage");
  };

  return (
    <>
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
            {...register("firstName", { required: "Last name is required" })}
            placeholder="first Name"
          />
          {errors.firstName && <p role="alert">{errors.firstName.message}</p>}

          <input
            className="outline-B rounded-2 py-1 w-75 mb-3"
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Last Name"
          />
          {errors.lastName && <p role="alert">{errors.lastName.message}</p>}

          {/* Email with validation */}
          <input
            className="outline-B rounded-2 py-1 w-75 mb-3"
            {...register("mail", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email",
              },
            })}
            placeholder="Enter Email"
          />
          {errors.mail && <p role="alert">{errors.mail.message}</p>}

          {/* Password field */}
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

          {/* Confirm Password field */}
          <input
            className="outline-B rounded-2 py-1 w-75 mb-3"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p role="alert">{errors.confirmPassword.message}</p>
          )}

          <input
            className="outline-B rounded-2 py-1 w-75 background-color text-white"
            type="submit"
          />
        </form>
      </Box>
    </>
  );
}
