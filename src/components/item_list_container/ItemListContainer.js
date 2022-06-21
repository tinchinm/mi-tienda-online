import React, { useState, useEffect } from "react";
import Item from "../item/Item";

const ItemListContainer = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, []);

  return (
    <div className="card">
      {albums.map((album) => (
        <Item key={album.id} info={album}/>
      ))}
    </div>
  );
};

export default ItemListContainer;
