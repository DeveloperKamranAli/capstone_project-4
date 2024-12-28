import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import service1 from "../../assets Pic/approved-feature.svg";
import service2 from "../../assets Pic/warranty-feature.svg";
import service3 from "../../assets Pic/video-shooting-camera.svg";
import service4 from "../../assets Pic/shipping-feature.svg";

const services = [
  {
    img: service1,
    title: "PTA Approved",
    description: "Mobile Phone",
  },
  {
    img: service2,
    title: "1 Year",
    description: "Brand Warranty",
  },
  {
    img: service3,
    title: "Packaging Video",
    description: "See Your Product",
  },
  {
    img: service4,
    title: "Fast Delivery",
    description: "All Over Pakistan",
  },
];

const OurService = () => {
  return (
    <Box className="container my-3">
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box className="services-info" textAlign="center">
              <img
                src={service.img}
                alt={service.title}
                className="img-fluid"
                style={{ width: "70px", height: "70px" }}
              />
              <Box className="services-detail" mt={2}>
                <Typography variant="h6" className="services-text">
                  {service.title}
                </Typography>
                <Typography variant="body2" className="services-text1">
                  {service.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurService;
