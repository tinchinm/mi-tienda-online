import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//     Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ItemProvider } from "./components/item_context/ItemContext";

//     Views
import Home from "./views/home/Home";
import Services from "./views/services/Services";
import Tienda from "./views/tienda/Tienda";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import ItemDetailComponent from "./views/item_detail_component/ItemDetailComponent";
import CartListCConditioner from "./views/cart_list_conditioner/CartListConditioner";
import Category from "./components/category/Category"
import ShopForm from "./views/shop_form/ShopForm";

const App = () => {
  return (
    <ItemProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/itemDetail/:id" element={<ItemDetailComponent />} />
            <Route path="/cartList" element={<CartListCConditioner />}/>
            <Route path="/category/:categoria" element={<Category />} />
            <Route path="/shop" element={<ShopForm />}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ItemProvider>
  );
};

export default App;
