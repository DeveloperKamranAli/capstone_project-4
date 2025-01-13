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

  const buttonStyles = {
    width: "20vh",
    color: "white",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const handleHover = (e, isHover) => {
    e.target.style.transform = isHover ? "scale(1.05)" : "scale(1)";
    e.target.style.boxShadow = isHover
      ? "0 4px 15px rgba(0, 0, 0, 0.3)"
      : "none";
  };

  const stars = Array(3).fill("⭐");

  return (
    <>
      <Box className="container-fluid shadow p-2 mb-5 bg-body-tertiary rounded">
        <Box className="container">
          <Typography variant="5">
            Wireless Earbuds > CMF > Nothing Buds Pro 2
          </Typography>
          <Typography className="fw-semibold">
            Buy Nothing Buds Pro 2 Price in Pakistan
          </Typography>
        </Box>
      </Box>
      <Box className="container mt-5">
        <Box className="row g-4 justify-content-center align-items-center">
          <Typography
            className="col-md-5 text-center"
            style={{ width: "35vh" }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="img-fluid border border-3 rounded-5 py-3 px-4"
            />
          </Typography>
          <Box className="col-md-7">
            <Typography variant="h5" className="fw-bold">
              {product.name}
            </Typography>
            {/* Render the stars */}
            <Box className="d-flex mt-1">
              {stars.map((star, index) => (
                <span key={index}>{star}</span>
              ))}
              <h5 className="text-muted">{product.brand}</h5>
            </Box>
            <p className="mt-3">{product.description}</p>
            <Box className="mt-4">
              <Typography
                className="d-flex justify-content-between"
                style={{ width: "39vh" }}
              >
                <h4 className="text-info-emphasis fw-bold mb-1">
                  Rs {product.price.toLocaleString()}
                </h4>
                <span className="ms-3 fs-5 text-info-emphasis fw-bold">
                  {product.Stock}
                </span>
              </Typography>
              <Typography
                className="d-flex justify-content-between"
                style={{ width: "39vh" }}
              >
                <span className="text-muted text-decoration-line-through">
                  Rs {product.retailPrice.toLocaleString()}
                </span>
                <span className="ms-3 text-info-emphasis">
                  {product.discount}
                </span>
              </Typography>
            </Box>
            <Typography className="d-flex mt-5 mt-3" style={{ width: "47vh" }}>
              <Button
                className="me-3"
                style={{
                  width: "20vh",
                  backgroundColor: "#f88b2a",
                  color: "white",
                }}
                onMouseOver={(e) => handleHover(e, true)}
                onMouseOut={(e) => handleHover(e, false)}
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
                onMouseOver={(e) => handleHover(e, true)}
                onMouseOut={(e) => handleHover(e, false)}
              >
                Compare
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="bg-body-tertiary mt-5">
        <OurService />
      </Box>
    </>
  );
};

export default ProductDetails;
