import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import backgroundImage from '../../assets Pic/section-earbuds-bg-image.png'
import "swiper/swiper-bundle.css"; // Import Swiper styles

const products7 = [
  {
    id: 37,
    name: "VG0T Blade Trimmer",
    brand: "VGR",
    price: 2559,
    retailPrice: 5500,
    discount: "53% OFF",
    rating: 3.7,
    reviews: 71,
    imageUrl:
      "https://images.priceoye.pk/vgr-zero-t-blade-trimmer-v-030-pakistan-priceoye-c2lke-270x270.webp",
    description:
      "Precision blade trimmer for clean and sharp styling with a compact design.",
  },
  {
    id: 38,
    name: "Stainless Steel Blade Trimmer",
    brand: "VGR",
    price: 2499,
    retailPrice: 6000,
    discount: "58% OFF",
    rating: 4.7,
    reviews: 79,
    imageUrl:
      "https://images.priceoye.pk/vgr-stainless-steel-blade-trimmer-v-031-pakistan-priceoye-qyjpu-270x270.webp",
    description:
      "Durable stainless steel trimmer for effortless grooming and precision cuts.",
  },
  {
    id: 39,
    name: "Personal Groomer Kit PG180",
    brand: "Remington",
    price: 5899,
    retailPrice: 6900,
    discount: "15% OFF",
    rating: 5.0,
    reviews: 1,
    imageUrl:
      "https://images.priceoye.pk/remington-pilot-personal-groomer-kit-pg180-pakistan-priceoye-i31xi-270x270.webp",
    description:
      "All-in-one grooming kit for professional and home use with multiple attachments.",
  },
  {
    id: 40,
    name: "Grooming Kit Shaving Machine",
    brand: "Kemei",
    price: 3699,
    retailPrice: 7000,
    discount: "47% OFF",
    rating: 4.0,
    reviews: 29,
    imageUrl:
      "https://images.priceoye.pk/kemei-7-in-1-grooming-kit-shaving-machine-set-km-580-pakistan-priceoye-xu1d2-270x270.webp",
    description:
      "Multi-purpose grooming kit for versatile shaving and trimming needs.",
  },
  {
    id: 41,
    name: "Hair and Beard Trimmer",
    brand: "Kemei",
    price: 1799,
    retailPrice: 3700,
    discount: "53% OFF",
    rating: 4.1,
    reviews: 102,
    imageUrl:
      "https://images.priceoye.pk/kemei-km-6330-hair-beard-trimmer-3-in-1-pakistan-priceoye-kge42-270x270.webp",
    description:
      "Compact and lightweight trimmer ideal for hair and beard grooming.",
  },
  {
    id: 42,
    name: "Graphite Series  Kit",
    brand: "Remington",
    price: 11399,
    retailPrice: 11900,
    discount: "4% OFF",
    rating: 5.0,
    reviews: 1942,
    imageUrl:
      "https://images.priceoye.pk/remington-g4-graphite-series-multi-grooming-kit-pg4000-pakistan-priceoye-9nbmc-270x270.webp",
    description:
      "Premium multi-grooming kit with graphite-coated blades for superior performance.",
  },
];

const products8 = [
  {
    id: 43,
    name: "Rechargeable Electric Shaver",
    brand: "Kemei",
    price: 1749,
    retailPrice: 3700,
    discount: "53% OFF",
    rating: 4.2,
    reviews: 102,
    imageUrl:
      "https://images.priceoye.pk/kemei-3-in-1-rechargeable-electric-shaver-trimmer-km-6332-pakistan-priceoye-l0abn-270x270.webp",
    description:
      "Ergonomic electric shaver with rechargeable battery for hassle-free grooming.",
  },
  {
    id: 44,
    name: "USB Charging Grooming Kit",
    brand: "Kemei",
    price: 1849,
    retailPrice: 3000,
    discount: "38% OFF",
    rating: 4.5,
    reviews: 72,
    imageUrl:
      "https://images.priceoye.pk/dinglong-professional-beard-and-hair-trimmer-rf-609-pakistan-priceoye-gu6ki-270x270.webp",
    description:
      "Portable grooming kit with USB charging for convenience and easy handling.",
  },
  {
    id: 45,
    name: "Professional Hair Clipper",
    brand: "Dinglong",
    price: 2259,
    retailPrice: 4500,
    discount: "50% OFF",
    rating: 4.6,
    reviews: 88,
    imageUrl:
      "https://images.priceoye.pk/dinglong-professional-beard-and-hair-trimmer-rf-609-pakistan-priceoye-gu6ki-270x270.webp",
    description:
      "Professional-grade hair clipper with sharp blades and powerful motor.",
  },
  {
    id: 46,
    name: "Multi-Purpose Grooming Kit",
    brand: "Kemei",
    price: 3559,
    retailPrice: 7000,
    discount: "49% OFF",
    rating: 4.8,
    reviews: 143,
    imageUrl:
      "https://images.priceoye.pk/dingling-professional-rf-608b-pakistan-priceoye-47iad-270x270.webp",
    description: "High-performance grooming kit for all-around grooming needs.",
  },
  {
    id: 47,
    name: "Advanced Shaving Machine",
    brand: "Mi",
    price: 4499,
    retailPrice: 7500,
    discount: "40% OFF",
    rating: 4.9,
    reviews: 111,
    imageUrl:
      "https://images.priceoye.pk/mi-hair-clipper-pakistan-priceoye-nwoxh-270x270.webp",
    description:
      "State-of-the-art shaving machine with smooth operation and durability.",
  },
  {
    id: 48,
    name: "Professional Hair Clipper 702B",
    brand: "Kemei",
    price: 3999,
    retailPrice: 8000,
    discount: "50% OFF",
    rating: 5.0,
    reviews: 142,
    imageUrl:
      "https://images.priceoye.pk/kemei-km-702b-hair-clipper-pakistan-priceoye-qw191-270x270.webp",
    description:
      "Advanced hair clipper with precision trimming and efficient performance.",
  },
];

const Products4 = () => {
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
      <div className="w-100 mt-5">
      <div className="position-absolute" >
      <img className="w-100" style={{height:"82vh"}} src={backgroundImage} alt="" />
      </div>
        <div className="container">
          <div className="latest-product-box p-4 rounded">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center pl-heading mb-4">
              <h1 className="h5 text-white z-1">Latest Trimmers Shaver</h1>
              <span className="btn btn-light z-1">View All</span>
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
              {products7.map(renderProductCard)}
            </Swiper>

            {/* Swiper Section */}
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
              {products8.map(renderProductCard)}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products4;
