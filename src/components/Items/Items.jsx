import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Box } from "@mui/system"; // Material-UI Box for styling

import mobile from "../../assets Pic/mobiles.svg";
import Earbuds from "../../assets Pic/wireless-earbuds.svg";
import Watches from "../../assets Pic/smart-watches.svg";
import Trimmer from "../../assets Pic/trimmers-shaver.svg";
import Power from "../../assets Pic/power-banks.svg";
import Chargers from "../../assets Pic/mobile-chargers.svg";
import Speakers from "../../assets Pic/bluetooth-speakers.svg";
import Tablets from "../../assets Pic/tablets.svg";
import Laptops from "../../assets Pic/laptops.svg";

const Items = () => {
  const items = [
    { img: mobile, label: "Mobiles" },
    { img: Earbuds, label: "Wireless Earbuds" },
    { img: Watches, label: "Smart Watches" },
    { img: Trimmer, label: "Trimmer Shaver" },
    { img: Power, label: "Power Banks" },
    { img: Chargers, label: "Wall Chargers" },
    { img: Speakers, label: "Bluetooth Speakers" },
    { img: Tablets, label: "Tablets" },
    { img: Laptops, label: "Laptops" },
  ];

  return (
    <>
    <Box className="border container-fluid shadow p-3 mb-3 bg-body-tertiary rounded">
    <Box className="container">
      <Swiper
        spaceBetween={15}
        slidesPerView="auto"
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1200: { slidesPerView: 6 },
        }}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                position: "relative",
                borderBottom: "2px solid transparent", // Default border
                "&:hover": {
                  backgroundColor: "#f0f0f0", // Light background color on hover
                  borderBottom: "2px solid skyblue", // Bolder border
                },
              }}
            >
              <img
                src={item.img}
                alt={item.label}
                style={{
                  width: "45px",
                  height: "37px",
                }}
              />
              <p
                className="mt-1"
                style={{
                  fontSize: "12px",
                }}
              >
                {item.label}
              </p>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    </Box>

    </>
  );
};

export default Items;
