import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import backgroundImage from '../../assets Pic/section-earbuds-bg-image.png'

const products1 = [
  {
    id: 1,
    name: "Audionic Airbud 550",
    brand: "Audionic",
    price: 3811,
    retailPrice: 9990,
    discount: "62% OFF",
    rating: 4.8,
    reviews: 538,
    imageUrl:
      "https://images.priceoye.pk/audionic-airbud-550-pakistan-priceoye-o6fve-270x270.webp",
    description:
      "High-quality wireless earbuds with a comfortable fit and impressive sound clarity.",
  },
  {
    id: 2,
    name: "Anker R50i Earbuds",
    brand: "Anker",
    price: 4611,
    retailPrice: 7199,
    discount: "36% OFF",
    rating: 4.7,
    reviews: 30,
    imageUrl:
      "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44-270x270.webp",
    description:
      "Experience premium audio quality with long battery life and fast charging capabilities.",
  },
  {
    id: 3,
    name: "Xiaomi Redmi Buds 6 Lite",
    brand: "Xiaomi",
    price: 5899,
    retailPrice: 6999,
    discount: "16% OFF",
    rating: 4.4,
    reviews: 11,
    imageUrl:
      "https://images.priceoye.pk/xiaomi-redmi-buds-6-lite-wireless-earbuds-pakistan-priceoye-c4dfa-270x270.webp",
    description:
      "Lightweight earbuds featuring advanced noise cancellation and seamless connectivity.",
  },
  {
    id: 4,
    name: "QCY T13 ANC 2",
    brand: "QCY",
    price: 4549,
    retailPrice: 7399,
    discount: "39% OFF",
    rating: 4.1,
    reviews: 14,
    imageUrl:
      "https://images.priceoye.pk/qcy-t13-anc-2-pakistan-priceoye-uvlbc-270x270.webp",
    description:
      "Affordable earbuds with active noise cancellation and crystal-clear audio quality.",
  },
  {
    id: 5,
    name: "Redmi Buds 6  Wireless Earbuds",
    brand: "Xiaomi",
    price: 4611,
    retailPrice: 7199,
    discount: "36% OFF",
    rating: 4.5,
    reviews: 60,
    imageUrl:
      "https://images.priceoye.pk/redmi-buds-6-active-wireless-earbuds-pakistan-priceoye-h6kkk-270x270.webp",
    description:
      "Durable and stylish earbuds offering superb sound quality for music and calls.",
  },
  {
    id: 6,
    name: "Soundpeats Wireless Earbuds",
    brand: "Soundpeats",
    price: 10518,
    retailPrice: 14000,
    discount: "25% OFF",
    rating: 3.7,
    reviews: 6,
    imageUrl:
      "https://images.priceoye.pk/soundpeats-engine4-wireless-earbuds-pakistan-priceoye-40ifu-270x270.webp",
    description:
      "Engineered for bass enthusiasts with dual drivers and ergonomic design.",
  },
];

const products2 = [
  {
    id: 7,
    name: "Soundpeats  Earbuds",
    brand: "Soundpeats",
    price: 10518,
    retailPrice: 41400,
    discount: "25% OFF",
    rating: 4.6,
    reviews: 13,
    imageUrl:
      "https://images.priceoye.pk/soundpeats-engine4-wireless-earbuds-pakistan-priceoye-40ifu-270x270.webp",
    description:
      "High-quality wireless earbuds with a comfortable fit and impressive sound clarity.",
  },
  {
    id: 8,
    name: "Imiki MT2 Wireless Earbuds",
    brand: "Imiki",
    price: 4299,
    retailPrice: 69999,
    discount: "39% OFF",
    rating: 4.9,
    reviews: 38,
    imageUrl:
      "https://images.priceoye.pk/imilab-imiki-mt2-wireless-erbuds-pakistan-priceoye-obxhu-270x270.webp",
    description:
      "Experience premium audio quality with long battery life and fast charging capabilities.",
  },
  {
    id: 9,
    name: "Realme T100 Wireless Earbuds",
    brand: "Realme",
    price: 9999,
    retailPrice: 15999,
    discount: "42% OFF",
    rating: 4.9,
    reviews: 42,
    imageUrl:
      "https://images.priceoye.pk/realme-t100-wireless-earbuds-pakistan-priceoye-tq6ud-270x270.webp",
    description:
      "Lightweight earbuds featuring advanced noise cancellation and seamless connectivity.",
  },
  {
    id: 10,
    name: "Anker R50i Earbuds",
    brand: "Anker",
    price: 4611,
    retailPrice: 7199,
    discount: "36% OFF",
    rating: 4.7,
    reviews: 31,
    imageUrl:
      "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44-270x270.webp",
    description:
      "Durable earbuds offering superb sound quality for music and calls.",
  },
  {
    id: 11,
    name: "Audionic Airbud 590  Earbuds",
    brand: "Audionic",
    price: 3499,
    retailPrice: 4999,
    discount: "58% OFF",
    rating: 4.8,
    reviews: 45,
    imageUrl:
      "https://images.priceoye.pk/audionic-airbud-590-wireless-earbuds-pakistan-priceoye-tpz2q-270x270.webp",
    description:
      "Affordable earbuds engineered for bass enthusiasts with ergonomic design.",
  },
  {
    id: 12,
    name: "Xiaomi Wireless Earbuds",
    brand: "Xiaomi", // Updated company name to Xiaomi
    price: 9499,
    retailPrice: 9499,
    discount: "58% OFF",
    rating: 4.8,
    reviews: 45,
    imageUrl:
      "https://images.priceoye.pk/audionic-airbud-590-wireless-earbuds-pakistan-priceoye-tpz2q-270x270.webp",
    description:
      "Durable and stylish earbuds offering superb sound quality for music and calls.",
  },
];

const Products = () => {
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
            <sup> Rs</sup>
            {product.price}
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
     
      <div className="w-100 mt-3">
      <div className="position-absolute" >
      <img className="w-100" style={{height:"82vh"}} src={backgroundImage} alt="" />
      </div>
        <div className="container">
          <div className="latest-product-box p-4 rounded">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center pl-heading mb-2">
              <h1 className="h5 text-white z-2">Latest Wireless Earbuds</h1>
              <span className="btn btn-light z-2">View All</span>
            </div>

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
              {products1.map(renderProductCard)}
            </Swiper>
          
            <Swiper
              className="pt-3"
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
              {products2.map(renderProductCard)}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
