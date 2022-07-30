import React, { useState, useEffect } from "react";

//    Firebase
import { db } from "../../firebase/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

//  Components
import "./ItemListCont.css";
import CardComponent from "../card_component/CardComponent";
import Spinner from "../spinner/spinner";
import CategoryMenu from "../category_menu/CategoryMenu"

const ItemListCont = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    const q = query(collection(db, "product-list"));
    const querySnapshot = await getDocs(q);
    const res = [];

    querySnapshot.forEach((doc) => {
      res.push({ ...doc.data(), id: doc.id });
    });
    setItems(res);
  };

  useEffect(() => {
    getItems();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <div>
          <div>
            <CategoryMenu />
          </div>
          <div className="cards">
            {items.map((item) => (
              <div key={item.id}>
                <CardComponent item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListCont;
