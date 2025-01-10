import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addProductToCart } from "../../Slices/cartSlice";
import { Box, Button, Typography } from "@mui/material";
import OurService from "../OurService/OurService";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch products from Redux state
  const products = useSelector((state) => state.products);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
    // Save selected product in Redux
    navigate("/DeliveryPage"); // Navigate to delivery page
  };

  return (
    <Box className="container mt-5">
      <Box className="row g-4 align-items-center">
        <Typography className="col-md-5 text-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid border border-3 rounded-5 py-3 px-4"
            style={{ width: "35vh" }}
          />
        </Typography>
        <Box className="col-md-7">
          <h4 className="fw-bold">{product.name}</h4>
          <h5 className="text-muted">Brand: {product.brand}</h5>
          <p className="mt-3">{product.description}</p>
          <div className="mt-4">
            <h4 className="text-info-emphasis mb-1">
              Rs {product.price.toLocaleString()}
            </h4>
            <Typography className="w-50 d-flex justify-content-between">
              <span className="text-muted text-decoration-line-through">
                Rs {product.retailPrice.toLocaleString()}
              </span>
              <span className="ms-3 text-info-emphasis fw-bold">
                {product.discount}
              </span>
            </Typography>
          </div>
          <Typography
            className="d-flex mt-5 justify-content-center mt-3"
            style={{ width: "47vh" }}
          >
            <Button
              className="me-3"
              style={{
                width: "20vh",
                backgroundColor: "#f88b2a",
                color: "white",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              style={{
                width: "20vh",
                backgroundColor: "#48afff",
                color: "white",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              Compare
            </Button>
          </Typography>
        </Box>
      </Box>
      <Box className="bg-body-tertiary mt-5">
        <OurService />
      </Box>
    </Box>
  );
};

export default ProductDetails;
