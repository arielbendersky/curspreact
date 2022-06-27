import React, { useEffect, useState } from "react";
import { customFetch, getProductsByCategory } from "../utils/Customfetch";
import { useParams } from "react-router-dom";
import ItemList from "./Itemlist";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      customFetch().then((response) => {
        setItems(response);
      });
    } else {
      getProductsByCategory(category).then((response) => {
        setItems(response);
      });
    }
  }, [category]);

  return <ItemList products={items} />;
}

export default ItemListContainer;


/*
const ItemListContainer = (props) => {
     return(
        <>
        <h2>{props.saludo}</h2>
        <ItemCount initial={1} stock={5}/>
        <Item/>
        </>
      );
  
  }
*/
