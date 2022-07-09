import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//    Firebase
import { db } from "../../firebase/FirebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";

//    Components
import "./ItemDetailComponent.css";
import ItemDetailCard from "../../components/item_detail_card/itemDetailCard";
import Spinner from "../../components/spinner/spinner";

const ItemDetailComponent = () => {
  
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  let {id} = useParams();

  

  useEffect(() => {
    const getItem = async () => {
    const q = query(collection(db, "product-list"), where(documentId(),"==", id));
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
  }, [id])

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : ( 
        <div className="charDescription">
            {data.map((data) => (
              <ItemDetailCard key={data.id} info={data} />  
            ))}
        </div>
      )}
    </div>
  );
};

export default ItemDetailComponent;
