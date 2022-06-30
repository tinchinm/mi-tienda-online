import React, { useState } from "react";
import './ItemListCont.css'

//  Components
import ItemList from "../../Data"
import CardComponent from "../card_component/CardComponent";

const ItemListCont = () => {
  const [items] = useState(ItemList);
  return (
    <div className="card">
      {items.map((item, idx) => (
        <div key={idx} >
            <CardComponent item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemListCont;
