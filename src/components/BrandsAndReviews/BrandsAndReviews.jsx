import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Samsung from "../../assets Pic/samsung.svg";
import Infinix from "../../assets Pic/infinix.svg";
import OPPO from "../../assets Pic/oppo.svg";
import Xiaomi from "../../assets Pic/xiaomi.svg";
import Vivo from "../../assets Pic/vivo.svg";
import Tecno from "../../assets Pic/tecno.svg";
import Realme from "../../assets Pic/realme.svg";
import itel from "../../assets Pic/itel.svg";
import Apple from "../../assets Pic/apple.svg";
import Nokia from "../../assets Pic/nokia.svg";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'; // Import Swiper styles

const images = [
  { id: 1, src: 'https://images.priceoye.pk/review/9735/1550978-oa6g7-270x270.jpeg', alt: 'Image 1' },
  { id: 2, src: 'https://images.priceoye.pk/review/7519/1548431-f7d2z-270x270.jpg', alt: 'Image 2' },
  { id: 3, src: 'https://images.priceoye.pk/review/6035/1544097-l38rf-270x270.jpg', alt: 'Image 3' },
  { id: 4, src: 'https://images.priceoye.pk/review/9534/1447769-ifo7a-270x270.jpg', alt: 'Image 4' },
  { id: 5, src: 'https://images.priceoye.pk/review/7515/1529390-koc38-270x270.jpg', alt: 'Image 5' },
  { id: 6, src: 'https://images.priceoye.pk/review/6725/1482458-6fnlj-270x270.jpg', alt: 'Image 6' },
  { id: 7, src: 'https://images.priceoye.pk/review/9420/1551708-swvie-270x270.jpeg', alt: 'Image 7' },
  { id: 8, src: 'https://images.priceoye.pk/review/7802/1549116-89aui-270x270.jpeg', alt: 'Image 8' },
  { id: 9, src: 'https://images.priceoye.pk/review/7710/1547639-8hir5-270x270.jpg', alt: 'Image 9' },
  { id: 10, src: 'https://images.priceoye.pk/review/7493/1537427-ffox5-270x270.jpg', alt: 'Image 10' },
];

const BrandsAndReviews = () => {
  return (
    <Box className="container mt-5">
      {/* Shop by Price Section */}
      <Box className="d-flex justify-content-between align-items-center mb-4">
        <Typography variant="h6" className="fw-bold">
          Shop by Price
        </Typography>
        <Button variant="outlined" className="text-primary">
          View All
        </Button>
      </Box>

      {/* Price Range Section */}
      <Box className="price-ranges mt-4">
        {/* Responsive Buttons for Price Ranges */}
        <Box className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 g-2">
          {[
            'Below Rs. 15,000',
            'Rs. 15,000 - Rs. 25,000',
            'Rs. 25,000 - Rs. 40,000',
            'Rs. 40,000 - Rs. 60,000',
            'Rs. 60,000 - Rs. 80,000',
            'Rs. 80,000 - Rs. 100,000',
            'Rs. 100,000 - Rs. 150,000',
            'Above 150,000',
          ].map((priceRange, index) => (
            <div className="col">
              <Button
                key={index}
                variant="contained"
                sx={{
                  backgroundColor: '#FFF348',
                  color: '#000',
                  '&:hover': {
                    backgroundColor: '#FFEB3B', // Darker shade on hover
                  },
                  width: '100%', // Ensures button fills the column
                }}
              >
                {priceRange}
              </Button>
            </div>
          ))}
        </Box>
      </Box>


      <Box className="d-flex justify-content-between align-items-center mb-4 mt-5">
        <Typography variant="h6" className="fw-bold">
          Shop by Brand
        </Typography>
        <Button variant="outlined" className="text-primary">
          View All
        </Button>
      </Box>

      <Box className="d-flex justify-content-evenly flex-wrap">
        {[
          { src: Samsung, name: "Samsung" },
          { src: Infinix, name: "Infinix" },
          { src: OPPO, name: "OPPO" },
          { src: Xiaomi, name: "Xiaomi" },
          { src: Vivo, name: "Vivo" },
          { src: Tecno, name: "Tecno" },
          { src: Realme, name: "Realme" },
          { src: itel, name: "itel" },
          { src: Apple, name: "Apple" },
          { src: Nokia, name: "Nokia" },
        ].map((brand, index) => (
          <div key={index} className="d-flex flex-column align-items-center m-2">
            <img
              src={brand.src}
              alt={brand.name}
              className="img-fluid"
              style={{ width: '70px', height: '70px' }} // Fixed size for the image
            />
            <div className="mt-2" style={{ fontSize: '12px' }}>
              <b>{brand.name}</b>
            </div>
          </div>
        ))}
      </Box>


      <Box className="my-5">

        <Typography className='text-center' variant='h5'>Customer Reviews</Typography>
        <Typography className='text-center' variant='body1'>What our Customers say about Priceoye.pk</Typography>
      </Box>

      <Swiper
        spaceBetween={15} // Matches the provided code spacing
        loop={true} // Enables continuous looping
        pagination={{ clickable: true }} // Enables pagination
        breakpoints={{
          320: {
            slidesPerView: 2, // 2 slides for small screens
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 3, // 3 slides for slightly larger screens
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4, // 4 slides for tablets
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6, // 6 slides for laptops
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 8, // 8 slides for larger screens
            spaceBetween: 15,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="swiper-content d-flex justify-content-center align-items-center">
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => console.log(`Review ID: ${image.id}`)}
                className="rounded border"
                style={{
                  width: '152px',
                  height: '157px',
                  objectFit: 'contain',
                  cursor: 'pointer',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


<Box>
  
</Box>
    </Box>


  );
};

export default BrandsAndReviews;
