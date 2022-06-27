import React from "react";
import Item from "./Item";

function Itemlist({products}){
    return(
        products.map(p=>
            
            <Item
            id= {p.id}
            precio = {p.precio}
            nombre = {p.nombre}
            image = {p.image}
            key= {p.id}  
            stock = {p.stock}          
            
            />
            )
    )   
}
export default Itemlist

