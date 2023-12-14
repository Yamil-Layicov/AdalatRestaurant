import "./adminSlider.scss";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";


const AdminFeatures = () => {

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`${id}`);
  };

  const handleCreate = () => {
    navigate("yarat");
  };

  const handleDelete = (id) => {
    mutation.mutate(id)
  };


  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn:(id) => {
      return api.delete(`features/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["features"])
      .then(
        toast.success("Uğurla silindi")
      )
    }
  })


  const { isLoading, data } = useQuery({
    queryKey: ["features"],
    queryFn: () => api.get("features"),
  });

  console.log(data?.data);

  return (
    <div className="adminSlider">
      <h4>Headers</h4>

      <div className="tableContent">
        <div className="createNewBtn">
          <button onClick={handleCreate}>Yenisini yarat +</button>
        </div>
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
                  <td  style={{width:"110px", padding:"12px"}}>
                    <button onClick={() => handleEdit(item.id)}>
                      <BiEditAlt />
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      <RiDeleteBin5Line />
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
