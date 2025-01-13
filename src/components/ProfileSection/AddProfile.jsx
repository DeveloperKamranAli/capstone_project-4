import { Box, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Brightness7TwoToneIcon from "@mui/icons-material/Brightness7TwoTone";
import { AccountCircle } from "@mui/icons-material";

const AddProfile = () => {
  const [userName, setUserName] = useState(""); // Store the user's first name
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    // Retrieve login status and user name from localStorage
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    const storedFirstName = localStorage.getItem("userfirstName");

    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
      setUserName(storedFirstName || "Guest"); // Default to 'Guest' if no name is available
    }
  }, []);

  return (
    <>
      <Box
        className="container-fluid mt-4 py-4"
        sx={{ backgroundColor: "#48AFFF" }}
      >
        <Box className="mx-4">
          {/* Top right icon */}
          <Typography className="d-flex justify-content-end">
            <Brightness7TwoToneIcon className="text-white" />
          </Typography>

          {/* Profile Section */}
          <Box className="d-flex align-items-center mt-3">
            <IconButton
              className="text-white"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            <Typography className="text-white" variant="h6">
              {isLoggedIn ? userName : "Not Logged In"}{" "}
              {/* Show name or default text */}
            </Typography>
          </Box>
          <span className="border rounded-5 py-1 px-3 ms-5 bg-warning-subtle">Priceoye club member</span>
        </Box>
      </Box>
    </>
  );
};

export default AddProfile;
