import React, { useState } from "react";
import { useParams } from "react-router";

import "./ItemDetailComponent.css";
import ItemDetailCard from "../../components/item_detail_card/itemDetailCard";
import ItemList from "../../Data"

const ItemDetailComponent = () => {
  
  let {id} = useParams();

  let [items] = useState(ItemList);

  console.log(id);
  
  let prod = items.find(item => item.id === 6);  // ESTO NO FUNCIONA PORQUE NO RECIBE UN ID
  
  return (
    <div className="charDescription">
      <ItemDetailCard key={prod.id} info={prod} />
    </div>
  );
};

export default ItemDetailComponent;
