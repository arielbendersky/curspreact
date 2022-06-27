
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../utils/Customfetch";
import ItemDetail from "./Itemdetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    getProductsById(parseInt(id)).then((response) => {
      setProduct(response);
    });
  }, []);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;