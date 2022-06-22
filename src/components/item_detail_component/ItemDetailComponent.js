import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ItemDetailComponent.css";
import ItemDetailCard from "../item_detail_card/itemDetailCard";

const ItemDetailComponent = () => {
  let id_char = 1;

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios(
      `https://fedeperin-harry-potter-api.herokuapp.com/personajes/${id_char}`
    ).then((res) => setCharacter(res.data));
  }, [id_char]);

  return (
    <div className="charDescription">
      <ItemDetailCard key={character.id} info={character} />
    </div>
  );
};

export default ItemDetailComponent;
