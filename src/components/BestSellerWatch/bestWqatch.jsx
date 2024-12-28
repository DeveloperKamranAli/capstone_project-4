import { colors, Container } from "@mui/material";
import React from "react";

// mui icons
import StarIcon from "@mui/icons-material/Star";

// import essets images
import watchs from "../../assets Pic/bestSeller Watch 1.webp";

const bestWatch = () => {
  return (
    <>
      <div className="container">
        {/* Header Section */}
        <div className="d-flex flex-column justify-content-center align-items-center mb-4 mt-5">
          <h1 className="h4">Best Seller</h1>
          <span className="">Get the best prices in town</span>
        </div>
        <div className="row">
          <div className="col-md-4 shadow p-1 mb-5 bg-body-tertiary rounded   ">
            <div className="card border">
              <div className="card-body">
                <p>Zeblaze Btalk 2 Calling Watch</p>
                <div className="ms-5 ">
                  <img
                    className="img-fluid d-flex align-items-center"
                    src={watchs}
                    alt=""
                  />
                  <div className="d-flex">
                    <StarIcon className="text-warning me-1" />
                    <p>
                      5.0 <span style={{ fontSize: "14px" }}>4 Reviews</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mx-3">
                <div>
                  <p className="lh-1 text-black">
                    <sup>Rs</sup>7,899
                  </p>
                  <p
                    className="lh-1 text-decoration-line-through text-body-secondary"
                  >
                    <sup>Rs</sup>7,899
                  </p>
                </div>
                <div className="text-success">
                  <span className="bg-info-subtle p-1 rounded-3">12%OFF</span>
                </div>
              </div>
            </div>
          </div>

<div className="row">
<div className="col-md-4 shadow p-1 mb-5 bg-body-tertiary rounded   ">
            <div className="card border">
              <div className="card-body">
                <p>Zeblaze Btalk 2 Calling Watch</p>
                <div className="ms-5 ">
                  <img
                    className="img-fluid d-flex align-items-center"
                    src={watchs}
                    alt=""
                  />
                  <div className="d-flex">
                    <StarIcon className="text-warning me-1" />
                    <p>
                      5.0 <span style={{ fontSize: "14px" }}>4 Reviews</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mx-3">
                <div>
                  <p className="lh-1 text-black">
                    <sup>Rs</sup>7,899
                  </p>
                  <p
                    className="lh-1 text-decoration-line-through text-body-secondary"
                  >
                    <sup>Rs</sup>7,899
                  </p>
                </div>
                <div className="text-success">
                  <span className="bg-info-subtle p-1 rounded-3">12%OFF</span>
                </div>
              </div>
            </div>
          </div>
          

</div>

<div className="row">
  
</div>

        </div>
      </div>
    </>
  );
};

export default bestWatch;
