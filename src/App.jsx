import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrderProvider } from "./contexts/OrderContext";
import MainPage from "./pages/Main";
import MenuPage from "./pages/Menu";
import OrderPage from "./pages/Order";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <OrderProvider>
      <Router basename="/potest">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
};

export default App;
