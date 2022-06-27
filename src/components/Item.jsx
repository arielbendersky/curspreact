import React from "react";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({id,nombre,precio,image}) =>{
    return(
           
            <div key={id} className="carts">
                <div>
                    <img src={image} />
                    <p><span>{precio}</span>$</p>
                </div> 
                <p className="title">{nombre}</p>
                <br></br>
                <Link className="agregarcarrito material-symbols-outlined" to={`/item/${id}`}> Agregar al carrito</Link>
            </div>
    )
}

export default Item






























/*import rizen from "../assets/img/rizen.jpg";
import ryzen5 from "../assets/img/ryzen5.jpg";
import corei7 from "../assets/img/corei7.jpg";
import reducir from "./itemCount";
import aumentar from "./itemCount";
import agregarcarrito from "./itemCount";
import contador from "./itemCount"



const item = () => {
    return(
        <>
        <div className="containerproductos">
            <div class="products">
            <div class="carts">
                <div>
                    <img src={rizen} />
                    <p><span>45900</span>$</p>
                </div>
                <p class="title">Procesador AMD RYZEN 7 3700X</p>
                <p className="card-contador"> Cantidad:{contador}</p>
                <button className="card-contador-boton" onClick={reducir}>-</button>
                <button className="card-contador-boton" onClick={aumentar}>+</button>
                <button onClick={agregarcarrito} className="agregarcarrito material-symbols-outlined"> Agregar al carrito</button>
            </div>
            </div>
            <div class="products">
            <div class="carts">
                <div>
                    <img src={ryzen5} />
                    <p><span>29900</span>$</p>
                </div>
                <p class="title">Procesador AMD Ryzen 5 1600</p>
                <p className="card-contador"> Cantidad:{contador}</p>
                <button className="card-contador-boton" onClick={reducir}>-</button>
                <button className="card-contador-boton" onClick={aumentar}>+</button>
                <button onClick={agregarcarrito} className="agregarcarrito material-symbols-outlined"> Agregar al carrito</button>
            </div>
            </div>
            <div class="products">
            <div class="carts">
                <div>
                    <img src={corei7} />
                    <p><span>34800</span>$</p>
                </div>
                <p class="title">Procesador Intel Core i7 9700F</p>
                <p className="card-contador"> Cantidad:{contador}</p>
                <button className="card-contador-boton" onClick={reducir}>-</button>
                <button className="card-contador-boton" onClick={aumentar}>+</button>
                <button onClick={agregarcarrito} className="agregarcarrito material-symbols-outlined"> Agregar al carrito</button>
            </div>
            </div>
        </div>
        </>
    );

}

export default item*/