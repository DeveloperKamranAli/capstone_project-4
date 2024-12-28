import { Box, Typography } from "@mui/material";
import React from "react";

const productDetail = [
  {
    id: 1,
    name: "Nothing Buds Pro 2",
  }
]
const ProductDetail = () => {
  return (
    <>
      <Box className="Regular shadow mb-4">
        <Box className="py-1 container">
          <Typography className="text-secondary " variant="body">
            Wireless Earbuds > CMF > Nothing Buds Pro 2
          </Typography>
          <Typography className="me-4">
            Buy Nothing Buds Pro 2 Price in Pakistan
          </Typography>
        </Box>
      </Box>

      <Box>

      </Box>
    </>
  );
};

export default ProductDetail;
