import "./features.scss";
import { useNavigate } from "react-router-dom";

const Features = () => {

  const navigate = useNavigate()

  const moveToMenu = () => {
    navigate('/menu')
    window.scrollTo({
      top:0
    })
  };
  const moveToGallery = () => {
    navigate('/gallery')
    window.scrollTo({
      top:0
    })
  };

  return (
    <div className="features">
      <div onClick={moveToMenu} className="menu box">
        <div>
          <h1>our menu</h1>
          <p>View Our Specialites</p>
        </div>
      </div>
      <div className="delivery box">
        <div>
          <h1>delivery</h1>
          <p>Home delivery or take away food</p>
        </div>
      </div>
      <div onClick={moveToGallery} className="gallery box">
        <div>
          <h1>Inside Foores</h1>
          <p>View the Gallery</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
