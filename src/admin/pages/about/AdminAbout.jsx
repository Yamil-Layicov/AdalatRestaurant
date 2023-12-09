import "./adminAbout.scss";
import { useEffect, useState } from "react";
import api from "../../api/posts";

const AdminAbout = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const [image_1, setImage_1] = useState(null);
  const [previousImage_1, setPreviousImage_1] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("about");
        console.log(response.data);

        setContent(response.data.content);
        setTitle(response.data.title);

        setImage_1(response.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const handleImage_1 = (e) => {
    const file = e.target.files[0];
    setImage_1(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage_1(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage_1(null);
    }
  };

 

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("title", title);

      formData.append("image", image_1);

      const response = await api.post("about", formData);

      // if(response) return setTimeout(() => {
      //   window.location.reload()
      // }, 1000);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="adminAbout">
      <h4>Haqqımızda</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload}>
          <div>
            <label>Başlıq *</label>
            <input
              type="text"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Məzmun *</label>
            <textarea
              cols="30"
              rows="7"
              value={content || ""}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="imageFile">
            <div className="inputBox">
              <label>Böyük şəkil</label>
              <img src={previousImage_1 || image_1} alt="" />
              <input type="file" accept="image/*" onChange={handleImage_1} />
            </div>
          </div>
          <button type="submit">Yadda saxla</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAbout;