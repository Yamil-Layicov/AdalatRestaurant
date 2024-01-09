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
import api from '../../admin/api/posts';
import TruncatedText from "../../helpers/TruncatedText";
import { useQuery } from "@tanstack/react-query";


const Menu = () => {
  const navigate = useNavigate();

  const routeLink = () => {
    navigate("/menu");
    window.scrollTo({
      top: 0,
    });
  };

  const { isLoading, data } = useQuery({
    queryKey: ["menu"],
    queryFn: () => api.get("menu"),
  });


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
        {data?.data && data.data.map(food => 
          <div className="foodBox" key={food.id}>
          <div className="img">
            <img
              src={food.image}
              alt=""
            />
          </div>
          <p className="title">{food.title}</p>
          <p className="line"></p>
          <p className="price">{food.price} AZN</p>
        </div>
        ) 
        }
      </div>
      {/* <div className="menuBtn">
         <Link style={{textDecoration:"none", color:"white", paddingLeft:"6px"}} to={pdf} target="_blank" rel="noopener noreferrer">Menyu</Link>
      </div> */}
    </div>
  );
};

export default Menu;
