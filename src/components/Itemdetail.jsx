import React from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";


const ItemDetail = ({ id,nombre, stock, precio, image }) => {
  const [booleano, setbBooleano] = useState(true);
  const { addItem } = useContext(CartContext);

  const addToCart = (quantity) => {
    addItem(id,nombre, stock, precio, image, quantity);
    setbBooleano(false);
  };
  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <img src={image} alt={image} />
      </div>
      <div className="item-detail-text">
        <h1>{nombre}</h1> <br></br>
        <h2>${precio}</h2>
        <h3>Stock: {stock}</h3>
        {booleano ? (
          <ItemCount initial={1} onAdd={addToCart} stock={stock} />
        ) : (
        <div className="btn-container">
          <Link className="btn-detalle-compra" to={`/cart`}>
            Terminar Compra
          </Link>
        </div>
        )}
      </div>
    </div>
  );
;
};
export default ItemDetail;


/*const itemdetail = ({item}) => {
   <>
    <br></br>
    <br></br>
    <br></br>
                    <div className="products" style={{}}>
            <div key={item.id} className="carts">
                <div>
                    <img src={item.image} />
                    <p><span>{item.precio}</span>$</p>
                </div>
                <p className="title">{item.nombre}</p>

               
                <ItemCount initial={1} stock={item.stock}/>
                <button onClick={item.agregarcarrito} className="agregarcarrito material-symbols-outlined"> Agregar al carrito</button>
            </div>
            </div>
    </>
    

}
*/