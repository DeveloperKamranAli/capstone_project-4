import { Box, Typography } from "@mui/material";
import React from "react";

// mui icons 
import StarIcon from "@mui/icons-material/Star";

const products = [
  {
    title: "Anker Soundcore Liberty 4 NC Earbuds",
    img: "https://images.priceoye.pk/anker-soundcore-liberty-4-nc-earbuds-pakistan-priceoye-0cikw-500x500.webp",
    rating: 4.9,
    reviews: 18,
    price: 15799,
    originalPrice: 24000,
    discount: "34% OFF",
    main: true, // Indicates the main product
  },
  {
    title: "Xiaomi Smart Band 8 Active",
    img: "https://images.priceoye.pk/xiaomi-smart-band-8-active-pakistan-priceoye-np3x9-270x270.webp",
    rating: 4.9,
    reviews: 18,
    price: 15799,
    originalPrice: 24000,
    discount: "34% OFF",
  },
  {
    title: "Samsung Galaxy Buds 2 Pro",
    img: "https://images.priceoye.pk/samsung-galaxy-buds-2-pro-pakistan-priceoye-tp64b-270x270.webp",
    rating: 4.9,
    reviews: 18,
    price: 15799,
    originalPrice: 24000,
    discount: "34% OFF",
  },
  {
    title: "Xiaomi Poco Pad",
    img: "https://images.priceoye.pk/poco-pad-8gb-256gb-pakistan-priceoye-teakg-270x270.webp",
    rating: 4.9,
    reviews: 18,
    price: 15799,
    originalPrice: 24000,
    discount: "34% OFF",
  },
  {
    title: "Zeblaze Btalk 2 Calling Watch",
    img: "https://images.priceoye.pk/zeblaze-btalk-2-calling-watch-pakistan-priceoye-8kbwa-270x270.webp",
    rating: 4.9,
    reviews: 18,
    price: 15799,
    originalPrice: 24000,
    discount: "34% OFF",
  },
];

const BestSellers = () => {
  return (
    <div className="container my-4">
      {/* Section Header */}
      <div className="text-center mb-4">
        <Typography variant="h5" className="mb-2">
          Best Sellers
        </Typography>
        <Typography variant="subtitle2" className="text-muted">
          Get the best prices in town
        </Typography>
      </div>

      {/* Main Content */}
      <div className="row g-4">
        {products.map((product, index) =>
          product.main ? (
            <div className="col-lg-5" key={index}>
              <div className="bg-white p-4 rounded shadow h-100">
                <Typography variant="body" className="mb-3 fw-semibold">
                  {product.title}
                </Typography>
                <div className="text-center mt-3 mb-2">
                  <img
                    className="img-fluid mb-3"
                    style={{ maxHeight: "400px" }}
                    src={product.img}
                    alt={product.title}
                  />
                  <div className="d-flex align-items-center rounded-3 py-1 px-2 bg-warning-subtle">
                    <Typography className="d-flex align-items-center me-2">
                      <StarIcon className="fs-4 text-warning" /> {product.rating}
                    </Typography>
                    <Typography className="text-muted">
                      {product.reviews} Reviews
                    </Typography>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <Typography className="fw-semibold" style={{ fontSize: "16px" }}>
                      <sup>Rs</sup> {product.price.toLocaleString()}
                    </Typography>
                    <Typography
                      className="text-decoration-line-through text-secondary"
                      style={{ fontSize: "13px" }}
                    >
                      <sup>Rs</sup> {product.originalPrice.toLocaleString()}
                    </Typography>
                  </div>
                  <div className="badge bg-info-subtle text-info">{product.discount}</div>
                </div>
              </div>
            </div>
          ) : null
        )}

        {/* Secondary Products */}
        <div className="col-lg-7">
          <div className="row g-3">
            {products
              .filter((product) => !product.main)
              .map((product, index) => (
                <div className="col-md-6" key={index}>
                  <div className="bg-white p-3 rounded shadow h-100">
                    <Typography variant="body" className="fw-semibold mb-2">
                      {product.title}
                    </Typography>
                    <div className="text-center">
                      <img
                        className="img-fluid mb-2"
                        style={{ maxHeight: "150px" }}
                        src={product.img}
                        alt={product.title}
                      />
                    </div>
                    <div className="d-flex align-items-center w-50 py-1 rounded-3 px-2 bg-warning-subtle">
                      <Typography className="d-flex me-2">
                        <StarIcon className="fs-5 text-warning" /> {product.rating}
                      </Typography>
                      <Typography className="text-muted" style={{ fontSize: "13px" }}>
                        {product.reviews} Reviews
                      </Typography>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <Typography className="fw-semibold" style={{ fontSize: "16px" }}>
                          <sup>Rs</sup> {product.price.toLocaleString()}
                        </Typography>
                        <Typography
                          className="text-decoration-line-through text-secondary"
                          style={{ fontSize: "13px" }}
                        >
                          <sup>Rs</sup> {product.originalPrice.toLocaleString()}
                        </Typography>
                      </div>
                      <div className="badge bg-info-subtle text-info">{product.discount}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;



// import { Box, Typography } from "@mui/material";
// import React from "react";

// // mui icons 
// import StarIcon from "@mui/icons-material/Star";

// const BestSellers = () => {
//   return (
//     <div className="container my-4">
//       {/* Section Header */}
//       <div className="text-center mb-4">
//         <Typography variant="h5" className="mb-2">
//           Best Sellers
//         </Typography>
//         <Typography variant="subtitle2" className="text-muted">
//           Get the best prices in town
//         </Typography>
//       </div>

//       {/* Main Content */}
//       <div className="row g-4">
//         {/* Main Product */}
//         <div className="col-lg-5">
//           <div className="bg-white p-4 rounded shadow h-100">
//             <Typography variant="body" className="mb-3 fw-semibold">
//               Anker Soundcore Liberty 4 NC Earbuds
//             </Typography>
//             <div className="text-center mt-3 mb-2">
//               <img
//                 className="img-fluid mb-3"
//                 style={{ maxHeight: "400px" }}
//                 src="https://images.priceoye.pk/anker-soundcore-liberty-4-nc-earbuds-pakistan-priceoye-0cikw-500x500.webp"
//                 alt="Anker Soundcore Liberty 4 NC Earbuds"
//               />
//                <div className="d-flex align-items-center rounded-3 py-1 px-2 bg-warning-subtle">
//                 <Typography className="d-flex align-items-center me-2"><StarIcon className="fs-4 text-warning text-warning" /> 4.9</Typography>
//                 <Typography className="text-muted">
//                   18 Reviews
//                 </Typography>
//               </div>
//             </div>
           
//             <div className="d-flex align-items-center justify-content-between mb-3">
//             <div>
//                 <Typography className="fw-semibold" style={{ fontSize: "16px" }}>
//                 <sup>Rs</sup> 15,799
//                 </Typography>
//                 <Typography
//                   className="text-decoration-line-through text-secondary"
//                   style={{ fontSize: "13px" }}
//                 >
//                  <sup>Rs</sup> 24,000
//                 </Typography>
//               </div>
//               <div className="badge bg-info-subtle text-info">34% OFF</div>
//             </div>
//           </div>
//         </div>

//         {/* Secondary Products */}
//         <div className="col-lg-7">
//           <div className="row g-3">
//             {/* Card 1 */}
//             <div className="col-md-6">
//               <div className="bg-white p-3 rounded shadow h-100">
//                 <Typography variant="body" className="fw-semibold mb-2">
//                   Xiaomi Smart Band 8 Active
//                 </Typography>
//                 <div className="text-center">
//                   <img
//                     className="img-fluid mb-2"
//                     style={{ maxHeight: "150px" }}
//                     src="https://images.priceoye.pk/xiaomi-smart-band-8-active-pakistan-priceoye-np3x9-270x270.webp"
//                     alt="Xiaomi Smart Band 8 Active"
//                   />
//                 </div>
//                 <div className="d-flex align-items-center w-50 py-1 rounded-3 px-2 bg-warning-subtle">
//                 <Typography className="d-flex me-2"><StarIcon className="fs-5 text-warning " /> 4.9</Typography>
//                 <Typography className="text-muted" style={{ fontSize: "13px" }}>
//                   18 Reviews
//                 </Typography>
//               </div>
//               <div className="d-flex align-items-center justify-content-between mb-3">
//             <div>
//                 <Typography className="fw-semibold" style={{ fontSize: "16px" }}>
//                 <sup>Rs</sup> 15,799
//                 </Typography>
//                 <Typography
//                   className="text-decoration-line-through text-secondary"
//                   style={{ fontSize: "13px" }}
//                 >
//                   <sup>Rs</sup> 24,000
//                 </Typography>
//               </div>
//               <div className="badge bg-info-subtle text-info">34% OFF</div>
//             </div>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="col-md-6">
//               <div className="bg-white p-3 rounded shadow h-100">
//                 <Typography variant="body" className="fw-semibold mb-2">
//                   Samsung Galaxy Buds 2 Pro
//                 </Typography>
//                 <div className="text-center">
//                   <img
//                     className="img-fluid mb-2"
//                     style={{ maxHeight: "150px" }}
//                     src="https://images.priceoye.pk/samsung-galaxy-buds-2-pro-pakistan-priceoye-tp64b-270x270.webp"
//                     alt="Samsung Galaxy Buds 2 Pro"
//                   />
//                 </div>
//                 <div className="d-flex align-items-center w-50 py-1 rounded-3 px-2 bg-warning-subtle">
//                 <Typography className="d-flex me-2"><StarIcon className="fs-5 text-warning " /> 4.9</Typography>
//                 <Typography className="text-muted" style={{ fontSize: "13px" }}>
//                   18 Reviews
//                 </Typography>
//               </div>
//                 <div className="d-flex align-items-center justify-content-between mb-3">
//             <div>
//                 <Typography className="fw-semibold" style={{ fontSize: "16px" }}>
//                 <sup>Rs</sup> 15,799
//                 </Typography>
//                 <Typography
//                   className="text-decoration-line-through text-secondary"
//                   style={{ fontSize: "13px" }}
//                 >
//                    <sup>Rs</sup> 24,000
//                 </Typography>
//               </div>
//               <div className="badge bg-info-subtle text-info">34% OFF</div>
//             </div>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="col-md-6">
//               <div className="bg-white p-3 rounded shadow h-100">
//                 <Typography variant="body" className="fw-semibold mb-2">
//                   Xiaomi Poco Pad
//                 </Typography>
//                 <div className="text-center">
//                   <img
//                     className="img-fluid mb-2"
//                     style={{ maxHeight: "150px" }}
//                     src="https://images.priceoye.pk/poco-pad-8gb-256gb-pakistan-priceoye-teakg-270x270.webp"
//                     alt="Xiaomi Poco Pad"
//                   />
//                 </div>
//                 <div className="d-flex align-items-center w-50 py-1 rounded-3 px-2 bg-warning-subtle">
//                 <Typography className="d-flex me-2"><StarIcon className="fs-5 text-warning " /> 4.9</Typography>
//                 <Typography className="text-muted" style={{ fontSize: "13px" }}>
//                   18 Reviews
//                 </Typography>
//               </div>
//                 <div className="d-flex align-items-center justify-content-between mb-3">
//             <div>
//                 <Typography className="fw-semibold" style={{ fontSize: "16px" }}>
//                 <sup>Rs</sup> 15,799
//                 </Typography>
//                 <Typography
//                   className="text-decoration-line-through text-secondary"
//                   style={{ fontSize: "13px" }}
//                 >
//                   <sup>Rs</sup> 24,000
//                 </Typography>
//               </div>
//               <div className="badge bg-info-subtle text-info">34% OFF</div>
//             </div>
//               </div>
//             </div>

//             {/* Card 4 */}
//             <div className="col-md-6">
//               <div className="bg-white p-3 rounded shadow h-100">
//                 <Typography variant="body" className="fw-semibold mb-2">
//                   Zeblaze Btalk 2 Calling Watch
//                 </Typography>
//                 <div className="text-center">
//                   <img
//                     className="img-fluid mb-2"
//                     style={{ maxHeight: "150px" }}
//                     src="https://images.priceoye.pk/zeblaze-btalk-2-calling-watch-pakistan-priceoye-8kbwa-270x270.webp"
//                     alt="Zeblaze Btalk 2 Calling Watch"
//                   />
//                 </div>
//                 <div className="d-flex align-items-center w-50 py-1 rounded-3 px-2 bg-warning-subtle">
//                 <Typography className="d-flex me-2"><StarIcon className="fs-5 text-warning " /> 4.9</Typography>
//                 <Typography className="text-muted" style={{ fontSize: "13px" }}>
//                   18 Reviews
//                 </Typography>
//               </div>
//                 <div className="d-flex align-items-center justify-content-between mb-3">
//             <div>
//                 <Typography className="fw-semibold" style={{ fontSize: "16px" }}>
//                 <sup>Rs</sup> 15,799
//                 </Typography>
//                 <Typography
//                   className="text-decoration-line-through text-secondary"
//                   style={{ fontSize: "13px" }}
//                 >
//                   <sup>Rs</sup> 24,000
//                 </Typography>
//               </div>
//               <div className="badge bg-info-subtle text-info">34% OFF</div>
//             </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSellers;
