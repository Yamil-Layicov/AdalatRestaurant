import "./features.scss";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from '../../admin/api/posts';

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

  const { isLoading, data } = useQuery({
    queryKey: ["features"],
    queryFn: () => api.get("features"),
  });


  return (
    <div className="features">
      <div onClick={moveToMenu} className="menu box">
        <div>
          <h1>{data?.data[0].title}</h1>
          <p>{data?.data[0].content}</p>
          <img src={data?.data[0].image} alt="" />
        </div>
      </div>
      <div className="delivery box">
        <div>
          <h1>ƏN DADLI ƏTLƏR</h1>
          <p> Xüsusi ətlərdən hazırlanan dadlı yeməklər.</p>
          <img src={data?.data[1].image} alt="" />
        </div>
      </div>
      <div onClick={moveToGallery} className="gallery box">
        <div>
          <h1>FƏRAH MƏKAN</h1>
          <p>Xoş anlar keçirəcəyiniz məkanımız.</p>
          <img src={data?.data[2].image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
