import "./App.css";
// import Header from "./Components/Header/Header.jsx";
// import Items from "../../../Capstone-Project-master/Capstone-Project-master/src/Components/Items/Items.js";
import Items from './components/Items/Items.jsx'
import salebanner from "./assets Pic/cerve images sale.gif";
import Products from "./components/ProductsOne/Products.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Box } from "@mui/material";
import InfluencersVideos from "./components/RecomendedVideos/RecommandedVideos.jsx";
import BestWatch from './components/BestSellerWatch/bestWqatch.jsx'
import Footer from "./components/Footer/Footer.jsx";
import Services from "./components/OurService/OurService.jsx";
import BuyingCards from "./components/BuyReasonsCards/BuyReasons.jsx";
import BrandsReviews from "./components/MobileBrandsReviews/MobileBrands.jsx";
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
      <BrandsReviews />
      <BuyingCards />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
