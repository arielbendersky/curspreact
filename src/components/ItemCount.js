import { useState } from "react";

const ItemCount = ({stock,initial,onAdd}) => {
  const[contador,setcontador] = useState(initial)  
  const aumentar = () => {
    console.log("aumentar")
    if (contador < stock)
    setcontador(contador + 1)
  }
  const reducir = () => {
    console.log("reducir")
    if (contador > 1){
    setcontador(contador - 1)
  }}

  function confirm(e) {
    onAdd(contador);
  }
  
  
    return(
        <>
          <div className="contador">
          <h5 className="contadorr"> Cantidad: {contador}</h5>
          <button onClick={reducir}>-</button>
          <button onClick={aumentar}>+</button><br></br>
          <button className="btn-detalle-compra"  onClick={confirm}>Agregar al carrito</button>
          </div>
        </>
      );
  
  }

export default ItemCount;