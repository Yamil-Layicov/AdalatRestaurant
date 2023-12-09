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
          <h1>BİZİM MENYUMUZ</h1>
          <p> Ləzzətli təamlarımız.</p>
        </div>
      </div>
      <div className="delivery box">
        <div>
          <h1>ƏN DADLI ƏTLƏR</h1>
          <p> Xüsusi ətlərdən hazırlanan dadlı yeməklər.</p>
        </div>
      </div>
      <div onClick={moveToGallery} className="gallery box">
        <div>
          <h1>FƏRAH MƏKAN</h1>
          <p>Xoş anlar keçirəcəyiniz məkanımız.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
