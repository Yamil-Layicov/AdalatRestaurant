import "./menuPage.scss";
import img from "./coverImgs/menuImg.png";
import { useQuery } from "@tanstack/react-query";
import api from "../../admin/api/posts";
import pdf from '../../components/menu/pdf/Menu.pdf';
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const MenuPage = () => {
  const { isLoading: isBannerLoading, data } = useQuery({
    queryKey: ["banners/menu"],
    queryFn: () => api.get("banners/menu"),
  });

  const { isLoading: isMenuLoading, data: dataMenu } = useQuery({
    queryKey: ["menu"],
    queryFn: () => api.get("menu"),
  });

  if (isBannerLoading || isMenuLoading) {
    return (
      <div className="spinner">
        <SyncLoader size={15} color={"red"} loading={true} />
      </div>
    );
  }

  return (
    <div className="mainMenu">
      <div
        className="menuPage"
        style={{
          backgroundImage: `url(${data?.data.image})`,
          width: "100%",
          height: "70vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
          {dataMenu?.data
            .filter((item) => item.category.name === "Əsas yeməklər")
            .map((food) => (
              <div className="foodBox" key={food?.id}>
                <div className="img">
                  <img src={food?.image} alt="" />
                </div>
                <p className="title">{food?.title}</p>
                <p className="line"></p>
                <p className="price">{food?.price} AZN</p>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="boxContent">
          <div className="boxHeaderMenu">
            <h1>Ləzzətli menyu</h1>
            <p>Kabablar, qazan yeməkləri və içkilər</p>
            <div className="backColor"></div>
          </div>
        </div>
        <h1 className="mainMenuTitle">Kabablar və içkilər</h1>
        <div className="menuOptions">
          {dataMenu?.data
            .filter((item) => item.category.name === "Kabablar və içkilər")
            .map((food) => (
              <div className="foodBox" key={food?.id}>
                <div className="img">
                  <img src={food?.image} alt="" />
                </div>
                <p className="title">{food?.title}</p>
                <p className="line"></p>
                <p className="price">{food?.price} AZN</p>
              </div>
            ))}
        </div>
      </div>
      <div className="menuBtn">
        <Link
          style={{ textDecoration: "none", color: "white", paddingLeft: "6px" }}
          to={pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Menyu
        </Link>
      </div>
    </div>
  );
};

export default MenuPage;
