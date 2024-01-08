import "./about.scss";
import img from "./img1.jpg";
import { useQuery } from "@tanstack/react-query";
import api from '../../admin/api/posts';

const About = () => {

  const { isLoading, data } = useQuery({
    queryKey: ["about"],
    queryFn: () => api.get("about"),
  });

  console.log(data?.data);

  return (
    <div className="about">
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="right">
        <h1>Haqqımızda</h1>
        <p>
          Ədalət restoranı 2019-cu ildən fəaliyyət göstərir. <br /> <br /> Təamlarımız mahir
          aşpazlar tərəfindən sizə özəl olaraq hazırlanır. Bizim üçün mühüm olan
          yalnız dadlı yeməklər təqdim etmək deyil, həm də sizə ən yaxşı xidməti
          göstərməkdir. Yaşıllıqlarla əhatə olunmuş milli dizayndakı 27 ədəd
          kabinetlərimizdən zövq alacaqsınız. Həmçinin, xüsusi tədbirlərinizi
          qeyd etmək üçün geniş və komfortlu zallarımızda mövcuddur. <br /><br /> Ədalət
          Restoranında rahat və səmimi mühitdə öz sevdiklərinizlə birlikdə milli
          mətbəximizin ən dadlı yeməklərini dadıb, ən xoş anları yaşayacaqsınız.
        </p>
      </div>
    </div>
  );
};

export default About;
