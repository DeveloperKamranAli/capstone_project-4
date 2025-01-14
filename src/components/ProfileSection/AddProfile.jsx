import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const AddProfile = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Initialize form values from localStorage
  useEffect(() => {
    const email = localStorage.getItem("userEmail") || "";
    const password = localStorage.getItem("userPassword") || "";
    setValue("email", email);
    setValue("password", password);
  }, [setValue]);

  // Handle form submission
  const handleUpdate = (data) => {
    console.log("Form Data Submitted: ", data);
    try {
      // Save updated email and password to localStorage
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userPassword", data.password);

      alert("Profile updated successfully!");
      setIsEditing(true); // Exit edit mode
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="border rounded-2 d-flex flex-column justify-content-center background-color w-75 shadow p-3 mb-5 bg-body-tertiary rounded">
        <h1 className="text-center mb-4 mt-3">Edit Profile</h1>
        <form onSubmit={handleSubmit(handleUpdate)}>
          {/* Email Input */}
          <div className="d-flex flex-column align-items-center">
            <label className="h5 w-75">Email</label>
            <input
              className="bg-white border-0 rounded-3 p-2 btn-login input-text w-75 fs-5"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              disabled={!isEditing}
            />
            {errors.email && (
              <span className="text-danger w-75">{errors.email.message}</span>
            )}
          </div>

          {/* Password Input */}
          <div className="d-flex flex-column align-items-center mt-5 mb-5">
            <label className="h5 w-75">Password</label>
            <div className="position-relative w-75">
              <input
                className="bg-white border-0 rounded-3 p-2 btn-login input-text w-100 fs-5"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                disabled={!isEditing}
              />
              <div
                className="position-absolute top-50 end-0 translate-middle-y pe-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <VisibilityIcon style={{ color: "black" }} />
                ) : (
                  <VisibilityOffIcon style={{ color: "black" }} />
                )}
              </div>
            </div>
            {errors.password && (
              <span className="text-danger w-75">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="text-center mb-3">
            {!isEditing ? (
              <button
                type="button"
                className="border-0 mb-3 bg-white fs-5 w-50 py-1 btn-login rounded-2"
                onClick={() => setIsEditing(true)} // Enable editing
              >
                Edit
              </button>
            ) : (
              <button
                type="submit"
                className="border-0 mb-3 bg-white fs-5 w-50 py-1 btn-login rounded-2"
                onClick={() => setIsEditing(false)}
              >
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProfile;