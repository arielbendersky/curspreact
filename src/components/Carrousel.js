import flyer1 from "../assets/img/flyer1.png";
import flyer2 from "../assets/img/flyer2.png";

const carrousel = () => {
return(
    <>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={flyer2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={flyer1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={flyer2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br></br>
<br></br>


</>
)
}
export default carrousel;
