import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import staticBanner from "../../assets Pic/static-banner-bnpl-v4.jpg";

const products3 = [
  {
    id: 13,
    name: "Huawei Watch 2 Pro",
    brand: "Huawei",
    price: 5799,
    retailPrice: 7500,
    discount: "23% OFF",
    rating: 4.1,
    reviews: 14,
    imageUrl:
      "https://images.priceoye.pk/ultra-smart-watch-7-in-1-pakistan-priceoye-3ybh3-270x270.webp",
    description: "Sophisticated smart watch with exceptional battery life.",
  },
  {
    id: 14,
    name: "Ultra Smart Watch with 7 Straps",
    brand: "Generic",
    price: 1679,
    retailPrice: 8079,
    discount: "79% OFF",
    rating: 4.7,
    reviews: 199,
    imageUrl:
      "https://images.priceoye.pk/yolo-ultron-smart-watch-pakistan-priceoye-0jv0u-270x270.webp",
    description:
      "Stylish and versatile smart watch with 7 interchangeable straps.",
  },
  {
    id: 15,
    name: "YOLO Ultra Smart Watch",
    brand: "YOLO",
    price: 7999,
    retailPrice: 17999,
    discount: "56% OFF",
    rating: 4.4,
    reviews: 10,
    imageUrl:
      "https://images.priceoye.pk/huawei-band-9-pakistan-priceoye-9kqv0-270x270.webp",
    description: "Feature-packed smart watch with advanced functionality.",
  },
  {
    id: 16,
    name: "Huawei Band 9",
    brand: "Huawei",
    price: 9899,
    retailPrice: 20551,
    discount: "51% OFF",
    rating: 5.0,
    reviews: 26,
    imageUrl:
      "https://images.priceoye.pk/xiaomi-haylou-watch-2-pro-pakistan-priceoye-4n3ao-270x270.webp",
    description: "High-performance fitness band with robust features.",
  },
  {
    id: 17,
    name: "G-Tide R1 Smart Watch",
    brand: "G-Tide",
    price: 9100,
    retailPrice: 18200,
    discount: "50% OFF",
    rating: 4.5,
    reviews: 60,
    imageUrl:
      "https://images.priceoye.pk/g-tide-r1-smart-watch-pakistan-priceoye-xlubt-270x270.webp",
    description: "Durable and reliable smart watch for everyday use.",
  },
  {
    id: 18,
    name: "Apple Watch Ultra 49mm",
    brand: "Apple",
    price: 224999,
    retailPrice: 300000,
    discount: "25% OFF",
    rating: 4.7,
    reviews: 245,
    imageUrl:
      "https://images.priceoye.pk/apple-watch-ultra-49mm-pakistan-priceoye-7zgtj-270x270.webp",
    description: "Premium smart watch with cutting-edge technology and design.",
  },
];

const products4 = [
  {
    id: 19,
    name: "HK9 Pro Max Plus Smart Watch",
    brand: "HK9",
    price: 5799,
    retailPrice: 8000,
    discount: "27% OFF",
    rating: 4.8,
    reviews: 17,
    imageUrl:
      "https://images.priceoye.pk/hk9-pro-max-plus-smartwatch-pakistan-priceoye-4n0i7-270x270.webp",
    description:
      "An advanced smartwatch offering health monitoring and multi-sport tracking features.",
  },
  {
    id: 20,
    name: "Realme Smart Watch",
    brand: "Realme",
    price: 3499,
    retailPrice: 14999,
    discount: "77% OFF",
    rating: 4.9,
    reviews: 28,
    imageUrl:
      "https://images.priceoye.pk/realme-watch-pakistan-priceoye-g61ky-270x270.webp",
    description:
      "A stylish smartwatch with long battery life and high-resolution display.",
  },
  {
    id: 21,
    name: "Mibro Watch Lite 3 with Dual Strap",
    brand: "Mibro",
    price: 11999,
    retailPrice: 22500,
    discount: "47% OFF",
    rating: 4.7,
    reviews: 33,
    imageUrl:
      "https://images.priceoye.pk/mibro-watch-lite-3-pakistan-priceoye-nq89u-270x270.webp",
    description: "A durable and feature-packed smartwatch with a sleek design.",
  },
  {
    id: 22,
    name: "Xiaomi Redmi Watch 5 Active",
    brand: "Xiaomi",
    price: 6999,
    retailPrice: 18000,
    discount: "52% OFF",
    rating: 4.3,
    reviews: 36,
    imageUrl:
      "https://images.priceoye.pk/xiaomi-redmi-watch-5-active-pakistan-priceoye-n4ewq-270x270.webp",
    description:
      "A lightweight smartwatch with fitness tracking and water resistance.",
  },
  {
    id: 23,
    name: "Apple Watch SE 44mm",
    brand: "Apple",
    price: 75999,
    retailPrice: 189999,
    discount: "60% OFF",
    rating: 4.5,
    reviews: 102,
    imageUrl:
      "https://images.priceoye.pk/apple-watch-se-44mm-pakistan-priceoye-0n7w6-270x270.webp",
    description:
      "Premium smartwatch with advanced features and seamless Apple ecosystem integration.",
  },
  {
    id: 24,
    name: "Huawei Fit 2 Smartwatch",
    brand: "Huawei",
    price: 27799,
    retailPrice: 49999,
    discount: "44% OFF",
    rating: 4.9,
    reviews: 99,
    imageUrl:
      "https://images.priceoye.pk/audionic-airbud-590-wireless-earbuds-pakistan-priceoye-tpz2q-270x270.webp",
    description:
      "A modern fitness smartwatch with personalized health insights and a vibrant display.",
  },
];

const Products2 = () => {
  const navigate = useNavigate();

  const renderProductCard = (product) => (
    <SwiperSlide key={product.id}>
      <Box
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/product-details/${product.id}`)}
        className="shadow-sm rounded p-3 bg-white position-relative"
      >
        {/* Sale Badge */}
        <Box
          component="img"
          src="https://images.priceoye.pk/badges/priceoye-sale-20250105-c968h.png"
          alt="Sale Badge"
          className="position-absolute"
          style={{
            top: "10px",
            right: "10px",
            width: "90px",
            height: "70px",
          }}
        />

        {/* Product Image */}
        <Box className="text-center mb-3 d-flex justify-content-center w-100">
          <Box
            component="img"
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid"
            style={{
              maxWidth: "120px",
              maxHeight: "120px",
            }}
          />
        </Box>

        {/* Rating */}
        <Box
          className="mb-2 d-flex align-items-center bg-light p-2 rounded"
          style={{ backgroundColor: "#FBF7EB" }}
        >
          <Box
            component="img"
            src="https://static.priceoye.pk/images/stars.svg"
            alt="Rating Star"
            className="me-1"
            style={{
              width: "10px",
              height: "10px",
            }}
          />
          <Typography
            variant="body2"
            className="mx-1"
            style={{ fontSize: "0.9rem" }}
          >
            {product.rating}
          </Typography>
          <Typography
            variant="caption"
            className="text-muted"
            style={{ fontSize: "0.8rem" }}
          >
            {product.reviews} Reviews
          </Typography>
        </Box>

        {/* Product Details */}
        <Box className="w-100">
          <Typography
            variant="body1"
            className="fw-bolder mb-1"
            style={{
              fontSize: "1rem",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "160px", // Restrict width to show only 18 characters
            }}
            title={product.name} // Show full name on hover
          >
            {product.name.length > 18
              ? `${product.name.substring(0, 18)}...`
              : product.name}
          </Typography>
          <Typography
            variant="h6"
            className="text-secondary fw-normal"
            style={{ fontSize: "1.2rem" }}
          >
            <sup> Rs</sup> {product.price}
          </Typography>
          <Box className="d-flex justify-content-between w-100 mt-1">
            <Typography
              variant="body2"
              className="text-secondary text-decoration-line-through"
              style={{ fontSize: "0.9rem" }}
            >
              <sup> Rs</sup> {product.retailPrice}
            </Typography>
            <Typography
              variant="body2"
              className="text-success"
              style={{ fontSize: "0.9rem" }}
            >
              {product.discount}
            </Typography>
          </Box>
        </Box>
      </Box>
    </SwiperSlide>
  );

  return (
    <div>
      <div className="w-100 mt-5" style={{ backgroundColor: "#F1811D" }}>
        <div className="container">
          <div className="latest-product-box p-4 rounded">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center pl-heading mb-4">
              <h1 className="h5 text-white">Latest Smart Watches</h1>
              <span className="btn btn-light">View All</span>
            </div>

            {/* Swiper Section */}
            <Swiper
              className="pt-5"
              slidesPerView={4}
              spaceBetween={15}
              breakpoints={{
                1200: {
                  slidesPerView: 4, // Large screens (>= 1200px)
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2, // Medium screens (768px to <1200px)
                  spaceBetween: 15,
                },
                576: {
                  slidesPerView: 1, // Small screens (576px to <768px)
                  spaceBetween: 15,
                },
                0: {
                  slidesPerView: 1, // Extra small screens (<576px)
                  spaceBetween: 10,
                },
              }}
            >
              {products3.map(renderProductCard)}
            </Swiper>

            {/* Swiper Section */}
            <Swiper
              className="pt-5"
              slidesPerView={4} // Default for large screens
              spaceBetween={15}
              breakpoints={{
                1200: {
                  slidesPerView: 4, // Large screens (>= 1200px)
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2, // Medium screens (768px to <1200px)
                  spaceBetween: 15,
                },
                576: {
                  slidesPerView: 1, // Small screens (576px to <768px)
                  spaceBetween: 15,
                },
                0: {
                  slidesPerView: 1, // Extra small screens (<576px)
                  spaceBetween: 10,
                },
              }}
            >
              {products4.map(renderProductCard)}
            </Swiper>
          </div>
        </div>
      </div>
      <img className="img-fluid" src={staticBanner} alt="banner" />
    </div>
  );
};

export default Products2;
