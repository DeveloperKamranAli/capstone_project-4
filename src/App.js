import "./App.css";
import salebanner from "./assets Pic/cerve images sale.gif";
import Products from "./components/ProductsOne/Products.jsx";
import ProductTwo from './components/productTwo/ProductTwo.jsx';
import ProductThree from './components/productsThree/ProductsThree.jsx';
import ProductFour from './components/productsFour/productsFour.jsx'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Box } from "@mui/material";
import InfluencersVideos from "./components/RecomendVideos/RecommandedVideos.jsx";
import BestWatch from './components/BestSellerWatch/bestWqatch.jsx'
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/OurService/OurService.jsx";
import BuyingCards from "./components/BuyReasonsCards/BuyReasons.jsx";
import BrandsReviews from "./components/MobileBrandsReviews/MobileBrands.jsx";
import Items from './components/Items/Items.jsx'
import Slider from "./components/Slider/Slider.jsx";

function App() {
  return (
    <div style={{ backgroundColor: "#F1F3F6" }}>
      <div>
        {/* Items Component */}
        <Items />

        <Slider />

        {/* Sale Banner */}
        <Box className="container mt-4">
          <img
            className="img-fluid bg-transparent"
            src={salebanner}
            alt="Sale Banner"
          />
        </Box>

        <Products />
      </div>

      <InfluencersVideos />

      <BestWatch/>
      <ProductTwo />
      <ProductThree />
      <BrandsReviews />
      <BuyingCards />
      <ProductFour />
      <Services />
      <Footer />
    </div>
  );
}

export default App;



// {
//   "name": "castone-project-4",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@emotion/react": "^11.14.0",
//     "@emotion/styled": "^11.14.0",
//     "@mui/icons-material": "^6.3.0",
//     "@mui/material": "^6.3.0",
//     "@mui/styled-engine-sc": "^6.3.0",
//     "@reduxjs/toolkit": "^2.5.0",
//     "bootstrap": "^5.3.3",
//     "cra-template": "1.2.0",
//     "react": "^19.0.0",
//     "react-dom": "^19.0.0",
//     "react-hook-form": "^7.54.2",
//     "react-redux": "^9.2.0",
//     "react-router-dom": "^7.1.1",
//     "react-scripts": "5.0.1",
//     "react-toastify": "^9.1.3",
//     "styled-components": "^6.1.13",
//     "swiper": "^11.1.15"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": [
//     ">0.2%",
//     "not dead",
//     "not op_mini all",
//     "last 1 chrome version",
//     "last 1 firefox version",
//     "last 1 safari version"
//   ],
//   "devDependencies": {
//     "@babel/plugin-proposal-private-property-in-object": "^7.21.11"
//   }
// }
