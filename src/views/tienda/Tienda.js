import React from "react";
import ItemListContainer from "../../components/item_list_container/ItemListContainer";
import ItemListCont from "../../components/item_list_cont/ItemListCont";

const tienda = () => {
  return (
    <div>
      <h1>"Bienvenido a la Tienda Virtual de FixIt"</h1>
      <div className="cards">
        <ItemListCont />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
};

export default tienda;
