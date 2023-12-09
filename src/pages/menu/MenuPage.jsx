import "./menuPage.scss";
import img from "./coverImgs/menuImg.png";
import food1 from './foodsImgs/img1.jpg';
import food2 from './foodsImgs/img2.jpg';
import food3 from './foodsImgs/img3.jpg';
import food4 from './foodsImgs/img4.jpg';
import food5 from './foodsImgs/img5.jpg';
import food6 from './foodsImgs/img6.jpg';
import food7 from './foodsImgs/img7.jpg';
import food8 from './foodsImgs/img8.jpg';
import food9 from './foodsImgs/img9.jpg';
import food10 from './foodsImgs/img10.jpg';
import food11 from './foodsImgs/img11.jpg';
import food12 from './foodsImgs/img12.jpg';
import food13 from './foodsImgs/img13.jpg';
import food14 from './foodsImgs/img14.jpg';
import food15 from './foodsImgs/img15.jpg';
import food16 from './foodsImgs/img16.jpg';


// import { Link } from "react-router-dom";
// import pdf from "./pdf/Menu.pdf";

const MenuPage = () => {

  // const routeLink = () => {
  //   navigate("/menu");
  //   window.scrollTo({
  //     top: 0,
  //   });
  // };

  return (
    <div className="mainMenu">
      <div className="menuPage">
        <div className="menu">
          <div className="img">
            <img src={img} />
          </div>
          <h1>Menyu</h1>
          <p>Dadlı və gözoxşayan təamlar</p>
        </div>
      </div>
      <div>
        <h1 className="mainMenuTitle">Əsas yeməklər</h1>
        <div className="menuOptions">
          <div className="foodBox">
            <div className="img">
              <img src={food1} alt="" />
            </div>
            <p className="title">Döymə</p>
            <p className="line"></p>
            <p className="price">9 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food2} alt="" />
            </div>
            <p className="title">Şah Plov</p>
            <p className="line"></p>
            <p className="price">40 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food3} alt="" />
            </div>
            <p className="title">Steyk </p>
            <p className="line"></p>
            <p className="price">15 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food4} alt="" />
            </div>
            <p className="title">Toyuq kababı</p>
            <p className="line"></p>
            <p className="price">6 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food5} alt="" />
            </div>
            <p className="title">Julyen</p>
            <p className="line"></p>
            <p className="price">7 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food6} alt="" />
            </div>
            <p className="title">Düşbərə </p>
            <p className="line"></p>
            <p className="price">4.5 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food7} alt="" />
            </div>
            <p className="title">Paytaxt salatı</p>
            <p className="line"></p>
            <p className="price">5 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food8} alt="" />
            </div>
            <p className="title">Sezar salatı</p>
            <p className="line"></p>
            <p className="price">10 AZN</p>
          </div>
        </div>
      </div>
      <div>
        <div className="boxContent">
          <div className="boxHeaderMenu">
            <h1>Ləzzətli menyu</h1>
            <p>Kabablar, qazan yeməkləri və içkilər</p>
            {/* <button onClick={routeLink}>Daha ətraflı</button> */}
            <div className="backColor"></div>
          </div>
        </div>
        <h1 className="mainMenuTitle">Kabablar və içkilər</h1>
        <div className="menuOptions">
        <div className="foodBox">
            <div className="img">
              <img src={food9} alt="" />
            </div>
            <p className="title">Dana basdırma </p>
            <p className="line"></p>
            <p className="price">9 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food10} alt="" />
            </div>
            <p className="title"> Tikə  </p>
            <p className="line"></p>
            <p className="price">8 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food11} alt="" />
            </div>
            <p className="title">Toyuq kabab </p>
            <p className="line"></p>
            <p className="price">6 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food12} alt="" />
            </div>
            <p className="title">Tərəvəz (mövsümü)</p>
            <p className="line"></p>
            <p className="price">1 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food13} alt="" />
            </div>
            <p className="title">Dolma  </p>
            <p className="line"></p>
            <p className="price">6 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food14} alt="" />
            </div>
            <p className="title">Quzu buğlama </p>
            <p className="line"></p>
            <p className="price">8 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food15} alt="" />
            </div>
            <p className="title">Hinduşka şabalıdlı</p>
            <p className="line"></p>
            <p className="price">12 AZN</p>
          </div>
          <div className="foodBox">
            <div className="img">
              <img src={food16} alt="" />
            </div>
            <p className="title">Mal əti buğlama </p>
            <p className="line"></p>
            <p className="price">8 AZN</p>
          </div>
        </div>
      </div>
      {/* <div className="menuBtn">
        <Link
          style={{ textDecoration: "none", color: "white", paddingLeft: "6px" }}
          to={pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Menyu
        </Link>
      </div> */}
    </div>
  );
};

export default MenuPage;
