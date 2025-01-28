
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../../Slices/orderSlice"; // Update path as needed
import { useNavigate } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Radio,
  FormControlLabel,
  IconButton,
  Box,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const Delivery = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    deliveryMethod: "standard_shipping",
    paymentMethod: "cod", // Default payment method is Cash on Delivery
  });
  const [quantity, setQuantity] = useState(1); // State for product quantity

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch selected product from Redux
  const selectedProduct = useSelector((state) => state.cart.selectedProduct);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      dispatch(addOrder({ ...formData, quantity }));
      toast.success("Order placed successfully!", { position: "top-right" });
      setTimeout(() => {
        navigate("/Trackorder");
      }, 2000);
    }
  };


  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="container mt-5">
      {selectedProduct && (
        <div className="card mb-4 shadow-lg rounded-lg">
          <h4 className="card-header bg-primary text-white p-3">
            Selected Product
          </h4>
          <div className="card-body d-flex align-items-center">
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              style={{
                width: "120px",
                marginRight: "20px",
                borderRadius: "8px",
              }}
            />
            <div>
              <h5 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                {selectedProduct.name}
              </h5>
              <p className="text-muted mb-1">
                PKR {selectedProduct.price.toLocaleString()}
              </p>
              <Box display="flex" alignItems="center" gap={1}>
                <IconButton color="primary" onClick={handleDecrement}>
                  <Remove />
                </IconButton>
                <TextField
                  value={quantity}
                  variant="outlined"
                  inputProps={{
                    readOnly: true,
                    style: { textAlign: "center", width: "40px" },
                  }}
                  size="small"
                />
                <IconButton color="primary" onClick={handleIncrement}>
                  <Add />
                </IconButton>
              </Box>
            </div>
          </div>
        </div>
      )}

      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className="mb-5"
        style={{ padding: "0 20px" }}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              style={{
                fontWeight: "bold",
                color: activeStep === index ? "#48AFFF" : "#000", // Active step color
                fontSize: "1rem",
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="card p-4 shadow-lg rounded-lg">
        {activeStep < steps.length ? (
          <>
            {activeStep === 0 && (
              <TextField
                label="Enter OTP"
                variant="outlined"
                fullWidth
                name="otp"
                className="mb-3"
              />
            )}
            {activeStep === 1 && (
              <>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mb-3"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mb-3"
                />
              </>
            )}
            {activeStep === 2 && (
              <>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mb-3"
                />
                <div className="mb-3">
                  <FormControlLabel
                    control={
                      <Radio
                        checked={
                          formData.deliveryMethod === "standard_shipping"
                        }
                        onChange={handleChange}
                        value="standard_shipping"
                        name="deliveryMethod"
                      />
                    }
                    label="Standard Shipping"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formData.deliveryMethod === "open_parcel"}
                        onChange={handleChange}
                        value="open_parcel"
                        name="deliveryMethod"
                      />
                    }
                    label="Open Parcel Delivery"
                  />
                </div>
              </>
            )}
            {activeStep === 3 && (
              <>
                <div className="mb-3">
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleChange}
                        value="cod"
                        name="paymentMethod"
                      />
                    }
                    label="Cash on Delivery"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formData.paymentMethod === "other"}
                        onChange={handleChange}
                        value="other"
                        name="paymentMethod"
                      />
                    }
                    label="Other Payment Method"
                  />
                </div>
                <h4 className="text-success">
                  Please proceed to payment to complete your order.
                </h4>
              </>
            )}
            <div className="d-flex justify-content-between">
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={activeStep === 0}
                style={{
                  width: "100px",
                  backgroundColor: "#48AFFF",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "8px 16px",
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                className="btn-primary"
                style={{
                  width: "120px",
                  backgroundColor: "#48AFFF", // Updated color
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "8px 20px",
                }}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </>
        ) : (
          <h3 style={{ color: "#28a745", fontWeight: "bold" }}>
            All steps completed! Thank you for your order.
          </h3>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Delivery;
