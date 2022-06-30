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
          </Routes>
          <Footer />
        </div>
      </Router>
    </ItemProvider>
  );
};

export default App;
