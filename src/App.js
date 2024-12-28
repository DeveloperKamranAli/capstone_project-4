import './App.css';
// import Header from "./Components/Header/Header.jsx";
import Items from './components/Items/Items.jsx';
import salebanner from "./assets Pic/cerve images sale.gif";
import Products from "./components/ProductsOne/Products.jsx";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules

import { Box } from '@mui/material';
import InfluencersVideos from './components/InfluencersVideos/InfluencersVideos.jsx';
import Footer from './components/Footer/Footer.jsx';
import OurService from './components/OurService/OurService.jsx';
import BuyingReasons from './components/BuyingReasons/BuyingReasons.jsx';
import BrandsAndReviews from './components/BrandsAndReviews/BrandsAndReviews.jsx';
import Slider from './components/Slider/Slider.jsx';
// import SellingProducts from './Components/SellingProducts/SellingProducts.jsx';

function App() {
//   // Define the products array here
//   const products = [
//     { id: 1, name: 'Product 1', description: 'This is the description for Product 1.' },
//     { id: 2, name: 'Product 2', description: 'This is the description for Product 2.' },
//     { id: 3, name: 'Product 3', description: 'This is the description for Product 3.' },
//     { id: 4, name: 'Product 4', description: 'This is the description for Product 4.' },
//     { id: 5, name: 'Product 5', description: 'This is the description for Product 5.' },
//     { id: 6, name: 'Product ', description: 'This is the description for Product 6.' },
//     // Add more products as needed
//   ];

  return (
    <div style={{ backgroundColor: "#F1F3F6" }}>
        <div>
          {/* Header Component */}
          {/* <Header /> */}

          {/* Items Component */}
          <Items />

          <Slider />

          {/* Sale Banner */}
          <Box className="container mt-4">
            <img className="img-fluid bg-transparent" src={salebanner} alt="Sale Banner" />
          </Box>

     <Products/>
        
        </div>

        <InfluencersVideos />

        {/* <SellingProducts/> */}
        <BrandsAndReviews />
        <BuyingReasons />
        <OurService />
        <Footer />
    
    </div>
  );
}

export default App;




// import './App.css';
// // import Hero from './components/HeroSection/Hero';
// // import ProductsSection from './components/productsSection/products'
// // import BestWatch from './components/BestSellerWatch/bestWqatch'




// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
