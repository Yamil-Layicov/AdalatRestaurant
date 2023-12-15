import "./adminSlider.scss";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import {  useQuery, } from "@tanstack/react-query";
import { ProgressBar } from "react-loader-spinner";


const AdminFeatures = () => {

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`${id}`);
  };



  const { isLoading, data } = useQuery({
    queryKey: ["features"],
    queryFn: () => api.get("features"),
  });

  console.log(data?.data);

  return (
    <div className="adminSlider">
      <h4>Headers</h4>

      <div className="tableContent">
        <table>
          <thead>
            <tr>
              <th style={{width:"110px", padding:"12px"}}>Şəkil *</th>
              <th>Başlıq  *</th>
              <th>Mətn  *</th>
              <th style={{width:"100px"}}>Parametrlər</th>
            </tr>
          </thead>
          <tbody>
            { isLoading ? (
              <div className="progressBar">
                <ProgressBar
                  height="80"
                  width="80"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="white"
                  barColor="#51E5FF"
                />
              </div>
            ) : (
              data.data?.map((item) => (
                <tr key={item.id}>
                  <td style={{width:"110px", padding:"12px"}}>
                    <img
                      style={{ width: "80px", height: "80px", objectFit:"cover" }}
                      src={item?.image}
                      alt=""
                    />
                  </td>
                  <td>{item?.title}</td>
                  <td>{item?.content}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>
                      <BiEditAlt />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminFeatures;
