import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import "./ItemDetailComponent.css";
import ItemDetailCard from "../../components/item_detail_card/itemDetailCard";

const ItemDetailComponent = () => {
  let {id} = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios(
      `https://fedeperin-harry-potter-api.herokuapp.com/personajes/${id}`
    ).then((res) => setCharacter(res.data));
  }, [id]);

  return (
    <div className="charDescription">
      <ItemDetailCard key={character.id} info={character} />
    </div>
  );
};

export default ItemDetailComponent;
