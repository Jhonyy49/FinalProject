import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RegistePage from "./pages/RegistePage";
import ProductInfo from "./pages/ProductInfo";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productinfo/:productid" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistePage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// export const ProdectedRoutes = ({ children }) => {
//   if (localStorage.getItem("currentUser")) {
//     return children;
//   } else {
//     return <Navigate to="/register" />;
//   }
// };
