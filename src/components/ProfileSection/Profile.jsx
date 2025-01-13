import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Brightness7TwoToneIcon from "@mui/icons-material/Brightness7TwoTone";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AddProfile = () => {
  const [userName, setUserName] = useState(""); // Store the user's first name
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();

  const goToProfileSection = () => {
    navigate("/addprofile");
  };

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
          <span className="border rounded-5 py-1 px-3 ms-5 bg-warning-subtle">
            Priceoye club member
          </span>
        </Box>
      </Box>

      <Box className="container-fluid mt-5">
        <Grid container spacing={2}>
          <Grid className="border-end bg-body-tertiary py-4" md={6} xs={12}>
            <Typography
              variant="h5"
              className="text-center"
              style={{ width: "24vh" }}
            >
              My Order
            </Typography>
            <Box className="d-flex justify-content-around align-items-center">
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/pay-icon.svg"
                  alt=""
                />
              </Typography>
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/recieve-icon.svg"
                  alt=""
                />
              </Typography>
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/review-icon.svg"
                  alt=""
                />
              </Typography>
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/refund-icon.svg"
                  alt=""
                />
              </Typography>

              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/complaints-icon.svg"
                  alt=""
                />
              </Typography>
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/e-warranty-icon.svg"
                  alt=""
                />
              </Typography>
            </Box>
          </Grid>
          <Grid className="bg-body-tertiary py-4" md={6} xs={12}>
            <Typography
              className="text-center"
              variant="h5"
              style={{ width: "18vh" }}
            >
              Help
            </Typography>
            <Box className="d-flex justify-content-around align-items-center">
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/pay-icon.svg"
                  alt=""
                />
              </Typography>
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/recieve-icon.svg"
                  alt=""
                />
              </Typography>
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/review-icon.svg"
                  alt=""
                />
              </Typography>
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/refund-icon.svg"
                  alt=""
                />
              </Typography>

              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/complaints-icon.svg"
                  alt=""
                />
              </Typography>
              <Typography>
                <img
                  src="https://static.priceoye.pk/images/my-account/e-warranty-icon.svg"
                  alt=""
                />
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box className="bg-body-tertiary">
          <Box className="mt-4 d-flex justify-content-around py-4">
            <Typography className="d-flex flex-column align-items-center">
              <img
                src="https://static.priceoye.pk/images/my-account/support-icon.svg"
                alt=""
              />
              <Typography>Suport</Typography>
            </Typography>
            <Typography className="d-flex flex-column align-items-center">
              <img
                src="https://static.priceoye.pk/images/my-account/e-warranty-icon.svg"
                alt=""
              />
              <Typography>Worranty</Typography>
            </Typography>
            <Typography className="d-flex flex-column align-items-center">
              <img
                src="https://static.priceoye.pk/images/my-account/bnpl-icon.svg"
                alt=""
              />
              <Typography>BNPL</Typography>
            </Typography>
          </Box>
        </Box>

        <Box className="mt-5 bg-body-tertiary ">
          <Box className="d-flex justify-content-around py-4">
            <Typography className="d-flex flex-column align-items-center">
              <img
                src="https://static.priceoye.pk/images/my-account/address-book.svg"
                alt=""
              />
              <Typography>Address Book</Typography>
            </Typography>
            <Typography
              className="d-flex flex-column align-items-center"
              onClick={goToProfileSection}
            >
              <img
                src="https://static.priceoye.pk/images/my-account/complaints.svg"
                alt=""
              />
              <Typography>Edit Profile</Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddProfile;
