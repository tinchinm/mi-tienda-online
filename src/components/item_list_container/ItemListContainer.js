import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios("https://fedeperin-harry-potter-api.herokuapp.com/personajes").then(
      (res) => setCharacters(res.data)
    );
  }, []);

  return (
    <div className="card">
      {characters.map((characters) => (
        <div key={characters.id} >
          <Link to={`/itemDetail/${characters.id}`}>
            <Item info={characters} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
