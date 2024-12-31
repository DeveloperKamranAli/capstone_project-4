import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

// mui icons
import StarIcon from "@mui/icons-material/Star";
import OurService from "../OurService/OurService";

const productData = [
  {
    id: 1,
    name: "Nothing Bunds Pro 2",
    priceoye: "Priceoye Price",
    price: 13.499,
    disscount: "33% OFF",
    Availability: "Availability",
    Stock: "Stock",
    left: "Only 3 left",
    Colors: "Colors",
    stars: 3,
    InstallmentPlan: "https://static.priceoye.pk/icons/calender.svg",
    imageUrl: "https://images.priceoye.pk/nothing-buds-2-pro-pakistan-priceoye-9mcqy.jpg",
    imge1:
      "https://images.priceoye.pk/nothing-buds-2-pro-pakistan-priceoye-oz9ut.jpg",
    imge2:
      "https://images.priceoye.pk/nothing-buds-2-pro-pakistan-priceoye-jtd7y.jpg",
    imge3:
      "https://images.priceoye.pk/nothing-buds-2-pro-pakistan-priceoye-4b2io.jpg",
    imge4:
      "https://images.priceoye.pk/nothing-buds-2-pro-pakistan-priceoye-4oo9t.jpg",
  },
];

const ProductDetail = () => {
  return (
    <>
      <Box className="Regular shadow mb-4">
        <Container>
          <Box className="py-1">
            <Typography className="text-secondary " variant="body">
              Wireless Earbuds > CMF > Nothing Buds Pro 2
            </Typography>
            <Typography className="me-4">
              Buy Nothing Buds Pro 2 Price in Pakistan
            </Typography>
          </Box>
        </Container>
      </Box>

      {productData.map((product) => (
        <Box key={product.id} className="py-4">
          <Container>
            <Box className="d-flex flex-wrap  mb-3">
              <Typography>
                <img
                  src={product.imge1}
                  alt={product.priceoye}
                  className="img-fluid border border-3 rounded-5 py-5 px-3"
                  style={{ width: "45vh" }}
                />
              </Typography>
              <Box className="ms-3" style={{ width: "45vh" }}>
                <Typography variant="h5">
                  {product.name} <br />
                  <span className="fs-6 mt-3 d-flex align-items-center">
                    {Array.from({ length: product.stars }).map((_, index) => (
                      <StarIcon key={index} sx={{ color: "rgb(255,193,7)" }} />
                    ))}
                    <Typography className="ms-2"> 4.6 | 6 Reviews </Typography>
                  </span>
                </Typography>
                <Box className="d-flex justify-content-between align-items-center fs-5 mt-3">
                  <Typography>
                    {product.priceoye} <br />
                    <sup>Rs </sup>
                    {product.price}
                  </Typography>
                  <Typography>
                    {product.Availability} <br />
                    {product.Stock}
                  </Typography>
                </Box>
                <Typography className="mt-3">
                  <sup>Rs</sup>
                  <span className="me-3">20.000</span>
                  <span
                    className="text-success p-2 rounded-4"
                    style={{ backgroundColor: "#FBF7EB" }}
                  >
                    {product.disscount}
                  </span>
                </Typography>

              <Box className="mt-3">
              <Typography>
                {product.Colors}
              </Typography>
              <Typography className="mt-1" style={{ width: "47vh" }}>
              <img className="img-fluid border py-2 rounded-3 me-1" src={product.imge3} alt="" style={{ width: "11vh" }} />
                <img className="img-fluid border py-2 rounded-3 me-1" src={product.imge1} alt="" style={{ width: "11vh" }} />
                <img className="img-fluid border py-2 rounded-3 me-1" src={product.imge2} alt="" style={{ width: "11vh" }} />
                <img className="img-fluid border py-2 rounded-3" src={product.imge4} alt="" style={{ width: "11vh" }} />
              </Typography>
              </Box>
              <Box className="border d-flex p-2 mt-3 rounded-3 gap-2 align-items-center">
                  <img src={product.InstallmentPlan} alt="" style={{width:"5vh"}}/>
                  <Typography>Installment Plans
                  Pakistan</Typography>
              </Box>
              <Typography className="d-flex justify-content-center mt-3" style={{ width: "47vh" }}>
              <Button className="me-3" style={{width:"20vh", backgroundColor:"#f88b2a", color:"white"}}>Add to Cart</Button>
              <Button style={{width:"20vh", backgroundColor:"#48afff", color:"white"}}>Compare</Button>
              </Typography>

              </Box>


            </Box>
          </Container>
        </Box>
    
      ))}

      <Box className="py-3 shadow p-3 mb-2 bg-body-tertiary rounded">
        <OurService />
      </Box>

    </>
  );
};

export default ProductDetail;
