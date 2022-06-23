import React from "react";
import ItemListContainer from "../../components/item_list_container/ItemListContainer";

const tienda = () => {
  return (
    <div>
      <h1>"Bienvenido a la Tienda Virtual de FixIt"</h1>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
};

export default tienda;
