import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles



const products = [
    {
        id: 1,
        name: "Audionic Airbud 550",
        brand: "Audionic",
        price: 3811,
        retailPrice: 9990,
        discount: "62% OFF",
        rating: 4.8,
        reviews: 538,
        imageUrl: "https://images.priceoye.pk/audionic-airbud-550-pakistan-priceoye-o6fve-270x270.webp",
        description: "High-quality wireless earbuds with a comfortable fit and impressive sound clarity."
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
        imageUrl: "https://images.priceoye.pk/anker-r50i-earbuds-pakistan-priceoye-csv44-270x270.webp",
        description: "Experience premium audio quality with long battery life and fast charging capabilities."
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
        imageUrl: "https://images.priceoye.pk/xiaomi-redmi-buds-6-lite-wireless-earbuds-pakistan-priceoye-c4dfa-270x270.webp",
        description: "Lightweight earbuds featuring advanced noise cancellation and seamless connectivity."
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
        imageUrl: "https://images.priceoye.pk/qcy-t13-anc-2-pakistan-priceoye-uvlbc-270x270.webp",
        description: "Affordable earbuds with active noise cancellation and crystal-clear audio quality."
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
        imageUrl: "https://images.priceoye.pk/redmi-buds-6-active-wireless-earbuds-pakistan-priceoye-h6kkk-270x270.webp",
        description: "Durable and stylish earbuds offering superb sound quality for music and calls."
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
        imageUrl: "https://images.priceoye.pk/soundpeats-engine4-wireless-earbuds-pakistan-priceoye-40ifu-270x270.webp",
        description: "Engineered for bass enthusiasts with dual drivers and ergonomic design."
    },


    


 
];


const Products = () => {


  return (
  <div>

<div className="w-100 mt-5" style={{ backgroundColor: "#F94F9A" }}>
      <div className="container">
        <div className="">
          <div className="latest-product-box p-4 rounded">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center pl-heading mb-4">
              <h1 className="h4 text-white">Latest Wireless Earbuds</h1>
              <span className="btn btn-light">View All</span>
            </div>
  
            {/* Swiper Section */}
            <Swiper className='pt-5'
              slidesPerView={4} // Default for lg screens
              spaceBetween={15}
              breakpoints={{
                1200: {
                  slidesPerView: 4, // Large screens (lg)
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2, // Medium screens (md)
                  spaceBetween: 15,
                },
                336: {
                  slidesPerView: 1, // Small screens (sm)
                  spaceBetween: 10,
                },
              }}
            >
             
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                
                  <div
                    className="productBox mb-3 position-relative d-flex flex-column align-items-start p-3 border rounded bg-white"
                    onClick={() => (`/product-details/${product.id}`)}
                    style={{
                      cursor: "pointer",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {/* Sale Badge */}
                    <img
                      src="https://images.priceoye.pk/badges/priceoye-sale-20241212-w3sbv.png"
                      alt="Sale Badge"
                      className="position-absolute"
                      style={{
                        top: "10px",
                        right: "10px",
                        width: "90px",
                        height: "70px",
                      }}
                    />
                    <a
                      href={product.link}
                      className="text-decoration-none text-dark w-100"
                      onClick={(e) => e.stopPropagation()} // Prevent navigating away
                    >
                      {/* Image */}
                      <div className="text-center mb-3">
                        <Link to="/ProductsOne"><img
                          src={product.imageUrl}
                          alt={product.name}
                          className="img-fluid"
                          style={{ maxWidth: "120px", maxHeight: "120px" }}
                        /></Link>
                      </div>
  
                      {/* Rating */}
                      <div className="user-rating-box mb-2">
                        <div
                          className="d-flex align-items-center justify-content-start bg-light p-2 rounded"
                          style={{ backgroundColor: "#FBF7EB" }}
                        >
                          <img
                            src="https://static.priceoye.pk/images/stars.svg"
                            alt="Rating Star"
                            width="10"
                            height="10"
                            className="me-1"
                          />
                          <span className="mx-1">{product.rating}</span>
                          <span className="small">{product.reviews} Reviews</span>
                        </div>
                      </div>
  
                      {/* Details */}
                      <div className="detail-box text-start">
                        <div className="">{product.name}</div>
                        <div className="price-box h5 mt-1 text-success">
                          <sup>Rs </sup>
                          {product.price}
                        </div>
                        <div className="price-diff d-flex justify-content-between align-items-center mt-1">
                          <div className="text-danger text-decoration-line-through">
                            <sup>Rs </sup>
                            {product.retailPrice}
                          </div>
                          <p className="text-success mb-0">{product.discount}</p>
                        </div>
                      </div>
                    </a>
                  </div>


                  <div
                    className="productBox position-relative d-flex flex-column align-items-start p-3 border rounded bg-white"
                    onClick={() => (`/product-details/${product.id}`)}
                    style={{
                      cursor: "pointer",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {/* Sale Badge */}
                    <img
                      src="https://images.priceoye.pk/badges/priceoye-sale-20241212-w3sbv.png"
                      alt="Sale Badge"
                      className="position-absolute"
                      style={{
                        top: "10px",
                        right: "10px",
                        width: "90px",
                        height: "70px",
                      }}
                    />
                    <a
                      href={product.link}
                      className="text-decoration-none text-dark w-100"
                      onClick={(e) => e.stopPropagation()} // Prevent navigating away
                    >
                      {/* Image */}
                      <div className="text-center mb-3">
                      <Link to="/ProductsOne"><img
                          src={product.imageUrl}
                          alt={product.name}
                          className="img-fluid"
                          style={{ maxWidth: "120px", maxHeight: "120px" }}
                        /></Link> 
                      </div>
  
                      {/* Rating */}
                      <div className="user-rating-box mb-2">
                        <div
                          className="d-flex align-items-center justify-content-start bg-light p-2 rounded"
                          style={{ backgroundColor: "#FBF7EB" }}
                        >
                          <img
                            src="https://static.priceoye.pk/images/stars.svg"
                            alt="Rating Star"
                            width="10"
                            height="10"
                            className="me-1"
                          />
                          <span className="mx-1">{product.rating}</span>
                          <span className="small">{product.reviews} Reviews</span>
                        </div>
                      </div>
  
                      {/* Details */}
                      <div className="detail-box text-start">
                        <div className="">{product.name}</div>
                        <div className="price-box h5 mt-1 text-success">
                          <sup>Rs </sup>
                          {product.price}
                        </div>
                        <div className="price-diff d-flex justify-content-between align-items-center mt-1">
                          <div className="text-danger text-decoration-line-through">
                            <sup>Rs </sup>
                            {product.retailPrice}
                          </div>
                          <p className="text-success mb-0">{product.discount}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                 
                </SwiperSlide>
              ))}
              
            </Swiper>
            


            
          </div>
        </div>
      </div>
    </div>

 

  </div>
  );
  
};  

  
  export default Products;