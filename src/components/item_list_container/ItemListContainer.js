import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import axios from 'axios'

const ItemListContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
      axios('https://fedeperin-harry-potter-api.herokuapp.com/personajes')
        .then((res) => setCharacters(res.data))
  }, []);

  return (
    <div className="card">
      {characters.map((characters) => (
        <Item key={characters.id} info={characters}/>
      ))}
    </div>
  );
};

export default ItemListContainer;
