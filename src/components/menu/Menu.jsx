import "./menu.scss";
import { useNavigate, Link } from "react-router-dom";
import food1 from './foodsImgs/menyu-1.jpg';
import food2 from './foodsImgs/menu-2.jpg';
import food3 from './foodsImgs/menu-3.jpg';
import food4 from './foodsImgs/menu-4.jpg';
import food5 from './foodsImgs/menu-5.jpg';
import food6 from './foodsImgs/menyu-6.jpg';
import food7 from './foodsImgs/menu-7.jpg';
import food8 from './foodsImgs/menu-8.jpg';
import pdf from './pdf/Menu.pdf'

const Menu = () => {
  const navigate = useNavigate();

  const routeLink = () => {
    navigate("/menu");
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="menu">
      <h1 style={{textAlign:"center", }}>Sizin üçün seçdiklərimiz</h1>
      <div className="boxContent">
        <div className="boxHeaderMenu">
          <h1>Ləzzətli menyu</h1>
          <p>Kabablar, qəlyanaltılar və içkilər</p>
          <button onClick={routeLink}>Daha ətraflı</button>
          <div className="backColor"></div>
        </div>
      </div>
      
      <div className="menuOptions">
        <div className="foodBox">
          <div className="img">
            <img
              src={food1}
              alt=""
            />
          </div>
          <p className="title">Döymə</p>
          <p className="line"></p>
          <p className="price">9 AZN</p>
        </div>
        <div className="foodBox">
          <div className="img">
            <img
              src={food2}
              alt=""
            />
          </div>
          <p className="title">Şah Plov</p>
          <p className="line"></p>
          <p className="price">40 AZN</p>
        </div>
        <div className="foodBox">
          <div className="img">
            <img
              src={food3}
              alt=""
            />
          </div>
          <p className="title">Steyk </p>
          <p className="line"></p>
          <p className="price">15 AZN</p>
        </div>
        <div className="foodBox">
          <div className="img">
            <img
              src={food4}
              alt=""
            />
          </div>
          <p className="title">Toyuq kababı</p>
          <p className="line"></p>
          <p className="price">6 AZN</p>
        </div>
        <div className="foodBox">
          <div className="img">
            <img
              src={food5}
              alt=""
            />
          </div>
          <p className="title">Julyen</p>
          <p className="line"></p>
          <p className="price">7 AZN</p>
        </div>
        <div className="foodBox">
          <div className="img">
            <img
              src={food6}
              alt=""
            />
          </div>
          <p className="title">Düşbərə  </p>
          <p className="line"></p>
          <p className="price">4.5 AZN</p>
        </div>
        <div className="foodBox">
          <div className="img">
            <img
              src={food7}
              alt=""
            />
          </div>
          <p className="title">Paytaxt salatı</p>
          <p className="line"></p>
          <p className="price">5 AZN</p>
        </div>
        <div className="foodBox">
          <div className="img">
            <img
              src={food8}
              alt=""
            />
          </div>
          <p className="title">Sezar salatı</p>
          <p className="line"></p>
          <p className="price">10 AZN</p>
        </div>
      </div>
      {/* <div className="menuBtn">
         <Link style={{textDecoration:"none", color:"white", paddingLeft:"6px"}} to={pdf} target="_blank" rel="noopener noreferrer">Menyu</Link>
      </div> */}
    </div>
  );
};

export default Menu;
