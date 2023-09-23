import "./gallery.scss";
import img from "./menuImg.png";

const Gallery = () => {
  return (
    <div className="mainGallery">
      <div className="menuPage">
        <div className="menu">
          <div className="img">
            <img src={img} />
          </div>
          <h1>Qalereya</h1>
          <p>2005-ci ildən ləzzətli və dadlı yeməklər bişiririk</p>
        </div>
      </div>
      <div className="galleryTitle">
         <h1 className="mainMenuTitle">Here some pictures</h1>
         <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
      </div>
    </div>
  );
};

export default Gallery;

