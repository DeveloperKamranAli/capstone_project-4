import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

import iv1 from "../../videos/iv-1.mp4";
import iv2 from "../../videos/iv-2.mp4";
import iv3 from "../../videos/iv-3.mp4";
import iv4 from "../../videos/iv-4.mp4";
import iv5 from "../../videos/iv-5.mp4";
// import iv1 from "../../videos/iv-1.mp4";
// import iv2 from "../../videos/iv-1.mp4";
import iv8 from "../../videos/iv-8.mp4";
import iv9 from "../../videos/iv-9.mp4";
import iv10 from "../../videos/iv-10.mp4";

// import images
import productImage from "../../assets Pic/redmi-img.jpeg";
import productImage2 from "../../assets Pic/iv2-img.jpg";
import productImage3 from "../../assets Pic/iv-img-3.jpg";
import productImage4 from "../../assets Pic/iv-img-4.jpg";
import productImage5 from "../../assets Pic/iv-img-5.jpg";
import productImage6 from "../../assets Pic/iv-img-6.jpg";
import productImage7 from "../../assets Pic/iv-img-7.jpg";
import productImage8 from "../../assets Pic/iv-img-8.jpg";
import productImage9 from "../../assets Pic/iv-img-9.jpeg";
import productImage10 from "../../assets Pic/iv-img-10.jpg";

const InfluencersVideos = () => {
  const videoCards = [
    {
      video: iv1,
      image: productImage,
      title: "Redmi Watch 5 Lite",
      price: "11,699",
      oldPrice: "15,999",
      rating: "4.8",
      reviews: "4",
      discount: "27%",
    },
    {
      video: iv2,
      image: productImage2,
      title: "Anker A30i  Earbuds ",
      price: "7,200",
      oldPrice: "9,000",
      rating: "5.0",
      reviews: "0",
      discount: "20%",
    },
    {
      video: iv3,
      image: productImage3,
      title: "JS Watch 6 SmartWatch ",
      price: "4,799",
      oldPrice: "6,500",
      rating: "4.5",
      reviews: "",
      discount: "26%",
    },
    {
      video: iv4,
      image: productImage4,
      title: "Lenovo Livepods XT81 ",
      price: "11,999",
      oldPrice: "31,999",
      rating: "4.8",
      reviews: "8",
      discount: "63%",
    },
    {
      video: iv5,
      image: productImage5,
      title: "Zero Royale SmartWatch ",
      price: "11,699",
      oldPrice: "15,999",
      rating: "4.8",
      reviews: "4",
      discount: "27%",
    },
    {
      video: iv1,
      image: productImage6,
      title: "HUAWEI Band 9 ",
      price: "12,999",
      oldPrice: "17,999",
      rating: "4.7",
      reviews: "8",
      discount: "28%",
    },
    {
      video: iv2,
      image: productImage7,
      title: "Anker R50i Earbuds ",
      price: "9,499",
      oldPrice: "12,499",
      rating: "4.5",
      reviews: "12",
      discount: "24%",
    },
    {
      video: iv8,
      image: productImage8,
      title: "Itel S24 ",
      price: "14,499",
      oldPrice: "19,999",
      rating: "4.9",
      reviews: "10",
      discount: "30%",
    },
    {
      video: iv9,
      image: productImage9,
      title: "Apple AirPods  ",
      price: "9,499",
      oldPrice: "12,499",
      rating: "4.5",
      reviews: "12",
      discount: "24%",
    },
    {
      video: iv10,
      image: productImage10,
      title: "Audionic Airbud 550 ",
      price: "14,499",
      oldPrice: "19,999",
      rating: "4.9",
      reviews: "10",
      discount: "30%",
    },
  ];

  return (
    <Container className="mt-5">
      <Box className="text-center my-5">
        <Typography variant="h5">Loved and Recommended</Typography>
        <Typography variant="h6">
          Influencers talk about priceoye as a trusted brand
        </Typography>
      </Box>
      <Swiper
        slidesPerView={4} // Default slides for larger screens
        grid={{ rows: 1 }}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile (small screens)
          768: { slidesPerView: 3, spaceBetween: 15 }, // Tablets
          1024: { slidesPerView: 4, spaceBetween: 20 }, // Laptops and desktops
        }}
      >
        {videoCards.map((card, index) => (
          <SwiperSlide className="d-flex justify-content-center" key={index}>
            <Box
              sx={{
                width: "250px",
                height: "380px",
                borderRadius: "15px",
                overflow: "hidden",
                backgroundColor: "#F1F3F6",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                position: "relative",
                marginBottom: "20px",
              }}
            >
              <Box sx={{ height: "150px", position: "relative" }}>
                <video
                  autoPlay
                  muted
                  loop
                  style={{
                    width: "100%",
                    height: "160%",
                    objectFit: "cover",
                  }}
                >
                  <source src={card.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "170px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  zIndex: 10,
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: "70px", height: "70px" }}
                />
              </Box>
              <Box
                sx={{
                  padding: "20px 10px 10px",
                  textAlign: "center",
                  marginTop: "95px",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {card.title}
                </Typography>
                <Box sx={{ margin: "5px 0" }}>
                  <Typography
                    variant="body2"
                    sx={{ display: "inline", fontWeight: "bold" }}
                  >
                    Rs {card.price}
                  </Typography>{" "}
                  <Typography
                    variant="body2"
                    sx={{
                      display: "inline",
                      textDecoration: "line-through",
                      color: "gray",
                      marginLeft: "5px",
                    }}
                  >
                    Rs {card.oldPrice}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 10px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://static.priceoye.pk/images/stars.svg"
                      alt="Rating Star"
                      style={{
                        width: "12px",
                        height: "12px",
                        marginRight: "5px",
                      }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {card.rating}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginLeft: "5px", color: "gray" }}
                    >
                      {card.reviews} Reviews
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#d4f4e4",
                      color: "#28a74",
                      padding: "2px 8px",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    {card.discount} OFF
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default InfluencersVideos;
