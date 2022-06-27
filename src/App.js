import Navbar from "./components/Navbar";
import Main from './components/Main';
import "./estilo.css"
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from "./components/Carrousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fawhatsapp} from "@fortawesome/free-solid-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import ItemDetailContainer from "./components/Itemdetailcontainer";
import  {BrowserRouter, Route, Routes} from "react-router-dom"


const App = () =>{
  return(
      <BrowserRouter>
        <Navbar/> 
        <Carrousel/>
        <Main />
        <Routes>
          <Route path="/detail/:id" element={<ItemDetailContainer/>} ></Route>
        </Routes>
        <a href="https://api.whatsapp.com/send?phone=+541138725280" className="btn-wsp" target="_blank">
        <i><FontAwesomeIcon icon={faWhatsapp} /></i></a>
        <Footer/>
        </BrowserRouter>
  
    );

}
export default App;
