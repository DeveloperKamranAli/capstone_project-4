import { Box, Button, Typography } from "@mui/material";
import React from "react";

// Import images
import buyImg1 from "../../assets Pic/extended-warranty.svg";
import buyImg2 from "../../assets Pic/order-packaging.svg";
import buyImg3 from "../../assets Pic/feature-shipping.svg";
import buyImg4 from "../../assets Pic/easy_instalment.svg";

const BuyingReasons = () => {
  return (
    <Box className="container my-5">
      {/* Header Section */}
      <Box className="d-flex justify-content-between align-items-center mb-4">
        <Typography variant="h6" className="fw-bold">
          Reasons to Buy
        </Typography>
        <Button variant="outlined" className="text-primary">
          View All
        </Button>
      </Box>

      {/* Cards Section */}
      <Box className="row gy-4">
        {/* Card 1 */}
        <Box className="col-12 col-md-6 col-lg-6">
          <Box
            className="text-center p-4 shadow-sm rounded"
            style={{ backgroundColor: "#0078D5", color: "#FFFFFF" }}
          >
            <img src={buyImg1} alt="Extended Warranty" width="100" />
            <Typography variant="body1" className="mt-3 fw-bold">
              Priceoye Extended Warranty
            </Typography>
            <Button
              size="small"
              style={{
                backgroundColor: "#F47708",
                color: "#FFFFFF",
                marginTop: "10px",
              }}
            >
              Know More
            </Button>
          </Box>
        </Box>

        {/* Card 2 */}
        <Box className="col-12 col-md-6 col-lg-6">
          <Box
            className="text-center p-4 shadow-sm rounded"
            style={{ backgroundColor: "#0078D5", color: "#FFFFFF" }}
          >
            <img src={buyImg2} alt="Order Packaging" width="100" />
            <Typography variant="body1" className="mt-3 fw-bold">
              Packaging Video
            </Typography>
            <Button
              size="small"
              style={{
                backgroundColor: "#F47708",
                color: "#FFFFFF",
                marginTop: "10px",
              }}
            >
              Know More
            </Button>
          </Box>
        </Box>

        {/* Card 3 */}
        <Box className="col-12 col-md-6 col-lg-6">
          <Box
            className="text-center p-4 shadow-sm rounded"
            style={{ backgroundColor: "#0078D5", color: "#FFFFFF" }}
          >
            <img src={buyImg3} alt="Feature Shipping" width="100" />
            <Typography variant="body1" className="mt-3 fw-bold">
              Open Parcel (ISB - LHR - KHI)
            </Typography>
            <Button
              size="small"
              style={{
                backgroundColor: "#F47708",
                color: "#FFFFFF",
                marginTop: "10px",
              }}
            >
              Know More
            </Button>
          </Box>
        </Box>

        {/* Card 4 */}
        <Box className="col-12 col-md-6 col-lg-6">
          <Box
            className="text-center p-4 shadow-sm rounded"
            style={{ backgroundColor: "#0078D5", color: "#FFFFFF" }}
          >
            <img src={buyImg4} alt="Easy Installments" width="100" />
            <Typography variant="body1" className="mt-3 fw-bold">
              Easy Installments
            </Typography>
            <Button
              size="small"
              style={{
                backgroundColor: "#F47708",
                color: "#FFFFFF",
                marginTop: "10px",
              }}
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyingReasons;
