import React, { useState } from "react";
import { useParams } from "react-router";

import "./ItemDetailComponent.css";
import ItemDetailCard from "../../components/item_detail_card/itemDetailCard";
import ItemList from "../../Data"

const ItemDetailComponent = () => {
  
  let {id} = useParams();

  let [items] = useState(ItemList);

  const [product, setProduct] = useState([]);

  console.log(id);
  console.log(items);
  let prod = items.find(item => item.id === id);  // ESTO NO FUNCIONA
  console.log(prod);
  /* setProduct(prod); */

  return (
    <div className="charDescription">
      {/* <ItemDetailCard key={product.id} info={product} /> */}
    </div>
  );
};

export default ItemDetailComponent;
