import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//    Firebase
import { db } from "../../firebase/FirebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

//    Components
import "./Category.css";
import CardComponent from "../card_component/CardComponent";
import Spinner from "../spinner/spinner";
import CategoryMenu from "../category_menu/CategoryMenu"

const Category = () => {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);
  
    let {categoria} = useParams();
  
    
  
    useEffect(() => {
      const getItem = async () => {
      const q = query(collection(db, "product-list"), where("categoria","==", categoria));
      const querySnapshot = await getDocs(q);
      const res = [];
  
      querySnapshot.forEach((doc) => {
        res.push({ ...doc.data(), id: doc.id });
      });
      setData(res);
      }
      getItem()
  
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, [categoria])

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
            <div className="card">
                {data.map((data) => (
                <CardComponent key={data.id} item={data} />  
                ))}
            </div>
        </div>
      )}
    </div>
  )
}

export default Category