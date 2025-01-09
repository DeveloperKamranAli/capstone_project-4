import React, { useState } from "react";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Profile = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Set initial values using localStorage
  React.useEffect(() => {
    setValue("email", localStorage.getItem("userEmail") || "");
    setValue("password", localStorage.getItem("userPassword") || "");
  }, [setValue]);

  const handleUpdate = (data) => {
    // Save to localStorage when form is submitted
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("userPassword", data.password);
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="border rounded-2 d-flex flex-column justify-content-center background-color w-75 shadow p-3 mb-5 bg-body-tertiary rounded">
        <h1 className="text-center mb-4 mt-3">My Profile</h1>

        <form onSubmit={handleSubmit(handleUpdate)}>
          <div className="d-flex flex-column align-items-center">
            <label className="h5 w-75">Email</label>
            <input
              className="bg-white border-0 rounded-3 p-2 btn-login input-text w-75 fs-5"
              type="email"
              {...register("email")} // Using react-hook-form to register the input
              disabled={!isEditing}
            />
          </div>

          <div className="d-flex flex-column align-items-center mt-5 mb-5">
            <label className="h5 w-75">Password</label>
            <div className="position-relative w-75">
              <input
                className="bg-white border-0 rounded-3 p-2 btn-login input-text w-100 fs-5"
                type={showPassword ? "text" : "password"} // Toggle between text and password
                {...register("password")} // Using react-hook-form to register the input
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
          </div>

          <div className="text-center mb-3">
            {!isEditing ? (
              <button
                type="button"
                className="border-0 mb-3 bg-white fs-5 w-50 py-1 btn-login rounded-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            ) : (
              <button
                type="submit"
                className="border-0 mb-3 bg-white fs-5 w-50 py-1 btn-login rounded-2"
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

export default Profile;
