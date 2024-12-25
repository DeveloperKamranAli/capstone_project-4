import React from "react";
// imges assets
import Mobiles1 from "../../assets Pic/mobiles Elec-1.svg";
import Mobiles2 from "../../assets Pic/mobiles Elec-2.svg";
import Mobiles3 from "../../assets Pic/mobiles Elec-3.svg";
import Mobiles4 from "../../assets Pic/mobiles Elec-4.svg";
import Mobiles5 from "../../assets Pic/mobiles Elec-5.svg";
import Mobiles6 from "../../assets Pic/mobiles Elec-6.svg";
import Mobiles7 from "../../assets Pic/mobiles Elec-7.svg";
import Mobiles8 from "../../assets Pic/mobiles Elec-8.svg";
// slider images home
import Slider1 from "../../assets Pic/priceoye-slider-1.jpg";
import Slider2 from "../../assets Pic/priceoye-slider-2.jpg";
import Slider3 from "../../assets Pic/priceoye-slider-3.jpg";

import SaleImg from '../../assets Pic/cerve images sale.gif'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";

const HomePage = () => {
  return (
    <>
      <nav className="w-100 bg-whight shadow p-2 mb-3 bg-body rounded">
        <div className="container overflow-x-hidden d-flex justify-content-around align-items-center mt-1 ">
          <div className="img-fluid p-2">
            <img className="w-75" src={Mobiles1} alt="" />
          </div>
          <div className="img-fluid p-2">
            <img className="w-75" src={Mobiles2} alt="" />
          </div>
          <div className="img-fluid p-2">
            <img className="w-75" src={Mobiles3} alt="" />
          </div>
          <div className="img-fluid p-2">
            <img className="w-75" src={Mobiles4} alt="" />
          </div>
          <div className="img-fluid p-2">
            <img className="w-75" src={Mobiles5} alt="" />
          </div>
          <div className="img-fluid p-2">
            <img className="w-75" src={Mobiles6} alt="" />
          </div>
          <div className="img-fluid p-2">
            <img className="w-75" src={Mobiles7} alt="" />
          </div>
          <div className="img-fluid p-2">
            <img className="w-75" src={Mobiles8} alt="" />
          </div>
        </div>
      </nav>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        style={{ display: "flex", marginBottom:'10px'}}
      >
        <Box className="d-flex mb-3">
          <SwiperSlide className="border">
            <img className="img-fluid" src={Slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="border">
            <img className="img-fluid" src={Slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="border">
            <img className="img-fluid" src={Slider3} alt="" />
          </SwiperSlide>
        </Box>
      </Swiper>

    <div className="container-fluid px-lg-5 mt-lg-3 mt-sx-3"> 
   
        <img className="px-lg-5 img-fluid" src={SaleImg} alt="" />

    </div>



    </>
  );
};

export default HomePage;
