import React from "react";
import ItemListCont from "../../components/item_list_cont/ItemListCont";

const tienda = () => {
  return (
    <div>
      <h1>"Bienvenido a la Tienda Virtual de FixIt"</h1>
      <div className="cards">
        <ItemListCont />
      </div>
    </div>
  );
};

export default tienda;
