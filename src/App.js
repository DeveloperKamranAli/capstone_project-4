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


