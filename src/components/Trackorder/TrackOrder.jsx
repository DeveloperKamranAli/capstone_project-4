import React from "react";
import { useSelector } from "react-redux";

const TrackOrder = () => {
  const selectedProducts = useSelector((state) => state.cart.selectedProducts); // Fetch all products

  // Get the current date and format it to a readable string
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mt-5">
      <h3 className="mb-4" style={{ fontSize: "2rem", fontWeight: "600" }}>
        Your Orders
      </h3>

      <p style={{ fontSize: "1.25rem", color: "#555" }}>
        <strong>Order Date:</strong> {currentDate}
      </p>

      {/* Selected Products Section */}
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <div
            className="card p-4 mb-5 shadow-sm rounded-lg"
            key={product.id}
            style={{
              backgroundColor: "#f8f9fa",
              border: "1px solid #ddd",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div className="row">
              <div className="col-md-3 mb-3 mb-md-0">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-md-9">
                <h4 style={{ fontSize: "1.25rem", fontWeight: "500" }}>
                  {product.name}
                </h4>
                <p style={{ fontSize: "1rem", color: "#333" }}>
                  <strong>Price:</strong> PKR{" "}
                  {product.price.toLocaleString()}
                </p>
                <p style={{ fontSize: "1rem", color: "#555" }}>
                  <strong>Status:</strong>{" "}
                  <span style={{ color: "#28a745", fontWeight: "600" }}>
                    In Progress
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p style={{ fontSize: "1.25rem", color: "#888" }}>No products selected.</p>
      )}
    </div>
  );
};

export default TrackOrder;
