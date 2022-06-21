import React from "react";
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Greeting from "./components/greeting/Greeting";
import CardComponent from "./components/card_component/CardComponent";
import ItemListContainer from "./components/item_list_container/ItemListContainer";

const App = () => {
    return (
      <div className="App">
        <Header/>
        <Greeting saludo="Bienvenido a la Tienda Virtual de FixIt"/>
          <div className="cards">
            <CardComponent 
                producto="Asus Tuf GAMING Z690-PLUS WIFI"
                precio="$58.799,00"
                descripcion="Asus TUF Gaming Z690-Plus WIFI D4 es una opción sólida para una construcción Alder Lake más asequible, con soporte DDR4"
                img="https://mexx-img-2019.s3.amazonaws.com/Motherboard-1700-12Gen-Asus-Tuf-GAMING-Z690-PLUS-WIFI-DDR4_41563_2.jpeg"
                cant="10"
            />
            <CardComponent 
                producto="Motherboard Asus Tuf Gaming B660M-PLUS WIFI"
                precio="$28.799,00"
                descripcion="Socket Intel® LGA 1700: Listo para procesadores Intel® de 12a Gen. Solución de potencia mejorada: 10 + 1 fases de poder DrMOS"
                img="https://mexx-img-2019.s3.amazonaws.com/motherboard-asus-tuf-b660-plus-wifi-ddr4_41859_2.jpeg"
                cant="0"
            />
            <CardComponent 
                producto="Motherboard Asus ROG Strix Z590-E"
                precio="$86.245,00"
                descripcion="La placa base insignia ROG Strix Z590-E Gaming WiFi está diseñada con una entrega de energía mejorada y una refrigeración optimizada para hacer frente a las demandas de los potentes procesadores Intel® Core ™"
                img="https://dlcdnwebimgs.asus.com/files/media/B7CBA71A-2549-4C30-843E-15189BB8E78D/V1/img/z590/kv/hero.png"
                cant="8"
            />
          </div>
          <div>
              <ItemListContainer />
          </div>
        <Footer/>
      </div>
    );
};

export default App;
