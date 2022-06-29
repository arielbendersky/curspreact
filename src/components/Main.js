import ItemListContainer from "./ItemListContainer";
import { Routes,Route } from "react-router-dom";
import ItemDetailContainer from "./Itemdetailcontainer";
import Cart from "./CartWidget"


const Main = () => {
    return (
        <main>
            <div className="containerprodu">
            <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/categoria/:category" element={<ItemListContainer/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
            </div>
        </main>
    )
}

export default Main;
