//

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import logo from "../../assets Pic/logo.svg";
import f1 from "../../assets Pic/footer1.svg";
import playstore from "../../assets Pic/google-play-store.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#48AFFF",
        color: "white",
        padding: "40px 20px",
      }}
    >
      {/* Secondary Footer */}
      <Box className="container-lg">
        <Grid container spacing={3}>
          {/* Column 1 */}
          <Grid item xs={12} sm={4}>
            <Box>
              <img
                className="d-block mb-3"
                alt="Logo"
                src={logo}
                style={{ width: "150px" }}
              />
              <ul className="list-unstyled" style={{ padding: 0, margin: 0 }}>
                {[
                  "About Us",
                  "FAQs",
                  "Contact Us",
                  "Careers",
                  "Blog",
                  "Terms & Conditions",
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: "8px" }}>
                    <Typography variant="body2">{item}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ marginBottom: "16px" }}>
              Customer Service
            </Typography>
            <ul className="list-unstyled" style={{ padding: 0, margin: 0 }}>
              {[
                "Help Center",
                "Privacy Policy",
                "Installments Plan",
                "E-Warranty Activation",
                "Sell",
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <Typography variant="body2">{item}</Typography>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ marginBottom: "16px" }}>
              Secure Payments Methods
            </Typography>
            <img
              className="img-fluid"
              src={f1}
              alt=""
              style={{ width: "100%", maxWidth: "200px" }}
            />
            <Box sx={{ marginTop: "16px" }}>
              <img
                className="img-fluid"
                src={playstore}
                alt=""
                style={{ width: "100px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Primary Footer */}
      <Box
        sx={{
          marginTop: "40px",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          paddingTop: "20px",
        }}
      >
        <Typography variant="body2">Copyright © 2024 Priceoye.pk</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
