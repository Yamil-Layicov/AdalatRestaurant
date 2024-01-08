import "./adminAbout.scss";
import { useEffect, useState } from "react";
import api from "../../api/posts";
import { FiUploadCloud } from "react-icons/fi";

const AdminAbout = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("about");

        setContent(response.data.content);
        setTitle(response.data.title);

        setImage(response.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);


  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage(null);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("title", title);

      formData.append("image", image);

      const response = await api.post("about", formData);

      if (response)
        return setTimeout(() => {
          window.location.reload();
        }, 1000);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="adminAbout">
      <h4>Haqqımızda</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload}>
          <div className="div">
            <label>Başlıq *</label>
            <input
              type="text"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="div">
            <label>Məzmun *</label>
            <textarea
              cols="30"
              rows="7"
              value={content || ""}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div className="imageFile div">
            <div className="inputBox">
              <label htmlFor="img1">
                <div className="textIcon">
                  <span>
                    <FiUploadCloud />
                  </span>
                  <span>Şəkil</span>
                </div>
                <img src={previousImage || image} alt="" />
              </label>

              <input
                id="img1"
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
          </div>

          <button type="submit">Yadda saxla</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAbout;
