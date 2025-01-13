import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/LayoutSectio/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/LoginPage/login";
import Register from "./components/RegisterPage/register";
import TrackOrder from "./components/TrackMyOrder/TrackOrder";
import Profile from "./components/ProfileSection/Profile";
import AddProfile from './components/ProfileSection/AddProfile';
import ProductOne from "./components/ProductsOne/Products";
import ProductDetails from "./components/ProductsOne/ProductDetail";
import Delivery from "./components/Delivery/Delivery";
// import Product from "./components/productsSection/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "LoginPage",
        element: <Login />,
      },
      {
        path: "RegisterPage",
        element: <Register />,
      },
      {
        path: "TrackOrderPage",
        element: <TrackOrder />,
      },
      {
        path: "ProfileSection",
        element: <Profile />,
      },
      {
      path: "addprofile",
      element:<AddProfile />,
      },
      {
        path: "productsOne",
        element: <ProductOne />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "DeliveryPage",
        element: <Delivery />,
      },
      {
        path: "Trackorder",
        element: <TrackOrder />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
