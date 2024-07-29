import "./about.scss";
import { useQuery } from "@tanstack/react-query";
import api from '../../admin/api/posts';
import TruncatedText from "../../helpers/TruncatedText";

const About = () => {

  const { isLoading, data } = useQuery({
    queryKey: ["about"],
    queryFn: () => api.get("about"),
  });


  return (
    <div className="about">
      <div className="left">
        {isLoading ? "Loading" :<img src={data?.data?.image} alt="" />}
      </div>
      <div className="right">
        {isLoading? "Loading" : <h1>{data?.data?.title}</h1>}
          {data?.data?.content ? (
            <TruncatedText text={data?.data.content}/>
          ) : "Loading"}
      </div>
    </div>
  );
};

export default About;
